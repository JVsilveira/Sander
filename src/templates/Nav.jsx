import "./Nav.css"
import React from "react"
import { Link } from "react-router-dom"

export default () => {
  return (
    <div className="nav">
      <nav className="nav-menu">
        <Link to="/Home">
          <i className="nav-inicio"></i>Início
        </Link>

        <Link to="/Login">
          <i className="nav-login"></i>Login
        </Link>
      </nav>
    </div>
  )
}
