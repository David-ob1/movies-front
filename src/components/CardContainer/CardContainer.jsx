import React from 'react'
import { Card } from '../Card/Card'

import kimetsu from "../../assets/img/kimetsu.png"
import raiden from "../../assets/img/raiden.jpg"
import edgerunners from "../../assets/img/edgerunners.jpg"
import cobra from "../../assets/img/cobra.jfif"

const CardContainer = () => {
  return (
    
    <div className="card-container">
    <Card img={raiden }/>
    <Card img={kimetsu}/>
    <Card img={cobra}/>
    <Card img={edgerunners}/>
    
  </div>
  )
}

export default CardContainer