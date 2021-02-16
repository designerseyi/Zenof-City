import React, { useState } from 'react';
import './PhotoBoot.css';
import {Jumbotron,Container,Button} from 'react-bootstrap'

const PhotoBoot = (props) => {
    const [pics, setCount] = React.useState([1,2,3,4,5,6,7,8]);
    return(

        <div className="container">
            <h1 className="photo-heading">Alpaca PhotoBoot</h1>
             <div className="alpacas-cards-container">
               
                    {pics.map((value,index)=>{
                        return <div  className="alpaca-img-wrap marginb-4 no-state ">
                                     <img src={'/'+value+'.png'} key={index}/>
                            </div>
                        
                    })}
               
            </div>
             
        </div>

       
    );
}

export default PhotoBoot