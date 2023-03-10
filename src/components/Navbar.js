import React from 'react'
import Proptypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.modes} bg-${props.modes}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.input1}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">{props.input2}</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}

            <div className={`form-check form-switch text-${props.modes==='info-subtle'?'dark':'light'}`}>
              <input className="form-check-input my-2" onClick={props.togglemode} type="checkbox" 
              role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modetext}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: Proptypes.string.isRequired,
  input1: Proptypes.string.isRequired,
  input2: Proptypes.string.isRequired,
  mode: Proptypes.string
}