import React from 'react'
import { useState } from 'react'
const UpdateName = () => {

    const[name, setName] = useState("Johny");



  return (
    <div>

        <h1>{name}</h1>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
    </div>
  )
}

export default UpdateName