import React from 'react'
import Goodmorning from './Goodmorning'
import Goodevening from './Goodevening'

const Meridien = ({meridien}) => {
  return (
    <div>
        {meridien == "am"? <Goodmorning/> : <Goodevening/>}
    </div>
  )
}

export default Meridien