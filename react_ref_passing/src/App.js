import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      price : 0,
      quantity : 0,
      result : 0
    };
  }

  computeIt(){
    console.log(this.refs.price.value);
    console.log(this.refs.quantity.value);
    // console.log(this.refs.result.value);
    this.setState({
      ...this.state , result: parseInt(this.refs.price.value) * parseInt(this.refs.quantity.value)
    });
  }

  render(){
    return(
      <div className="App">
        <input type="text" ref='price' placeholder = 'Enter price here' />
        <input type="text" ref='quantity' placeholder= 'Enter quantity here'/>

        <button onClick = {()=> this.computeIt()}>Compute it</button>
        {this.state.result}
      </div>
    )
  }
} 