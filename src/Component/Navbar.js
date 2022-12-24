import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = (props) => {

  const [mode,setmode]=useState('light');
  const tooglemode=()=>{
if (mode==='light') {
  setmode('dark');
  document.body.style.backgroundColor='black';
  document.body.style.color='white';

}
else{
  setmode('light');
  document.body.style.backgroundColor='white';
  document.body.style.color='black';

}
  }
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode} fixed-top`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">Science</Link>
            </li>
         
          </ul>

        </div>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={()=>{tooglemode()}}   />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >{mode==='light'?'Light':'Dark'}Mode</label>
</div>
      </div>
     
    </nav>
    </>
  )

}

export default Navbar;