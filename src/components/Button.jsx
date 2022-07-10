import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Button = ({icon, width,bgHoverColor, color, bgColor, size, text, borderRadius}) => {

const {setIsClicked, initialState} = useStateContext();

  return (
    <button type='button' 
    onClick={() => setIsClicked(initialState)}
    style={{backgroundColor: bgColor, color, borderRadius}}
    className={`text-${size} p-3 hover:drop-shadow-xl w-${width} hover:bg-${bgHoverColor} `}
    >
     {icon} {text}
    </button>
  )
}

export default Button