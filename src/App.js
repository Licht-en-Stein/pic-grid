import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import './App.css';
import Image from './Images/Image';


class App extends Component {
  
  state = {
      pictures: []
    }
  
getRandomInt = (min, max)=> {
return Math.floor(Math.random() * (max - min)) + min; 
// The maximum is exclusive and the minimum is inclusive
}

loadImage = () => {
this.setState(prevState => {
  return {pictures: [...prevState.pictures,
        `https://picsum.photos/100/100/?image=${this.getRandomInt(100, 900)}`]}
  })
}

removeImage = (index) => {
const pictures = [...this.state.pictures];
pictures.splice(index,1);
this.setState({pictures: pictures});
}

newImage = (index) => {
  const pictures = [...this.state.pictures];
  pictures[index] = `https://picsum.photos/100/100/?image=${this.getRandomInt(100, 900)}`;
  this.setState({pictures: pictures});
}

render() {

  return (
    <div className="App">
     <Container>
       <Row>
         <h4>
           Pic Pic Picsum
         </h4>
       </Row>
       <Row className="box-btn">
         <Col xs='3'>
          <Button color='primary' onClick={this.loadImage}>New Image</Button>
         </Col>
         <Col xs='9'>
           {this.state.pictures.map((pic, index) => {
            const iKey = this.getRandomInt(0, 100000)
            return <Image pictures={pic} key={iKey} removeImage={() => {this.removeImage(index)}} 
            newImage={() => {this.newImage(index)}}/>
           })}
         </Col>
       </Row>
     </Container>
    </div>
  );
}
}

export default App;
