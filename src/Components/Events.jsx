import React from 'react'

const Events = () => {
    
    let count = 0;

    function handleClick(){
        count++ //post increament
        console.log("count:", count)
    }






  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Events