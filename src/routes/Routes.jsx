import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../Components/Home"
import Main from "../templates/Main"
import Login from "../Components/Login"

export default () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main>
            <Home />
          </Main>
        }
      />
      <Route
        path="/Login"
        element={
          <Main>
            <Login />
          </Main>
        }
      />
    </Routes>
  )
}
