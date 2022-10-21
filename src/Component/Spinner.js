import React from 'react'
import Ghost from './Ghost.gif';

const Spinner=()=>{
  return (
    <div className='text-center'>
<img  src={Ghost} alt="loading"/>
    </div>
  )
}
export default Spinner;