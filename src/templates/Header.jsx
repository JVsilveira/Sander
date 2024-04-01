import React from "react"
import "./Header.css"
import Sales from "./Sales"

export default () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
  ]
  return (
    <div className="header">
      <div>
        <h1 style={{ textAlign: `center` }}>Promoções do dia</h1>
        <Sales items={items} />
      </div>
    </div>
  )
}
