import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Navbar from '../Navbar/Navbar'

export default class Home extends Component {
  
  handleForce = data => {
    let array = data
    console.log(array.length)
  }
  render() {
    return (
      <div className="container">
        <h1> Bienvenido</h1>
    </div>
    )
  }
}


