import React, {Component} from 'react';
import ReactDOM from 'react-dom'

export default class NavPaginacion extends Component {

   render() {
      return (
<ul className="nav nav-pills nav-fill">
  <li className="nav-item">
    <a className="nav-link" href="#">Ir al principio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Primera Página</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Siguiente Página</a>
  </li>
  <li className="nav-item">
  <a className="nav-link" href="#">Ir al final</a>
  </li>
</ul>
      )
   }

}