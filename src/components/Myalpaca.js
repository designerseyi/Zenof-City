import React from 'react'
import {Tabs,Tab} from 'react-bootstrap'
import './Myalpaca.css'
const Myalpaca = ({props}) => {
    return (
        <div className="container">
            <div className="flex-box">
                
                <div className="headerGrid">
                    <div className="grid-item-6">
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="My Alpacas">
                            <h3>My Alpacas</h3>
                            </Tab>
                            <Tab eventKey="profile" title="Other Alpacas">
                                <h3>Other Alpacas</h3>
                            </Tab>
                            
                        </Tabs>

                    </div>

                    <div className="headerButtons">
                            <button className="btn btn-success btn-lg rounded-pill mx-2 ">Breed </button>
                            <button className="btn btn-outline-success btn-lg rounded-pill">Adopt</button>
                    </div>
                   
                </div>
               

              
            </div>
            
        </div>
    );
}

export default Myalpaca;