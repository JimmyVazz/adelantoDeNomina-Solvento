
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Result, Button } from 'antd';

export default class NotFound extends Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Lo sentimos, la página que has visitado no existe."
        extra={
          <Link to='/'>
            <Button type="primary">Regresar al Inicio</Button>
          </Link>}
      />)
  }
}