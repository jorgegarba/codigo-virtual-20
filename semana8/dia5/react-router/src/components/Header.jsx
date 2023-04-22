import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark">
<div className="container-fluid">
  <Link className="navbar-brand" to="/">Github</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contacto">Contacto</Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link ">Nosotros</Link>
      </li> */}
    </ul>
  </div>
</div>
</nav>
  </div>
  )
}

export default Header
