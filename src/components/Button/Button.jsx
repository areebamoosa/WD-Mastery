import React from 'react'

const Button = ({ text, width, height }) => {
  return (
    <>
      <button className={` border px-1 py-1 rounded-md font-medium font blue btn text-xs font
     ${width ? width : "w-auto"} 
     ${height ? height : "h-auto"}`}>{text}</button>
    </>
  )
}

export default Button