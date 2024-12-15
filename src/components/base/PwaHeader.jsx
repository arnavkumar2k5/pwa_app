import React from 'react'
import Trophy from "../../assets/trophy2.png"

const PwaHeader = () => {
  return (
    <div className='flex items-center mx-6 pt-12   '>
      <h1 className='text-5xl font-black font-sans text-black/80 z-10'>PWA</h1>
      <img 
        src={Trophy} 
        alt="trophy" 
        className='h-12 -ml-1 rotate-[15deg]' 
      />
    </div>
  )
}

export default PwaHeader