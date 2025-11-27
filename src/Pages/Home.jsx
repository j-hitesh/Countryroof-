import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Banner from '../Component/Banner'
import Upcoming from '../Component/Upcoming'
// import Banner from '../Component/Banner'

const Home = () => {
  return (
    <div className=''>
          <Banner/>
          <Navbar/>
          <Upcoming/>
    </div>
  )
}

export default Home
