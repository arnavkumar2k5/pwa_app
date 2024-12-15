import React from 'react'

const SubmitButton = ({ 
  buttonText = "Submit",
  onClick,
  className = "" 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-xs bg-black text-white py-5 text-2xl font-bold rounded-full tracking-wider ${className}`}
    >
      {buttonText}
    </button>
  )
}

export default SubmitButton