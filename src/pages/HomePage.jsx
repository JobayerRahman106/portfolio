import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../section/NavBar'
import Banner from '../section/Banner'
import About from '../section/About'
import Skill from '../section/Skill'
import Qualification from '../section/Qualification'

const HomePage = () => {
  return (
    <>
      <NavBar/>
      <Banner/>
      <About/>
      <Skill/>
      <Qualification/>
    </>
  )
}

export default HomePage