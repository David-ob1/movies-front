import React, { useState } from 'react'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import "./login.css"
import { sendDto } from '../../utils/axios'
export const Login = () => {
    
    const loginUrl = "http://localhost:3001/login"

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target);
        console.log({formData})
      
        const formProps = Object.fromEntries(formData )
        console.log( {formProps} )

       const post = sendDto(formProps,loginUrl)
       console.log(post)
    }

  return (
   <div className="container">
        <div className="form-content">
            <h1 id='title'>Login</h1>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
          


                    <div className='input-field'>
                    <FaEnvelope />
                    <input type="email" name="email" placeholder='Email' />
                    </div>

                    <div className='input-field'>
                    <FaLock />
                    <input type="password"  name="password" placeholder='Contraseña' />
                  

                    </div>

<br />
                    
                <p>olvidaste tu contraseña? <a href="#">click aqui</a></p>

                <br />

                </div>

                <div className='btn-field'>
                    <button  type='button' className='disable'>Registro</button>
                    <button type='submit' className=''> Login</button>
                </div>
                
            </form>    

        </div>
   </div>


  )
}
