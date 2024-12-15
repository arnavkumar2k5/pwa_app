import React from 'react'
import Coin  from "../../assets/coin.png"
const CoinCounter = () => {
  return (
    <div className="absolute top-6 right-4 bg-white flex items-center rounded-full px-4 py-1 gap-2 shadow-md">
    <img src={Coin} alt="Coin" className="w-8 h-8" />
    <span className="text-3xl font-bold">55</span>
  </div>
  )
}

export default CoinCounter
