import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
       <div className='flex justify-between items-center py-8'>
      <div >
        <ul className='flex gap-4 items-center text-white'>
          <Link to="#"> Home </Link>
          <Link to="#"> Services </Link>
          <Link to="#"> About </Link>
          <Link to="#"> Skill </Link>
          <Link to="#"> Qualifications </Link>
          <Link to="#"> Project </Link>
        </ul>
      </div>
      <div> 
        <button className='border border-solid py-2 px-6 text-white border-teal-700'>Contact Me</button> 
      </div>
    </div>
  )
}

export default NavBar