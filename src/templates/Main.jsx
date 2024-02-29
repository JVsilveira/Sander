import "./Main.css"
import React from "react"
import Nav from "./Nav"

export default ({ children }) => (
  <div className="main">
    <Nav />
    {children}
  </div>
)
