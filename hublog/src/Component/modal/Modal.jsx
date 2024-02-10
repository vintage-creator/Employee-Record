import React from 'react'
import "./modal.css"
export const Modal=({children})=>{
  return (
    <div className='container'>
{children}
    </div>
  )
}

export default Modal