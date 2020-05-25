import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import CSVReader from 'react-csv-reader'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import CalculadoraCredito from './components/CalculadoraCredito/CalculadoraCredito'

class App extends Component {

  render() {
    return (
      <div className="App">
          <CalculadoraCredito />
      
          
      </div>

    )
  }
}

export default App;
