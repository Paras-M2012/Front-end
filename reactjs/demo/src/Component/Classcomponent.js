// Component : this is the block of code. so wehn we need we use it this is the actual deffination of Component.
// There are two types of Component - 1) Class 2) Function
// Class component is allow HTMl and reader also 
// import React, { Component } from "react";
// import React from { Component } "react";

// class ClassCompo extends Component{
//     render(){
//         return(
//             <h1> This class component we are using with this syntax but you have to must go in App.js and call with closing tag but make sure in curly braces</h1>
//         )
//     }
// }
// export default ClassCompo

import React, { Component } from 'react'

export default class ClassCompo extends Component {
  render() {
    return (
      <div>
        <h1>React RCC compoenent</h1>
      </div>
    )
  }
}