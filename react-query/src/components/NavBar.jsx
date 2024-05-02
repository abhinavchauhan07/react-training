import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav' style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',backgroundColor:'grey'}}>
        <Link to='home'>Home</Link>
        <Link to='/superhero'>superhero</Link>
        <Link to='rqSuperHero'>Rq super Hero</Link>
    </div>
  )
}

export default NavBar
