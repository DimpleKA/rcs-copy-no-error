import React from 'react'
import styles from './CSS/WhyChoose.module.css'

const WhyChooseUs = () => {
  return (
    
    <div className={`flex flex-col md:flex-row ${styles['WhyChoose-us']}`}>
        <div className="container mx-auto px-4 py-8">
      <div className="md:w-1/2 md:pr-8">
        <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
        <p className="text-lg text-white mb-4">Are you looking for a website designing company in Bangalore? Then hire us, one of the best website designing companies.</p>
        <p className="text-white mb-4">Top reasons to hire us:</p>
        <ul className="list-disc pl-6 mb-4 text-white">
          <li>Expertise to work on static and dynamic websites</li>
          <li>Subject matter experts to deal with web designing of ecommerce/responsive/CMS based websites</li>
          <li>Capability to work on varied web themes, templates, and developmental platforms</li>
          <li>Well-planned work process</li>
          <li>Customized to meet clients’ requirements</li>
          <li>Project completion done in the fastest turnaround time</li>
          <li>Cost-effective pricing</li>
        </ul>
        <p className="text-white mb-4">We ensure to give you 100% guaranteed results with our designing services.</p>
        <button className="bg-green-500 text-white px-6 py-3 rounded">Learn more</button>
      </div>
    </div>
  </div>
  
  
  
  )
}

export default WhyChooseUs