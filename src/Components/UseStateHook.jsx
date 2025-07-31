import React from 'react'
import { useState } from 'react';
const UseStateHook = () => {

    const [count, setCount] = useState(0);

    const handleButton = () => {
        setCount(count+1);
    }




  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleButton}>CLick me</button>
    </div>
  )
}

export default UseStateHook