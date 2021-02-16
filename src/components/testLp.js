import React, {Component} from 'react';
import './StakeLp.css'
import Web3 from 'web3'
import ZenofLPStaking from '../abis/ZenofLPStaking.json'
import WrapLpToken from '../abis/WrapLpToken.json'
import AddLiquidity from './AddLiquidity';
import {Modal,Button} from 'react-bootstrap'
class StakeLp extends Component{
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
        this.setState({loading:false})

    }
    else {
        alert('Smart Contract not deployed to detected network')
    }


 
  }

 stakeLpToken = (amount) =>{
       const web3 = window.web3
        console.log(amount)
        if(amount <= this.state.userLpBalance){
                
            contract.methods.deposit(0,amount).send({from:account})
            .once('receipt', (receipt)=>{

                alert("Sucess")
          
                
            })
            
        }
        else{
            alert(`Insufficient Token Your Balance is ${this.state.userLpBalance}`)
        }
    }

      constructor(props){
        super(props)
        this.state = {
          account:'',
          contract:null,
          userInfo:null,
          loading:true,
          wrapContract:null,
          userLpBalance:null,
          show:false,
          amount:0,
        }
        
      }
    
      render(){
        return (
            <main className="main-bg ">

                <div className="container h-100">
                    <div className="row justify-content-center align-items-center">
                    Amount: <input type="text" value={amount}  onChange={(e)=>handleChange(e)} />
                    <button className="btn btn-success" onClick={stakeLpToken}>
                            Stake
                     </button>
                    
                    </div>
                        

                    
                </div>
                  
            </main>
        )
    }
}

export default StakeLp