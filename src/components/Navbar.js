import React, { Component } from 'react'
import {Container, Navbar, Nav} from "react-bootstrap"
          
  export default class Navbarcomponent extends Component {
            render() {
              return (
                <div> 
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">PHOTO GALLAERY</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link >PHOTOS</Nav.Link>
      <Nav.Link >ABOUT US</Nav.Link>
      <Nav.Link >CONTACT US</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link>SIGN UP</Nav.Link>
      <Nav.Link>LOGIN</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
                </div>
              )
            }
          }