import React, { useState, useContext } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../images/PennyTrustLogoSmall.jpg';

import { Link } from 'react-router-dom';

import {UserContext} from '../UserContext';

function Navigation() {

  const [token, setToken] = useContext(UserContext);

  if (token === '') {

    return (
      <Navbar collapseOnSelect expand="lg" className="nav">
        <img
          alt=""
          src={logo}
  
          className="d-inline-block align-top"
        />{' '} &nbsp;
        <Navbar.Brand href="/" className="color"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
   
          <Nav>
          
        
        
            <Nav.Link href="#deets" className="color-light"><Link to="/" className="dark-color">HOME </Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="color-light">
              <Link to="/faq" className="dark-color">FAQs</Link>
            </Nav.Link>
            <Nav.Link eventKey={3} href="#memes" className="color-light">
              <Link to="/contact" className="dark-color">CONTACT US</Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <span className="mt-2 color-light">Existing Customer?</span> &nbsp;<Link to="/dashboard"><Button variant="primary" size="sm" className="btn-2 mt-1">Click here</Button></Link>&nbsp; &nbsp; &nbsp;
        <Link to="/apply"><Button variant="primary" className="btn">Apply Now</Button></Link>
        </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    )

  }

  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
        <img
          alt=""
          src={logo}
  
          className="d-inline-block align-top"
        />{' '} &nbsp;
        <Navbar.Brand href="/" className="color"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
   
          <Nav>
          
        
        
            <Nav.Link href="#deets" className="color-light"><Link to="/" className="dark-color">HOME </Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="color-light">
              <Link to="/faq" className="dark-color">FAQs</Link>
            </Nav.Link>
            <Nav.Link eventKey={3} href="#memes" className="color-light">
              <Link to="/contact" className="dark-color">CONTACT US</Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <span className="mt-2 color-light">Hello</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/apply"><Button variant="primary" className="btn">Logout</Button></Link>
        </Nav>
        </Navbar.Collapse>
        
      </Navbar>
  )

  
}

export default Navigation
