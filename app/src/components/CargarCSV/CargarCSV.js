import React, { Component } from "react";
import { message } from "antd";

export default class CargarCSV extends Component {
  
  state = {
    name: ""
  };
 
  obtenerArchivo = async e => {
    const base_url = "";
    const archivo = new FormData();
    let extension = e.target.files[0].name.split(".")[1];

    if (!(extension === "csv" || extension === "xlsx" || extension === "xls")) {
      message.error(
        "El archivo debe estar en un formato valido (csv, xlsx, xls)."
      );
    }

    archivo.append("file", e.target.files[0]);
	let options = {
		method: 'POST',
		body: archivo
	}

    const enviar = fetch(`http://localhost:3001/api/v1/layout/csv`, options)
	.then(resp => resp.json())
	.then(result  => {
		console.log(result)	
	})
  };

  render() {
    return (
      <>
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={this.obtenerArchivo}
        />
      </>
    );
  }
}
