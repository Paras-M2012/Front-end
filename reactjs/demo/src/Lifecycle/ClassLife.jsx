import React, { Component } from 'react'
import Header from '../Layout/Common/Header'

class ClassLife extends Component {

    constructor(){
        super()
        this.state = {
            Name : "Paras Panchal"
        }
    }
  render() {
    return (
      <div>
        < Header/>
        <h1>hello this is the life cycle method</h1>
        <h1>Hello {this.state.name}</h1>
        <button onClick={()=>this.setState({Name: "MANTRA PANCHAL"})}>CHANGE NAME</button>
      </div>
    )
  }
}

export default ClassLife