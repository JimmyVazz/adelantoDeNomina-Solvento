import React, {Component} from 'react';
import DatoEmpleado from './DatoEmpleado/DatoEmpleado'
import SearchBar from '../SearchBar/SearchBar'
import NavPaginacion from '../NavPaginacion/NavPaginacion'
class TableLayout extends Component {
  
  state = {recordsets:[]}

  async componentDidMount(){
    const response  = fetch('http://localhost:3001/api/v1/layout')       //Request para obtener los datos del layout 
    .then(recordts => {
        return recordts.json()
        .then( data =>{
            console.log(data)

            let recordsetArray = []

            for(const prop in data){
                let item = data[prop]
                recordsetArray.push(item)
            }

            this.setState({
                recordsets: recordsetArray
            })
            console.log(this.state.recordsets)
            console.log(typeof this.state.recordsets)
        })
    })
}
    render() {
    return (
      <div>
        <SearchBar />
        <table className="table">
        <thead>
          <tr>
            <th scope="col">RFC</th>
            <th scope="col">SDI (Salario Diario)</th>
            <th scope="col">Cuenta Bancaria</th>
            <th scope="col">Banco</th>
            <th scope="col">Periodo de pago de Nómina</th>
            <th scope="col">No.Nómina</th>
            <th scope="col">IMSS</th>
            <th scope="col">Fecha de ingreso</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
        {
                    this.state.recordsets.map( (recordset, index) => {              
                      return <DatoEmpleado 
                          RFC = {recordset.RFC}
                          SDI = {recordset.SDI}
                          CuentaClabe_tarjeta = {recordset.CuentaClabe_tarjeta}
                          Banco = {recordset.Banco}
                          PeriodoPagoNomina = {recordset.PeriodoPagoNomina}
                          NoNomina = {recordset.NoNomina}
                          IMMS = {recordset.IMSS}
                          FechaIngreso = {recordset.FechaIngreso}
                          key = {index}
                      />
                    })
                    }
        </tbody>
      </table>
      <NavPaginacion />
      </div>
    )
  }
}

export default TableLayout;
