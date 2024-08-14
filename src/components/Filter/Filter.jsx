import React from 'react'
import { InputSearch } from '../InputSearch/InputSearch'
import { FaChevronDown, FaSearch } from 'react-icons/fa'

import "./Filter.css"
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { CiFilter } from 'react-icons/ci'
import { MenuCheckbox } from '../MenuCheckbox/MenuCheckbox'
export const Filter = () => {

  const handleInputChange = (e)=>{
      const value = e.target.value.replace(/[-eE]/g, '')
      e.target.value = value;
  }  


  return (
    <div style={{width:"30%",padding:"8px"}}>
      este es el filter
      <form >
        <div  className="input-field" >
            <FaSearch />
            <input type="text" placeholder='Search...' />
        </div>

        <div  className="input-field" >
            <MdOutlineAccessTimeFilled />
            <input type="number" placeholder='Year'
            min="0" max="3000" 
            onInput={handleInputChange}
            />
        </div>
     
      {/* <div className='container-menu-check'> */}
       <article className="input-box" >
            <h3>Category </h3>
            <FaChevronDown />
       </article>
      <MenuCheckbox/>

      {/* </div> */}


            {/* <input type="checkbox" /> */}
<br />
<br />
<br />
<br />



    <button type="button" className='custom-btn' style={{fontSize:"21px",padding:"14px 40px"}}> Filter<CiFilter className='filter-svg' /> </button>


    </form> 

    </div>
  )
}
