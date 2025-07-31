import React from 'react'
import { useState } from 'react'

const OnSubmitEvent = () => {

    const [name, setName] = useState("John");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name:name//name(key or property): name(value)
        }
        console.log("data: ",data);
        console.log(data.name)
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Enter your name</label>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <button type="submit">SUBMIT</button>
        </form>
        </div>
  )
}

export default OnSubmitEvent