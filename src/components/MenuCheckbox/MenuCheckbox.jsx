import React, { useState } from 'react'
import "./MenuCheckbox.css"
export const MenuCheckbox = () => {
  // const [showCheck, setShowCheck] = useState("")

  return (
      <ul className='list-items' >


        <li className='item'>
          <input type="checkbox"  name='kyo' value="kyo kusanagi" id="cat" />
          <label htmlFor="cat"><p>kyo kusanagi</p></label>
        </li>

        <li className='item'>
          <input type="checkbox" name='Dragon' value="Dragon Ball" id="cat" />
          <label><p>Dragon Ball</p></label>
        </li>


        <li className='item'>
          <input type="checkbox" value="naruto" name="naruto" id="cat" />
          <label ><p>naruto</p></label>
        </li>


      </ul>

  )
}
