import React, { Component } from 'react';
import {SearchBar} from './childs/searchbar/Searchbar';
import {SearchList} from './childs/list/SearchList';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.searchValue = '';
  }

  takeInput(event){
    this.searchValue = event.target.value;
  }

  doAjax(){
    console.log("Do Ajax Call",this.searchValue);
  }

  render(){
    return(
      <div>
        <h1>Shop Demo</h1>
        {/* Jo methods child ne chalane hai woh bhi React mein 
        parent pe hi define honge uske reference ko pass krdo child ko 
        aur onChange ya kisi keyboard ya mouse event par us method ko run krdenge */}
        <SearchBar takeChildInput = {this.takeInput.bind(this)} parentfn = {this.doAjax.bind(this)} />
      </div>
    )
  }

  // computeIt(){
  //   console.log("refi is ",pr);
  // }

  // render() {
  //   return (
  //     <div>
  //       <input type="text" ref = "pr" placeholder="Enter Price" />
  //       <input type="text" ref= "qt" placeholder="Enter Quantity" />
  //       <button onClick={this.computeIt.bind(this)} >Compute</button>
  //     </div>
  //   );
  // }

}

export default App;
