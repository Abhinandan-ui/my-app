import React from 'react'
import PropTypes from 'prop-types'
import { link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{props.title}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li class="nav-item">
             <a className="nav-link" href="/about">{props.AboutText}</a> 
            
          </li> */}
        
       
        </ul>
        {/* <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
       


<div class={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
  <input class="form-check-input" type="checkbox" onClick={props.toogleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" htmlfor="flexSwitchCheckDefault">Enable DarkMode </label>

</div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
    title :PropTypes.string.isRequired,
    AboutText : PropTypes.string.isRequired
}
Navbar.defaultProps = {
title : 'Set-title-here',
 AboutText: 'About-text-here '
}
