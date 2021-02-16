import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import Color from '../abis/Color.json'
import Buy from './Buy'
import Home from './Home'
import Error from './Error'
import Header from './Header'
import Myalpaca from './Myalpaca';
import Breed from './Breed'
import Farm from './Farm'
import Adopt from './Adopt'
import UnlockWallet from './UnlockWallet'
import StakeLp from './StakeLp'
import AddLiquidity from './AddLiquidity'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ZenofLPStaking from '../abis/ZenofLPStaking.json'
import WrapLpToken from '../abis/WrapLpToken.json'
import ZenofToken from '../abis/ZenofToken.json'

class App extends Component {

  async componentWillMount(){
     await this.loadWeb3()
     await this.loadBlockData()
  }

  async loadWeb3(){
    if(window.ethereum){
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      alert('No Ethereum browser detected try meta mask')
    }
  }
async loadBlockData(){
  const web3 = window.web3
  const accounts = await web3.eth.getAccounts();
    this.setState({account:accounts[0]});
   
    const networkId = await web3.eth.net.getId()
    // const networkData = Color.networks[networkId]
    console.log(networkId)
    if(networkId===3){
        const abi = ZenofLPStaking.abi
        const address = "0xBf4D989c265B8a548d4b88E3E056E2c63C696f34"
        const contract = new web3.eth.Contract(abi,address)
        this.setState({contract})
        const userInfo = await contract.methods.userInfo(0,accounts[0]).call()
        this.setState({userInfo})
        this.setState({loading:false})

        const wrapAbi = WrapLpToken.abi
       
        const wrapAddress = "0x41799DdB1cDBa73cE2a10C7622254F59DfFd1A11"
        const wrapContract = new web3.eth.Contract(wrapAbi,wrapAddress)
        this.setState({wrapContract})
        const userLpBalance = await wrapContract.methods.balanceOf(accounts[0]).call()
        console.log('lp Balance',web3.utils.fromWei(userLpBalance.toString(),'ether'));
        this.setState({userLpBalance:web3.utils.fromWei(userLpBalance.toString(),'ether')})
        this.setState({realuserLpBalance:userLpBalance})
        this.setState({loading:false})
        const name = await wrapContract.methods.name().call()
        console.log('name',name);
        

        const zenofTokenAbi = ZenofToken.abi
       
        const zenofTokenAddress = "0xF3820F8Fb19f4E097a697a262D6201bDfbc08a17"
        const zenofTokenContract = new web3.eth.Contract(zenofTokenAbi,zenofTokenAddress)
        const zname = await zenofTokenContract.methods.name().call()
        console.log('Zenof TOken name',zname);
        this.setState({zenofTokenContract})
       
      
    }
    else {
        alert('Smart Contract not deployed to detected network')
    }

  }


  stakeLpToken = (amount)=>{

            
    let realamount = window.web3.utils.toWei(amount.toString(),'Ether')
    
    if(amount <= this.state.userLpBalance){
      
       this.state.wrapContract.methods.approve("0xBf4D989c265B8a548d4b88E3E056E2c63C696f34",realamount)
       .send({from:this.state.account})
       .once('transactionHash', (receipt)=>{

           alert("Approve done")

           this.state.contract.methods.deposit(0,realamount).send({from:this.state.account})
           .once('receipt', (receipt)=>{
                  
               alert("Sucess")
              this.setState({
                 userLpBalance: this.state.userLpBalance - realamount
              })
           })
           window.location.reload(false);
       })
   
      
      
   }
   else{
       alert(`Insufficient Token Your Balance is ${window.web3.utils.fromWei(this.state.userLpBalance.toString(),'Ether')}`)
   }
}

withdrawStakeLp = (poolId,amount)=>{

            
  let realamount = window.web3.utils.toWei(amount.toString(),'Ether')
  
  if(realamount >= this.state.userInfo.amount){
    this.state.contract.methods.withdraw(poolId,realamount).send({from:this.state.account})
    .once('receipt', (receipt)=>{
           
        alert("Sucess")
        this.state.userInfo.amount -= realamount
       this.setState({
          userInfo: this.state.userInfo
       })
    })
    window.location.reload(false);
 }
 else{
     alert(`Insufficient Token Your Balance is ${window.web3.utils.fromWei(this.state.userInfo.amount.toString(),'Ether')}`)
 }
}


constructor(props){
  super(props)
  this.state = {
    account:'',
    contract:{},
    userInfo:{},
    loading:true,
    wrapContract:{},
    zenofTokenContract:{},
    userLpBalance:0,
    realuserLpBalance:0,
    show:false,
    amount:0,
  
  }
  
  
}
  render() {
    let content;
		if (this.state.loading)
			content = (
				<p id="loader" className="text-center">
					Loading...
				</p>
			);
      else 
        content = (
          <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          
          <Route path="/farm" >
              <Farm/>
          </Route>

          <Route path="/breed" >
            <Breed/>
          </Route>
          <Route path="/myalpaca">
            <Myalpaca/>
          </Route>
          <Route path="/adopt">
            <Adopt/>
          </Route>
          <Route path="/buy" >
            <Buy/>
           </Route>
          <Route path="/unlockwallet" >
            <UnlockWallet/>
          </Route>
          <Route path="/stakelp" >
            <StakeLp  
              contract={this.state.contract}
              userInfo={this.state.userInfo} 
              realuserLpBalance={this.state.realuserLpBalance}
              wrapContract={this.state.wrapContract}
              zenofTokenContract={this.state.zenofTokenContract}
              account={this.state.account}
              stakeLpToken={this.stakeLpToken}
              withdrawStakeLp={this.withdrawStakeLp}
            />
          </Route>
          <Route path="/addliquidity" >
            <AddLiquidity/>
          </Route>
          <Route component={Error} />
        </Switch>
        );
    return (
        <main>
              <Header account={this.state.account}/>  

              {content}
         
        </main>

  
    );
  }
}

export default App;
