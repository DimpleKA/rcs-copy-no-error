import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import CommonNavig from '../CommonNavig'
import AboutContent from './AboutContent'

const page = () => {
  return (
    <div>
      <Navbar/>
      <CommonNavig page="About"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default page