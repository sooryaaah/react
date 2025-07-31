import React from 'react'

const Filtering = () => {
    const fruits = ["oranges", "apple", "grapes", "cherry"];
  return (
    <div>
        <ul>
            { fruits.map((item, index) => item.includes("a")? <li key={index}>{item}</li> : null)}
        </ul>
    </div>
  )
}

export default Filtering