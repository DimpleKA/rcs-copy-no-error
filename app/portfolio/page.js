import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import CommonNavig from '../CommonNavig'
import Portfolio from '../Portfolio'

const page = () => {
  return (
    <div>
      <Navbar/>
      <CommonNavig page="Portfolio"/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default page