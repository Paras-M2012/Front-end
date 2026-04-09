// state : state it's simple type varibale 
// state : we change data
// state : same file use 
// class : this.state : varibale define 
// class : this.setstate() : inbulit function class
// class : this.state as always object
// State : evenet handler

import React, { Component } from 'react'
import Imagedata from './Imagedata'

export class ClassState extends Component {
    constructor() {
        super()
        this.state = {
            Name: "Paras Panchal",
            Count: 0,
            isImage: true
        }
    }
    render() {
        return (
            <div>
                <h1> Name : {this.state.Name}</h1>
                <button onClick={() => this.setState({ Name: "Riya Panchal" })}>Change Name</button>
                <button onClick={() => this.setState({ Name: "Mantra Panchal" })}>Change Name</button>

                <h1> Count : {this.state.Count}</h1>
                <button onClick={() => this.setState({ Count: this.state.Count + 1 })}>Increment</button>
                <button onClick={() => this.setState({ Count: this.state.Count - 1 })}>Decrement</button>

                <br /><br /><br />

                <button onClick={() => this.setState({ isImage: false })}>Hide</button>
                <button onClick={() => this.setState({ isImage: true })}>Show</button>
                
                {
                    this.state.isImage ? <Imagedata/> : false
                }



            </div>
        )
    }
}

export default ClassState