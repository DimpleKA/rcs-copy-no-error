import CommonNavig from '@/app/CommonNavig'
import Image from 'next/image'
import Footer from '@/app/Footer'
import Navbar from '@/app/Navbar'
import React from 'react'

const Ecommerce = () => {
  return (
    <>
    <Navbar/>
    <CommonNavig page="E-Commerce Website"/>


{/* first heading  */}
    <div className='w-full p-5'>
    <h1 className='text-4xl '>E-Commerce Website Development Services</h1>
    </div>
{/* first heading ends */}

{/* 2ndfirst heading  */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 '>E-commerce Website Development Services</h1>
    </div>
{/* 2ndfirst heading ends */}

{/* third two columns side by side */}
<div className='w-full lg:flex p-5 sm:inline '>
    <div className='text-lg lg:w-1/2 p-4 sm:w-full'>
    In today’s generation of online marketing and trading it is essential to build a sophisticated platform for streamlining business and expanding customer base. RCS Technology offers e-Commerce website development services that not only offer a platform for widespread publicity, but also an opportunity of increasing sales in multiples.    

Our market leading selling tools, striking templates and enterprise-grade website hosting enables venturing into an area of discrete business advantage. For giving you online marketing advantage we adopt the following work flow techniques.
    {/* <ul className='list-disc px-10'>
  <li>Contact forms for securing leads</li>
  <li>Email Subscription tabs for email marketing</li>
  <li>Remarketing with the site visitor</li>
  <li>Pop up forms</li>
  <li>Account Creation</li>
  <li>Social media buttons</li>
  <li>Collection of cookies</li>
  <li>Adding products to carts in ecommerce sites</li>
  <li>Adding blogs</li>
  <li>Effective for online payment</li>
</ul> */}
</div>
<div className='text-lg lg:w-1/2 p-4 sm:w-full'>
  <Image src='https://miro.medium.com/v2/resize:fit:1400/1*34GfkhLFydPjZWUde1EzRg.jpeg'/>
</div>
  </div>

  <div className='w-full'>
  <p className='px-10'>

  </p>
</div>
{/* third two column side by side ends */}

{/* fourt one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Work Flow </h1>
    <p className='p-5 '>
    Identification of Concern Areas – For appropriate optimization we identify and address your concern areas. One such area could be the speed of accessing and browsing through your website. Studies have revealed that a visitor waits for about 5 seconds for a website to open. For any speed slower than this, your website goes out of bounds for a visitor.

Keyword Research – Before beginning optimization process it is essential to conduct keyword research. Keywords are always the focus area of search engines and form the most important criterion of optimization. SEO Companies often have dedicated personnel for carrying out keyword research. Though websites are meant for a global audience it is desirable to target keywords that have local relevance.

Competitor Research – It is vital to have an idea about your competitors’ activities in any form of business. When we conduct a keyword research we also do a research on the keywords used by your competitors. While doing competitor research we evaluate PA (page authorities) and DA (domain authorities) for your professional adversaries.

Mobile Responsive Websites – With the percentage of internet accessible mobile phones gradually increasing it is justifiable to have your e-Commerce website compatible to mobile devices.

Usability – This is of utmost relevance for your e-Commerce website. It is important to make your online buyers happy while using your website if your website is usable you are assured of repeated visits of online customers.

Social Media Bookmarking - Social media presence of your website is essential for better optimization results. We ensure social media presence of your e-commerce site for better branding and wider traffic generation.

Link Building - Link creation is an indispensable part of optimization process irrespective of the company it represents. We incorporate good quality inbound links to your e-Commerce website.

Blog Submission – The worth of a website increases with submission of blogs. We target the primary keywords through blog contents and not as a part of your company’s web page.
    </p>
  </div>
{/* fourt one columnd starts */}

{/* fifth one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Why Us</h1>
    <p className='p-5 '>
    We Navigate Us you to help create a successful online business. It is our endeavour to provide end to end e-Commerce website development services through a combination of skilled web designing, effective SEO techniques, and an unmatched support.
    </p>
    <ul className='list-disc px-10'>
    <li>Ours is a totally transparent working environment that allows you to review the progress of your task as needed.</li>
  <li>We grow with you. As and when your business expands, we suitably bring about the changes needed in your e-Commerce website.</li>
  <li>Our services extend beyond development and implementation of our programs. We maintain them continually and upgrade them whenever technology demands.</li>
  <li>Our solutions are economically viable and protect your investment for several years.</li>
</ul>
  </div>
{/* fifth one columnd starts */}

<div className='w-full p-10'>
  <Image src='https://www.rcsinfo.in/img/E-commerce.jpg'/>
</div>

{/* The get quote button */}
<div className='w-full p-10 lg:flex sm:inline border-t-2'>
  <div className='lg:w-2/3 p-10'>
    <p className='text-3xl font-bold'>Get Special Price In Limited Period...</p>
  </div>
  <div className='lg:w-1/3 p-10'>
    <button className='bg-red-500 text-white hover:bg-red-600 py-3 px-6 rounded-lg text-xl'>Get a quote</button>
  </div>
</div>
{/* The get quote button */}



    <Footer/>
    </>
  )
}

export default Ecommerce