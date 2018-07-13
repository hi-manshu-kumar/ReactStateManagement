import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
  constructor(){
    super();
    //to show the value in html we need to create instance variable
    this.myname = '';
    //for state management
    this.state = {yourname : ''}; // now if we have to change the data to on type we have to perform state change which is done by setstete fn 
  }
  takeInput(event){
      console.log("this is ",event.target.value);
      // event is passed which is an object and we get the "value" of text box target "refers" to the "input tag"

      // now we want to show the value to the html file from input tag
      // we do this 
  // var myname = event.target.value;
  this.setState({yourname:this.myname});  
        // but myname will not be passed to the render function SO WE NEED AN INSTANCE VARIABLE, WE CAN DO IT BY DECLARING IT IN CONSTRUCTOR
        // setState is glue b/w view and model same as $scope in angularjs 
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
      {/* NOw we have to add '.bind(this)' in the 'this.takeInput' to get this of class that will help to use myname THIS IS CALLED FUNCTION BINDING */}
         <input type="text" onChange = {this.takeInput.bind(this)}/>
      {/* now we will show the myname variable  to html but it will not happen  */}
          <h1>
            {/* {this.myname} 
               after state mgmt new code will be*/}
             Your name is {this.state.yourname}
          </h1>
      {/* 1:- this.myname is not printed on the screen as the 'render' function is not called again i.e. render fucntion we only be called once in during          loading page 
          2:- now question is how to show this.myname can be printed we will use REACT STATE MANAGEMENET*
          3:- add this.state in in constructor */}
      </div>
    );
  }
}

