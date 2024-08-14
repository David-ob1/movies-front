import React, { useState } from 'react'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import "./login.css"
export const Login = () => {


  return (
   <div className="container">
        <div className="form-content">
            <h1 id='title'>Login</h1>

            <form action="">
                <div className="input-group">
          


                    <div className='input-field'>
                    <FaEnvelope />
                    <input type="email" placeholder='Email' />
                    </div>

                    <div className='input-field'>
                    <FaLock />
                    <input type="password" placeholder='Contraseña' />
                  

                    </div>

<br />
                    
                <p>olvidaste tu contraseña? <a href="#">click aqui</a></p>

                <br />

                </div>

                <div className='btn-field'>
                    <button  type='button' className='disable'>Registro</button>
                    <button type='button' className=''> Login</button>
                </div>
                
            </form>    

        </div>
   </div>


  )
}
