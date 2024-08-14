import React from 'react'
import poster from "../../assets/img/portada.png"
import "./Movie.css"
import { FaStar } from 'react-icons/fa'
import { IoPlayOutline } from 'react-icons/io5'
import { Review } from '../../components/Review/Review'
export const Movie = () => {
  return (
    <div className='main' style={{padding:"2rem 2%"}}>
      <div className='movie-container'>
        <div>
        <img className='poster' src={poster} alt="" />
        {/* <img className='poster' src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/jtEZi4eZxDjxcDIeMbkQ8HmvRs1.jpg" alt="" /> */}

        
        </div>
        <div className='movie-info'>
          <article>
          <h2>Chainsawman</h2>
          <ul>
            <li>Action</li>
            <li>2021</li>
            <li> <FaStar style={{color:"yellow"}} />   8.5</li>

          </ul>

          </article>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates soluta ducimus est, voluptas nulla, maiores, sed perferendis et doloremque voluptatum exercitationem!</p>

          <a href="#" className='custom-btn'> <IoPlayOutline /> View</a>
        </div>



      </div>


        <Review/>

    </div>
  )
}
