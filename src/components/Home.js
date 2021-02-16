import React, { Component } from 'react';
import Web3 from 'web3'
import './Home.css';
import Color from '../abis/Color.json'
import Buy from './Buy'
import PhotoBoot from './PhotoBoot'
import {Jumbotron,Container,Button} from 'react-bootstrap'


class Home extends Component {

  async componentWillMount(){
    
  }



constructor(props){
  super(props)
  
}
  render() {
    return (
        
      <div>

            <Jumbotron fluid className="jumbotron_white">
                {/* <img src="/mbranch.png"  /> */}
                 <div className="container-fluid mt-5">
                    <div className="row">
                        <main role="main" className="col-lg-12 d-flex text-center">
                        <div className="content mr-auto ml-auto red home-card min-width">

                            
                            <h1>ZENOF City</h1>
                            <div  className="city-info width-100 flex-align-center flex-justify-around flex-wrap">
                              
                                <p > Liquidity Mining</p>
                                </div>
                            <div>
                              <a href="/addliquidity" className="btn btn-success btn-large">
                                  ADD LIQUIDITY
                              </a>
                              
                            </div>
                        
                             

                           
                        </div>
                        </main>
                    </div>
                </div>
                
            </Jumbotron>



      </div>
    );
  }
}

export default Home;


























// import React, { Component } from 'react';
// import Web3 from 'web3'
// import './Home.css';
// import Color from '../abis/Color.json'
// import Buy from './Buy'
// import PhotoBoot from './PhotoBoot'
// import {Jumbotron,Container,Button} from 'react-bootstrap'


// class Home extends Component {

//   async componentWillMount(){
//     await this.loadWeb3()
//     // await this.loadBlockData()
//   }

//   async loadWeb3(){
//     if(window.ethereum){
//         window.web3 = new Web3(window.ethereum)
//         await window.ethereum.enable()
//     }
//     else if(window.web3){
//       window.web3 = new Web3(window.web3.currentProvider)
//     }
//     else {
//       alert('No Ethereum browser detected try meta mask')
//     }
//   }
// async loadBlockData(){
//   const web3 = window.web3
//   const accounts = await web3.eth.getAccounts();
//     this.setState({account:accounts[0]});
   
//     const networkId = await web3.eth.net.getId()
//     const networkData = Color.networks[networkId]
//     if(networkData){
//       const abi = Color.abi
//       const address = networkData.address
//       const contract = new web3.eth.Contract(abi,address)
//       this.setState({contract})
//       const totalSupply = await contract.methods.totalSupply().call()
//       this.setState({totalSupply})

//       for(var i =1; i <= totalSupply; i++){
//        const  color = await contract.methods.colors(i-1).call();
//         this.setState({
//           colors:[...this.state.colors,color]
//         })
//     }
//     }
//     else {
//         alert('Smart Contract not deployed to detected network')
//     }

// }



// mint = (color) =>{
//   this.state.contract.methods.mint(color).send({from:this.state.account})
//   .once('receipt', (receipt)=>{
//     this.setState({
//         colors: [...this.state.colors, color]
//     })
//   })
// }
// constructor(props){
//   super(props)
//   this.state = {
//     account:'',
//     contract:null,
//     totalSupply:0,
//     colors:[]
//   }
  
// }
//   render() {
//     return (
        
//       <div>

//             <Jumbotron fluid className="jumbotron_white">
//                 {/* <img src="/mbranch.png"  /> */}
//                  <div className="container-fluid mt-5">
//                     <div className="row">
//                         <main role="main" className="col-lg-12 d-flex text-center">
//                         <div className="content mr-auto ml-auto red home-card">

                            
//                             <h1>Welcome to Alpa City</h1>
//                             <div  class="city-info width-100 flex-align-center flex-justify-around flex-wrap">
//                               <div class="text-20-regular text-grey-1 margint-4">
//                                 <span  class="text-20-medium text-black marginr-2">24.97K</span> 
//                                 Alpacas 
//                               </div>
//                                 <div  class="text-20-regular text-grey-1 margint-4">
//                                   <span  class="text-20-medium text-black marginr-2">1.07M</span>
//                                    ALPA burned through fees 
//                                    </div>
//                                 </div>
//                             <div>
//                               <Button variant="primary" size="lg">
//                                   Large button
//                               </Button>
//                               <Button variant="primary" size="lg">
//                                   Large button
//                               </Button>
//                             </div>
                        
                             

                           
//                         </div>
//                         </main>
//                     </div>
//                 </div>
                
//             </Jumbotron>

//             <PhotoBoot/>

//         <div className="container-fluid mt-5">
//           <div className="row">
//             <main role="main" className="col-lg-12 d-flex text-center">
//               <div className="content mr-auto ml-auto">
//                   <h1> Issue Token </h1>
//                   <form onSubmit={(event)=>{
//                     event.preventDefault();
//                     const color = this.color.value
//                     this.mint(color)
//                   }}>
//                         <input type="text" placeholder="eg #fffff" 
//                         ref={(input) => {this.color = input}}
//                         className="form-control mb-1" />
//                         <input type="submit" value="mint" className="btn btn-block btn-primary"/>
//                   </form>
//               </div>
//             </main>
//           </div>
//             <hr/>
//           {/* <div className="row text-center">
//               {this.state.colors.map((color,key)=>{
//                 return ( <div key={key} className="col-md-3 col-mb-3">
//                           <div className="token" style={{backgroundColor:color}}> </div>
//                         <div> {color}</div>
//                    </div>)
//               })}  
//           </div> */}

//           <div className="row text-center">

//             <div className="col-md-4"> 
//                 {/* <Buy/> */}
//             </div>

//             <div className="col-md-8"> 
                
//             </div>
            
            
//           </div>

//         </div>
//       </div>
//     );
//   }
// }

// export default Home;
