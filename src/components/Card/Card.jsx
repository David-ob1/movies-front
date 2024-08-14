import React from 'react'

import "./card.css"
import { FaStar } from 'react-icons/fa'
export const Card = ({img}) => {
  return (
    <div className="card">
        <img src={img} alt="" />

        <div className='card-content'>
        <h3>Demon Slayer</h3>
        <p><FaStar style={{color:"yellow"}} /> 10 </p>
        </div>
  </div>
  )
}
