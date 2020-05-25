const express = require('express')
const router  = express.Router()

const calculos = require('./useCases/empleadoCalcular')
const {mostrarDatosEmpleado} = require('./useCases/empleado')
const pool = require('../database/database');
const url_base = 'http://localhost:3001/api/v1/empleado'

router.get('/', async(req, res) => {
let query = `SELECT Empleado.nombre, Nomina.RFCRazonSocial, Nomina.salarioDiario, Nomina.activa, Nomina.fechaIngreso, Nomina.semanasCotizadas, Nomina.FactorDescuento, PeriodoPago.fechaUltimoPago, PeriodoPago.descripcion
FROM Empleado, Nomina, PeriodoPago where Empleado.idEmpleado = 1 and Nomina.idEmpleado = 1`
console.log(query)
  const empleado = await pool.query(query);

  res.json(empleado)
})


module.exports = router
