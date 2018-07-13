import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
  constructor(){
    super();
    //to show the value in html we need to create instance variable
    
  }
  takeInput(event){
      console.log("this is ",event.target.value);
      // event is passed which is an object and we get the "value" of text box target "refers" to the "input tag"

      // now we want to show the value to the html file from input tag
      // we do this 
   var myname = event.target.value;
  
  }

  render() {
    // var name = 'Himank';

    return (
      <div>
       {/* to show dynamic values we use below syntax
        
            <h1>My name is {name}</h1>
         */}

      {/* now supppose we want to have a input tag which stores data as the user input type */}
      {/*  1 When a event is function is call onChange(Event) the event is bind with a source (textbox)
           2 So 'this' is become a TextBox
           3 So we will bind our class object in early object by using bind function */}
      
      </div>
    );
  }
}

