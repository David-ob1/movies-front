import React from 'react'
import "./Highlights.css"
import atom from "../../assets/img/images.jfif"
import arcane from "../../assets/img/arcane.jpg"
import { FaEye } from 'react-icons/fa'
export const Highlights = () => {
  return (
    <>
    <div className='highlights-container'>
        <div className='the-best'>
            hola
        </div>


  {/* best News  */}
  <div className='special-container'>
    
    {/* card 1 */}
      <div className='special-card'>
          <img src={atom} alt="" />
        
        <article>
          <h3>Real Steel</h3>
          <ul>
            <li>2011</li>
            <li>cat</li>
            <li>star</li>
          </ul>
          <br />
          <p className='special-desc'>boxeo de robots</p>

          <a href="#" className='custom-btn'> <FaEye /> View</a>

        </article>

      </div>

      {/* card 2 */}

      <div className='special-card'>
          <img src={arcane} alt="" />
        <article>
          <h3>Real Steel</h3>
          <p className='special-desc'>boxeo de robots</p>

          <a href="#" className='custom-btn'> <FaEye /> View</a>

        </article>

      </div>


  </div>

    </div>
    

    </>
  )
}
