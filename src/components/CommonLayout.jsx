import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from './Container'

const CommonLayout = () => {
  return (
    <>
        <Container>
            <Outlet/>
        </Container>
    </>
  )
}

export default CommonLayout