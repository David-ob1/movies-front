import React from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'

export const Register = () => {
  return (
    <div className="container">
    <div className="form-content">
        <h1 id='title'>Register</h1>

        <form action="">
            <div className="input-group">
                <div className='input-field-2'>
                {/* <FaUser />  */}
                <input type="text" placeholder='Nombre' />
                
                <input type="text" placeholder='apellido' />
                </div>


                <div className='input-field'>
                <FaEnvelope />
                <input type="email" placeholder='Email' />
                </div>

                <div className='input-field'>
                <FaLock />
                <input type="password" placeholder='Contraseña' />
                </div>
                
                <div className='input-field'>
                <FaLock />
                <input type="password" placeholder='Contraseña' />
                </div>

                
            <p>olvidaste tu contraseña? <a href="#">click aqui</a></p>

            </div>

            <div className='btn-field'>
                <button  type='button' className=''>Registro</button>
                <button type='button' className='disable'> Login</button>
            </div>
            
        </form>    

    </div>
</div>
  )
}
