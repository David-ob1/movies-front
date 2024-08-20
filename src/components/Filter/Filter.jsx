import React, { useState } from 'react'
import { InputSearch } from '../InputSearch/InputSearch'
import { FaChevronDown, FaSearch } from 'react-icons/fa'

import "./Filter.css"
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { CiFilter } from 'react-icons/ci'
import { MenuCheckbox } from '../MenuCheckbox/MenuCheckbox'
export const Filter = () => {
  const [isMenuVisible, setMenuVisible ] = useState(false)

  const handleInputChange = (e)=>{
      const value = e.target.value.replace(/[-eE]/g, '')
      e.target.value = value;
  }  

const handleCheckbox = () => {
  setMenuVisible(!isMenuVisible);
}


const handleSubmit = (e) =>{
  e.preventDefault()
  const formData = new FormData(e.target);
  console.log({formData})

  const checkboxValues = [];
  const formProps = {};

  formData.forEach((value, key) => {
    if (e.target[key].type === 'checkbox' && e.target[key].checked) {
      checkboxValues.push(value);
    } else if (e.target[key].type !== 'checkbox') {
      formProps[key] = value;
    }
  });

  const data = {
    ...formProps,               
    categories: checkboxValues,   
  };

  console.log(data)

}


  return (
    <div style={{width:"30%",padding:"8px"}}>
      este es el filter
      <form onSubmit={handleSubmit}>
        <div  className="input-field" >
            <FaSearch />
            <input type="text" name='movie' placeholder='Search...' />
        </div>

        <div className="input-field" >
            <MdOutlineAccessTimeFilled />
            <input type="number" placeholder='Year'
            min="0" max="3000" 
            name='year'
            onInput={handleInputChange}
            />
        </div>
     
      {/* <div className='container-menu-check'> */}
       <article className="input-box" onClick={handleCheckbox} >
            <h3>Category </h3>
            <FaChevronDown />
       </article>

    { isMenuVisible &&  <MenuCheckbox  />} 


      {/* </div> */}


            {/* <input type="checkbox" /> */}
<br />
<br />
<br />
<br />



    <button className='custom-btn' 

    style={{fontSize:"21px",padding:"14px 40px"}}> 

      Filter <CiFilter className='filter-svg' /> </button>


    </form> 

    </div>
  )
}
