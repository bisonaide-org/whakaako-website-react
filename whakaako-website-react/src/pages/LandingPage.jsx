import React from 'react'
import WhatWeDo from './WhatWeDo'
import TakeAction from './TakeAction'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from './About'
import Home from './Home'

const LandingPage = () => {
  return (
    <>
     <Navbar/>
     <Home />
     <WhatWeDo />
     <TakeAction />
        <About />
        <Footer /> 
    </>
  )
}

export default LandingPage
