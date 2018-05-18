import React, { Component } from 'react';
import { Badge } from 'reactstrap';

class Image extends Component {

  state = {
      url: null
    }
  
  static getDerivedStateFromProps (nextProps, prevState){
    console.log('component will receive props', nextProps);
    return ({url: nextProps.pictures})
   
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('component should update')
    return true;
  }

  render() {
    return (
      <div className="Image">
        <img src={this.props.pictures} alt="#"/>
        <h5><Badge color="danger" onClick={this.props.removeImage}>X</Badge>
        <Badge color="primary" onClick={this.props.newImage}>+</Badge></h5>
      </div>
      )
  }
}

export default Image;