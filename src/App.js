import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios";


import React, { Component } from 'react'
import{ Container } from "react-bootstrap";
import Navbarcomponent from "./components/Navbar";
import Photos from"./components/Photos/Photos";
 export default class App extends Component {
  render() {
    return (
      <div className='App'> 
        
       <Navbarcomponent /> 
      <Photos />
<Container>
  
</Container>
        
      </div>
    )
  }
}
