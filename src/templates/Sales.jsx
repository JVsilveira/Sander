import React, { useState } from "react"
import "./Sales.css"

const Sales = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % items.length)
  }

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length)
  }

  return (
    <div className="menu">
      <div
        className="items"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="item">
            {item}
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={handlePrev}>
        Anterior
      </button>
      <button className="next-btn" onClick={handleNext}>
        Próximo
      </button>
    </div>
  )
}

export default Sales
