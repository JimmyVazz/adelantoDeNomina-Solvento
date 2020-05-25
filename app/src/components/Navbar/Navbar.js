import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import TableLayout from '../TableLayout/TableLayout'
import CargarLayout from '../CargarCSV/CargarCSV'
import Login from '../Login/Login'
import Home from '../Home/Home'

class Navbar extends Component {


    render(){
        return(
          <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Bienvenido</a>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="mx-3 text-white" to="/subirLayout">Subir layout</Link>
              </li>
              <li className="nav-item">
              <Link className="mx-3 text-white" to="/empleados/">Ver mis empleados</Link>
              </li>
              <li className="nav-item">
              <Link className="mx-3 text-white" to="/soporte/">Soporte</Link>
              </li>
              <li className="nav-item">
              <Link className="mx-3 text-white" to="admin/"> Panel de Admin</Link>
              </li>
        
              
              <li className="nav-item">
              <Link className="mx-3 text-white" to="/salir/">Cerrar sesión</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/subirLayout/" exact component={CargarLayout}/>
        <Route path="/empleados/" component={TableLayout}/>
        <Route path="/salir/" component={Login}/>
        <Route exact path="/" component={Home}/>
        </Router>
        )
    }
}

export default Navbar