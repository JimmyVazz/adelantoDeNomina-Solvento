import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from '../Home/Home'

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

 handleSubmit = event => {
  event.preventDefault()
      const {Usuario, Contraseña} = this.state
      fetch('http://localhost:3000/api/v1/login',{
        method:"POST",
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({Usuario, Contraseña})
    })
    .then(response => {
      if (response.data){
        console.error("Exito al iniciar sesion")
      }
        console.log(response)
        
    }).catch(err=>{
      console.error(err)
    });
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Solvento ADN"
           />
           <TextField
             hintText="Ingresa tu usuario"
             floatingLabelText="Usuario"
             name="Usuario"
             onChange = {this.handleChange}
             />
           <br/>
             <TextField
               type="password"
               hintText="Ingresa tu contraseña"
               floatingLabelText="Contraseña"
               name="Contraseña"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
            
             
             <RaisedButton label="Submit" primary={true} style={style} />
    
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;