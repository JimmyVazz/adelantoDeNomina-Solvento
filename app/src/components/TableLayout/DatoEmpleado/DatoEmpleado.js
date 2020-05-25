import React, {Component} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
class DatoEmpleado extends Component {

  constructor(){
    super();
  }

  render() {
    return (
        <tr>
            <th scope="row">{this.props.RFC}</th>
            <th scope="row">{this.props.SDI}</th>
            <th scope="row">{this.props.CuentaClabe_tarjeta}</th>
            <th scope="row">{this.props.Banco}</th>
            <th scope="row">{this.props.PeriodoPagoNomina}</th>
            <th scope="row">{this.props.NoNomina}</th>
            <th scope="row">{this.props.IMMS}</th>
            <th scope="row">{this.props.FechaIngreso}</th>
            <th scope="row"> <CreateIcon /></th>
						<th scope="row"><DeleteIcon/> </th>

      </tr>
    
    )
  }
}

export default DatoEmpleado;
