import React from 'react'
import videobg from '../videos/videobg.mp4';
import {NavLink} from 'react-router-dom';
const Landing = () => {
  return (
    <div className='landingmain' >
        <div className="landingoverlay"></div>
      <video className='landingvid' src={videobg} autoPlay loop muted></video>
      <div className="landingcontent">
        <h1> <strong> Creating a Digital Universe </strong></h1>
        <h3>DigiVerse</h3> 
        <p>Digital Marketing ,SEO, Content / Social Media Marketing</p> <br />
        <NavLink className='btn btn-outline-primary' to='/'>Explore Now ➤</NavLink>
      </div>
    </div>
  )
}

export default Landing
