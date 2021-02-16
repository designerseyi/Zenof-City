import React, {Component} from 'react';
import './StakeLp.css'
import Web3 from 'web3'

import AddLiquidity from './AddLiquidity';
import {Modal,Button} from 'react-bootstrap'
class StakeLp extends Component{
  




      constructor(props){
        super(props)
        this.state = {
          show:false,
          add_show:false,
          w_show:false,
          amount:0,
        }
        
      }
    render(){
       
        let SwapBox = "";
      
        if(!this.props.loading){


        if (this.props.userLpBalance == 0) {
            SwapBox =  (<div className="card rounded mx-3  text-center p-3 text-white sCard">                     
            <div className="text-center">
                <img style={{width:"64px",height:"64px"}} className=" rounded-circle "src="/coin.jpg" />
            </div>
                
            
            <div className="card-body">
                <p>No ZENOF-ETH Uniswap Token</p>
                
                <a target="_blank" href="https://app.uniswap.org/#/add/ETH/0xF3820F8Fb19f4E097a697a262D6201bDfbc08a17" 
                className="btn btn-block btn-success mt-4 roundedBtn">
                  Add Liquidity
                 </a>
            </div>
            
        </div>);
        } 
        
        else if(this.props.userLpBalance>0 && parseInt(this.props.userInfo.amount.toString())== 0 ){
            let {show,amount} = this.state
            let handleClose = () => this.setState({show:false })
            let handleShow = () => this.setState({show:true })
            let handleChange = (e) => {     
                this.setState({amount: e.target.value})
            }

       
         SwapBox = <div className="card rounded mx-3  text-center p-3 text-white sCard">
           
                  
            <div className="text-center">
                <img style={{width:"64px",height:"64px"}} 
                    className=" rounded-circle "src="/uniswaplogo.jpg" />
            </div>
                
            
            <div className="card-body">
                <h3 style={{marginBottom: "-4px"}} className="text-white">{this.props.userLpBalance}</h3>
                <p className="">ZENOF-ETH {show}</p>

                <button onClick={handleShow} className="btn btn-block  btn-success mt-4 roundedBtn">Stake</button>
                
                <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Stake</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Amount: <input type="number" value={amount}  onChange={(e)=>handleChange(e)} />
                        </Modal.Body>
                        <Modal.Footer>
                        
                        <button className="btn btn-success" 
                             onClick={()=>{this.props.stakeLpToken(amount);handleClose()}}>
                            Stake
                        </button>
                        </Modal.Footer>
                    </Modal>

            </div>
            </div>
       
        }
        else if(parseInt(this.props.userInfo.amount.toString())> 0) {
            let {w_show,add_show,amount} = this.state
            let handleClose = () => this.setState({add_show:false })
            let handleShow = () => this.setState({add_show:true })
            let handleChange = (e) => {     
                this.setState({amount: e.target.value})
            }

            let whandleClose = () => this.setState({w_show:false })
            let whandleShow = () => this.setState({w_show:true })
            let whandleChange = (e) => {     
                this.setState({amount: e.target.value})
            }

 

           SwapBox = <main id="dev" className="row h-100 justify-content-center align-items-center">
            <div className="card rounded mx-3  text-center p-3 text-white sCard">
               
                        
                <div className="text-center">
                    <img style={{width:"64px",height:"64px"}} className=" rounded-circle "src="/coin.jpg" />
                </div>
                    
                
                <div className="card-body">
                    <h3 style={{marginBottom: "-4px"}}>
                   
                        {window.web3.utils.fromWei(this.props.userInfo.rewardDebt.toString(),'ether')}</h3>
                    <p className="">ZENOF earned</p>
                   
                </div>
                
            </div>

            <div className="card rounded mx-3  text-center p-3 text-white sCard">

                    <div className="text-center">
                        <img style={{width:"64px",height:"64px"}} className=" rounded-circle "src="/uniswaplogo.jpg" />
                    </div>
                        
                    
                    <div className="card-body">
                        <h3 style={{marginBottom: "-4px"}}>
                            {window.web3.utils.fromWei(this.props.userInfo.amount.toString(),'ether')}
                        </h3>
                        <p className="">ZENOF-ETH staked</p>
                        <button onClick={whandleShow} className="btn  btn-outline-light mt-4 mx-1 roundedBtn">Unstake</button>
                        <button onClick={handleShow} className="btn  btn-success mt-4 roundedBtn">Add</button>
                        
                    </div>

                    <Modal show={add_show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Stake</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Amount: <input type="number" value={amount}  onChange={(e)=>handleChange(e)} />
                        </Modal.Body>
                        <Modal.Footer>
                        
                        <button className="btn btn-success" 
                            onClick={()=>{this.props.stakeLpToken(amount);handleClose()}}>
                            Stake
                        </button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={w_show} onHide={whandleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Unstake</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Amount: <input type="number" value={amount}  onChange={(e)=>whandleChange(e)} />
                        </Modal.Body>
                        <Modal.Footer>
                        
                        <button className="btn btn-success" 
                            onClick={()=>{this.props.withdrawStakeLp(0,amount);whandleClose()}}>
                            Withdraw
                        </button>
                        </Modal.Footer>
                    </Modal>

                           
            </div>

            </main>
            ;
        }

    }
    else{
        SwapBox = <p>loading ... </p>
    }
        return (
            <main className="main-bg ">

                {this.state.loading? <div><p>Loading ..</p></div> :
                
          
                <div className="container h-100">
                    
                    <div className="row h-100 justify-content-center align-items-center" >
                        <div>
                            <h3 className="text-white">ZENOF-ETH Uniswap V2 LP</h3>
                            <span className="text-white">Stake ZENOF-ETH liquidity pools token and earn ZENOF</span>
                        </div>
                          
                            {SwapBox}

                           
                    </div>

                    
                </div>
                  }



                
            </main>
        )
    }
}

export default StakeLp