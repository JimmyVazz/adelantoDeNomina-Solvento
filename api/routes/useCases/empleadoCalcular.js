
const calcularSalario = (SDI, periodo, fechaIngreso, fechaPago, factor) => {

   let hoy = new Date()
   let diaHoy = hoy.getDate()
   //De acuerdo a la formula hoy - 1 dia
   diaHoy = diaHoy 
   let mesHoy = hoy.getMonth()+1
   let anioHoy = hoy.getFullYear()
   let fechaHoyTratada = [parseInt(diaHoy), parseInt(mesHoy), parseInt(anioHoy)]
   //Variables para fecha pagolet fechaPagoTratada = fechaPago.split('/')
   let diaPago 
   let mesPago 
   let anioPago 
   //Fecha inicio nomina
   let inicio = []
   
   //Dias feriados 
   
   //Sabados y domingos
   let diasNoTrabajados = [306, 307, 313, 314, 320, 321, 327, 328, 334, 335, 341, 342, 348, 349, 355, 356, 359,362, 363]
   
   //Obtenemos fecha de ingreso por dia, mes año 
   let fechaIngresoTratada = fechaIngreso.split('/')
   let diaIngreso = parseInt(fechaIngresoTratada[0])
   let mesIngreso = parseInt(fechaIngresoTratada[1])
   let anioIngreso = parseInt(fechaIngresoTratada[2])
   //Obtenemos fecha de pago hoy por dia, mes, año
   if(fechaPago !== ""){
   
   let fechaPagoTratada = fechaPago.split('/')
   diaPago = parseInt(fechaPagoTratada[0])
   mesPago = parseInt(fechaPagoTratada[1])
   anioPago = parseInt(fechaPagoTratada[2])
   inicio[0] = diaPago
   inicio[1] = mesPago
   inicio[2] = anioPago
   
   }else{
     inicio[0] = diaIngreso
     inicio[1] = mesIngreso
     inicio[2] = anioIngreso
   }
   
   //Obtenemos el dia de la fecha por numero en el año 1-365
   function dayInYear(anio, mes, dia) {
     let now = new Date(anio, mes-1, dia)
     let start = new Date(now.getFullYear(), 0, 0)
     let diff = now - start;
     let oneDay = 1000 * 60 * 60 * 24
     let day = Math.floor(diff / oneDay)
     return day
   }
   
   //Factor de descuento 0 - 1
   let factorDescuento = factor
   //Comision retiro
   let comision = 0
   //Periodos nomina
   let periodoNomina = ["Semanal","Catorcenal", "Quincenal", "Mensual"]
   //Dias de la Semana
   let diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
   //Dias del año de 1 - 365
   let diaUltimoPago = dayInYear(anioPago, mesPago, diaPago)
   let diaActual = dayInYear(anioHoy, mesHoy, diaHoy)
   let diaDeIngreso = dayInYear(anioIngreso, mesIngreso, diaIngreso)
   
   //Dias trabajados
   let diasTrabajados = 0
   //dias maximos trabajados
   let diasMaximos = 5
   //Dias trabajados diasTrabajados netos
   let diasNetos = 0
   //Monto prestamo
   let salarioAPrestar = 0.0

   let salarioMaximo = 0.0
   
   //Calculo dias trabajados
   function calcularDiasTrabajados(diaActual, diaUltimoPago, diaDeIngreso){
     let inicio = diaUltimoPago + 1
     let dias
     //Validacion si fecha de ingreso es mayor al ultimo dia de pago o no hay fecha de pago, se toma como primer dia de trabajo la fecha de ingreso
     if(fechaPago === ""){
     inicio = diaDeIngreso + 1 
     dias = diaActual - inicio
     console.log("Tome el dia de ingreso:" +dias)
     //Quitamos sabados y domingos
     for(let i = inicio; i <= diaActual; i++){
       for(let j = 0; j < diasNoTrabajados.length; j++){
       if(i === diasNoTrabajados[i]){
         dias = dias - 1
       }
       }
       
     }
     return dias
     }else{
   
     dias = diaActual - inicio
     //Quitamos sabados y domingos
     for(let i = diaUltimoPago; i < diaActual; i++){
       for(let j = 0; j < diasNoTrabajados.length; j++){
         if(i === diasNoTrabajados[j]){
           dias = dias - 1
         }
       }
     }
     return dias
   }
   
   }
   
   //Calculo del prestamo por dias trabajados 
   
   function calcularPrestamoSemanal(SDI, diasTrabajados){
     if(diasTrabajados===5){
       
       diasTrabajados = 1
     }
     console.log("Dias trabajados: " + diasTrabajados)
     let prestamo = SDI * (diasTrabajados) * factorDescuento 
     return prestamo
   }
   
   function calcularPrestamoQuincenal(SDI, diasTrabajados){
    if(diasTrabajados === 15){
      diasTrabajados = 1
    }
    console.log("Dias trabajados: " + diasTrabajados)
     let prestamo = SDI * (diasTrabajados) * factorDescuento 
     return prestamo
   }  
   

   function calcularPrestamoCatorcenal(SDI, diasTrabajados){
    if(diasTrabajados === 14){
      diasTrabajados = 1
    }
    console.log("Dias trabajados: " + diasTrabajados)
     let prestamo = SDI * (diasTrabajados) * factorDescuento 
     return prestamo
  }

  function calcularPrestamoMensual(SDI, diasTrabajados){
    if(diasTrabajados === 30){
      diasTrabajados = 1
    }
    console.log("Dias trabajados: " + diasTrabajados)
     let prestamo = SDI * (diasTrabajados) * factorDescuento 
     return prestamo
  }
   let max1 = 500
   let max2 = diasMaximos*factorDescuento*SDI
   
   //Calculamos los prestamos de acuerdo al tipo de periodo 
   if(periodo === periodoNomina[0]){
     console.log("Calculando Semanal...")
     salarioMaximo = 5 * SDI
     diasTrabajados =  calcularDiasTrabajados(diaActual, diaUltimoPago, diaDeIngreso) 
     salarioAPrestar = calcularPrestamoSemanal(SDI, diasTrabajados)
     if(salarioAPrestar > 0){
      if(salarioAPrestar < salarioMaximo){
        console.log("Te podemos prestar $" +salarioAPrestar + " pesos.")
       alert(`Te podemos prestar $${salarioAPrestar} pesos de acuerdo a los ${diasTrabajados} dias que has trabajado`)

      }else {
        alert("Sobrepasas el limite maximo para pedir un adelanto")
      } 
     }else{
       console.log("Para pedir prestamos debes por lo menos trabajar un dia")
       alert("Para pedir prestamos debes por lo menos trabajar un dia")
     }
   }else if(periodo === periodoNomina[1]){
     diasMaximos = 14
     console.log("Calculando Catorcenal")
     salarioMaximo = 14 * SDI
     diasTrabajados =  calcularDiasTrabajados(diaActual, diaUltimoPago, diaDeIngreso) 
     salarioAPrestar = calcularPrestamoCatorcenal(SDI, diasTrabajados)
     if(salarioAPrestar > 0){
       if(salarioAPrestar < salarioMaximo){
        console.log("Te podemos prestar $" +salarioAPrestar + " pesos.")
        alert(`Te podemos prestar $${salarioAPrestar} pesos de acuerdo a los ${diasTrabajados} dias que has trabajado`)
       }else{
        alert("Sobrepasas el limite maximo para pedir un adelanto")
       }
     }else{
       console.log("Para pedir prestamos debes por lo menos trabajar un dia")
       alert("Para pedir prestamos debes por lo menos trabajar un dia")
     }
     
   }else if(periodo === periodoNomina[2]){
     diasMaximos = 15
     console.log("Calculando Quincenal")
     salarioMaximo = 15 * SDI
     diasTrabajados =  calcularDiasTrabajados(diaActual, diaUltimoPago, diaDeIngreso) 
     salarioAPrestar = calcularPrestamoQuincenal(SDI, diasTrabajados)
     if(salarioAPrestar > 0){
       if(salarioAPrestar < salarioMaximo){
        console.log("Te podemos prestar $" +salarioAPrestar + " pesos.")
        alert(`Te podemos prestar $${salarioAPrestar} pesos de acuerdo a los ${diasTrabajados} dias que has trabajado`)
       }else{
         alert("Sobrepasas el limite maximo para pedir un adelanto")
       }

      }else{
       console.log("Para pedir prestamos debes por lo menos trabajar un dia")
       alert("Para pedir prestamos debes por lo menos trabajar un dia")
     }
     
   }else{
     diasMaximos = 30
     console.log("Calculando Mensual")
     salarioMaximo = 30 * SDI
     diasTrabajados =  calcularDiasTrabajados(diaActual, diaUltimoPago, diaDeIngreso) 
     salarioAPrestar = calcularPrestamoMensual(SDI, diasTrabajados)
     if(salarioAPrestar > 0){
       if(salarioAPrestar < salarioMaximo){
        console.log("Te podemos prestar $" +salarioAPrestar + " pesos.")
        alert(`Te podemos prestar $${salarioAPrestar} pesos de acuerdo a los ${diasTrabajados} dias que has trabajado`)
       }else{
         alert("Sobrepasas el limite maximo para pedir un adelanto")
       }
     }else{
       console.log("Para pedir prestamos debes por lo menos trabajar un dia")
       alert("Para pedir prestamos debes por lo menos trabajar un dia")
     }
     
   }

  }


  module.exports = {
    calcularSalario
  }
