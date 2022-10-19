import React, { Component } from 'react'
import Ghost from './Ghost.gif';
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
<img  src={Ghost} alt="loading"/>
      </div>
    )
  }
}
