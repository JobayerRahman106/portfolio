import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
       <div className='flex flex-col lg:flex-row gap-4 justify-between items-center pt-5 lg:py-12 '>
      <div >
        <ul className='flex gap-3 lg:gap-4 items-center text-white font-medium'>
          <Link to="#"> Home </Link>
          <Link to="#"> Services </Link>
          <Link to="#"> About </Link>
          <Link to="#"> Skill </Link>
          <Link to="#"> Qualifications </Link>
          <Link to="#"> Project </Link>
        </ul>
      </div>
      <div> 
        <button className='border-none py-1 px-3 lg:py-2 lg:px-6 lg:text-white bg-none text-transparent lg:bg-linear-to-r from-green-400 to-teal-700 hover:bg-gradient-to-l cursor-pointer'>Contact Me</button>
      </div>
    </div>
  )
}

export default NavBar