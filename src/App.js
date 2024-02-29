import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Routes from "./routes/Routes"
import React from "react"

export default () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  )
}
