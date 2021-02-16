import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import {Nav,Navbar,NavDropdown,Button} from 'react-bootstrap'
import './Header.css'
import Web3 from 'web3'



const Header = (props)=>{
 

    return (
        <Navbar  expand="xl">
            <Navbar.Brand href="#home">
                <span className="Header-logo">
                 <span className="Header-logo-icon mr-2 "/>
                    <strong>Zenof</strong>
                </span>
                 
                    
             </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                
                 <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">What's Zenof</Nav.Link>
         
           
                </Nav>
            
                {props.account?
                    <span className="badge badge-success p-2">{props.account}</span>
                        : <Button variant="success">Connect Wallet </Button>
                }
               
               
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Header

// import React from 'react';
// import {Link} from 'react-router-dom'
// import {Nav,Navbar,NavDropdown,Button} from 'react-bootstrap'
// import './Header.css'

// const Header = (props)=>{
//     return (
//         <Navbar  expand="xl">
//             <Navbar.Brand href="#home">
//                 <span className="Header-logo">
//                  <span className="Header-logo-icon mr-2 "/>
//                     <strong>Zenof</strong>
//                 </span>
                 
                    
//              </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                     <Link className="nav-link" to="/farm" > Farms </Link>
//                  <Nav.Link href="/home">Home</Nav.Link>
//                 <Nav.Link href="/farm">Farm</Nav.Link>
//                 <Nav.Link href="#link">Search</Nav.Link>
//                 <NavDropdown title="Alpacas" id="basic-nav-dropdown">
//                     <NavDropdown.Item href="/myalpaca">My Alpacas</NavDropdown.Item>
//                     <NavDropdown.Item href="/adopt">Adopt</NavDropdown.Item>
//                     <NavDropdown.Item href="/breed">Breed</NavDropdown.Item>
                   
//                 </NavDropdown>
//                 </Nav>
            
//                 <Button variant="success">Start</Button>
               
//             </Navbar.Collapse>
//             </Navbar>
//     )
// }

// export default Header