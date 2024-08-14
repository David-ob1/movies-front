import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from "../assets/img/peliVerse.png"


export const Navbar = () => {
  return (
    <nav>
        <a href="https://react.dev" target="_blank">
            <img src={logo} className="logo react" style={{height:"40px"}} alt="React logo" />
        </a>

        <ul>
        <li > <Link to="/" style={{color: "#58DDA3"}}>Home</Link></li>
        <li>Best Movies</li>
        <li><Link to="/movies">Movies</Link></li>

        <li>Contanc</li>
        </ul>

    <div className="user-info">
      <FaUserAlt />
      <p>Your Reviews</p>

      
    </div>
  </nav>
  )
}

export default Navbar