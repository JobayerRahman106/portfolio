import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../section/NavBar'
import Banner from '../section/Banner'
import About from '../section/About'
import Skill from '../section/Skill'

const HomePage = () => {
  return (
    <>
      <NavBar/>
      <Banner/>
      <About/>
      <Skill/>
    </>
  )
}

export default HomePage