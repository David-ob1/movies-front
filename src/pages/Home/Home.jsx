import React from 'react'
import { Highlights } from '../../components/Highlights/Highlights'
import { Login } from '../Login/Login'
import { Card } from '../../components/Card/Card'





import "./Home.css"
import CardContainer from '../../components/CardContainer/CardContainer'

export const Home = () => {
  return (
 

<>
     <main style={{padding:"1.5%"}}>
            <Highlights/>
    <CardContainer/>
    
     </main>
</>   
  )
}
