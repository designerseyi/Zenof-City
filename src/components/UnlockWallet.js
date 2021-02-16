import React, { Component } from 'react';
import Web3 from 'web3'
import './UnlockWallet.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class UnlockWallet extends Component {

  async componentWillMount(){
        // await this.loadWeb3()
    // await this.loadBlockData()
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

  loadWalletConnect(){

  }

constructor(props){
  super(props)
  this.state = {
    account:'',
    contract:null,
    totalSupply:0,
    colors:[]
  }
  
}
  render() {
    return (
        <main className="container mx-auto">
                <p className="text-center" style={{fontSize:"18px"}}><strong>Select a wallet provider.</strong></p>

               

                <div className="row" style={{justifyContent:"center"}}>
                    
                    <div className="w-12 mx-2">
                        <div className="card rounded  bg-dark text-white text-center">
                                
                                <div className="text-center">
                                    <img style={{width:"64px",height:"64px"}} className="mt-5 rounded-circle "src="/metaMask.jpg" />
                                </div>
                                
                            
                            <div className="card-body">
                                <strong className="mb-2" style={{display:"block"}}>Metamask</strong>
                                <button style={{width:"100%"}} onClick={this.loadWeb3} className="btn btn-primary roundedBtn">Connect</button>
                            </div>
                        </div>
                    </div>



                    <div className="w-12 mx-2">
                        <div className="card w-70 bg-dark text-white text-center">
                                
                                <div className="text-center">
                                    <img style={{width:"64px",height:"64px"}} className="mt-5 rounded-circle "src="/walletconnect.png" />
                                </div>
                                
                            
                            <div className="card-body">
                                <strong className="mb-2" style={{display:"block"}}>Wallet Connect</strong>
                                <button className="btn btn-primary roundedBtn" style={{width:"100%"}}>Connect</button>
                            </div>
                        </div>
                    </div>

                </div>
        </main>

  
    );
  }
}

export default UnlockWallet;
