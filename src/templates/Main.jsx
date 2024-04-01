import "./Main.css"
import React from "react"
import Nav from "./Nav"
import Header from "./Header"

export default ({ children }) => (
  <div className="main">
    <Nav />
    <Header />
    {children}
  </div>
)
