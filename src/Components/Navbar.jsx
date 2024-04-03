import React from 'react'
import laptop from '../assets/laptop.png'
import '../styles/Navbar.css'


const Navbar = () => {
  return (
    <div className='section'>
      <div className='image'>
        <img src={laptop} ></img>
               
      </div>
      <div className='text'>
      <ul className='nav-list'>
            <span><li id='list-item'>Online Exam Portal</li></span>
            <li className='list-item'>About Us</li>
            <li className='list-item'>Contact Us</li>
        </ul>
      </div>
      <div className='right'>
       <h4>Login</h4>  
          
      </div>
      
    </div>
  )
}

export default Navbar
