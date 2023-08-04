import React from 'react';
import './App.css';

let Test = (props) => {
     console.log(props);
     return (
          <div className="App">
         {/* <h1> Name : {props.name} and Age: {props.age} </h1> 
         <h1> New Data: {props.children} </h1>  */}
          </div>
     )
}

 
 

export default Test;