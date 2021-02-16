import React, {Component} from 'react';
import './StakeLp.css'


class AddLiquidity extends Component{
   async componentWillMount(){
    // await this.loadWeb3()
    // await this.loadBlockData()
  }




      constructor(props){
        super(props)
        
        
      }
    render(){
        return (
            <main className="main-bg ">

                <div className="container h-100">
                    
                        <div className="text-center pt-5">
                            <h3 className="text-white">JOIN ZENOF-ETH Uniswap V2 LP</h3>
                            <span className="text-white">join ZENOF-ETH liquidity pools to enable you stake and earn</span>
                        </div>

                    <div className="row pt-3 justify-content-center align-items-center" >
                       

                    
                    
                        <div className="card rounded mx-3  text-center p-3 text-white sCard">
                           
                                    
                            <div className="text-center">
                                <img style={{width:"64px",height:"64px"}} className=" rounded-circle "src="/uniswaplogo.jpg" />
                            </div>
                                
                            
                            <div className="card-body">
                                <h3 style={{marginBottom: "-4px"}}>Uniswap</h3>
                               
                                <a target="_blank" href="https://app.uniswap.org/#/add/ETH/0xF3820F8Fb19f4E097a697a262D6201bDfbc08a17" className="btn btn-block btn-outline-light mt-4 roundedBtn">
                                    Join LP
                                </a>
                            </div>
                            
                        </div>


                    </div>
                </div>
                  
            </main>
        )
    }
}

export default AddLiquidity