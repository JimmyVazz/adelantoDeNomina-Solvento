import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Navbar from '../Navbar/Navbar'

export default class SearchBar extends Component {

  state = {
    buscar:""
  }

  handleSubmit =(event) => {
    event.preventDefault();
        var buscar = this.buscar;
        console.log(buscar)
  }

//   handleChange = (event) => {
//     event.preventDefault();
//     let buscar = event.target.value
//     console.log(buscar)
//     fetch(`http://localhost:3001/api/v1/layout/?NoNomina=${buscar}`)
//      .then(recordts => {
//         return recordts.json()
//         .then( data =>{
//             console.log(data)

//   }
// }
//   }

  
  render() {
    return (
      <div >  
         <nav className="navbar navbar-light bg-light" align="center">
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Ingrese No.Nomina" aria-label="Search" name="buscar" onChange={this.handleChange}/>
  </form>
</nav>
      </div>
    )
  }
  }



