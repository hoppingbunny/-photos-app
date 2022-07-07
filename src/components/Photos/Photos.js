import axios from 'axios';
import React, { Component } from 'react'
import {Container, Row, Col, Card, Button } from "react-bootstrap";
import './Photos.css';

export default class Photos extends Component {
   constructor (props){
      super(props);
        
      this.state={
         Photos:[],      
      };
   }
      
      async componentDidMount(){

         try{
            let res=await axios.get("https://picsum.photos/v2/list");
            this.setState({
               Photos: res.data,
            })
         }catch(err){
            console.log(err.message);
         }
      }

      showHidephotos = () => {
         this.setState((prevState)=>({
            showAllphotos: !prevState.showAllphotos,
         }));
      };
  render() {
     let  { Photos,showAllphotos } =this.state;

    return (

      <div>
          <Container style={{ marginTop:'20px' }} >  
            <h1>PHOTOS</h1>
            <p>explore images from unsplash</p>
             <hr></hr>

             <Button variant="dark" onClick={this.showHidephotos}>
                {showAllphotos ? 'Hide':'Show'}all photos </Button>


            <Row style={{marginTop:'20px'}}> 
           { Photos.map((Photos,index)=>(
               <Col md={4
               } className="Photos-card" key={Photos.id}>
               <Card style={{ width: '18rem' }}>  
               
            <Card.Img variant="top" src={Photos.download_url}/>
            <Card.Body>
            <Card.Title>{Photos.author}</Card.Title>
            <Card.Text>
           images from unsplash
            </Card.Text>
             <a className='btn btn-dark' href={Photos.url}>explore image</a>
            </Card.Body>
           </Card>
        </Col>

     ) )}

      
   
</Row>
</Container>
      </div>
    )
  }
}

