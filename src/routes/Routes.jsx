import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../Components/Home"
import Main from "../templates/Main"

export default () => {
  return (
    <Routes>
      <Route
        path="/Home"
        element={
          <Main>
            <Home />
          </Main>
        }
      />
    </Routes>
  )
}
