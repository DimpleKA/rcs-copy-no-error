import CommonNavig from '@/app/CommonNavig'
import Footer from '@/app/Footer'
import Image from 'next/image'
import Navbar from '@/app/Navbar'
import React from 'react'

const PPC= () => {
  return (
    <>
    <Navbar/>
    <CommonNavig page="Web Hosting "/>

 


{/* first heading  */}
    <div className='w-full p-5'>
    <h1 className='text-4xl '>Web Hosting </h1>
    </div>
{/* first heading ends */}

{/* 2ndfirst heading  */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 '>Web Hosting solutions</h1>
    </div>
{/* 2ndfirst heading ends */}

{/* third two columns side by side */}
<div className='w-full lg:flex p-5 sm:inline '>
    <div className='text-lg lg:w-1/2 p-4 sm:w-full'>
    RCS Technology providing quality web hosting services since 2013. RCS Technology provides very best affordable powerful web hosting services with world class technology.

We provide Domain Registrations, web Hosting, Database Hosting, Windows Web Hosting & Linux Hosting service in the field of Reseller, Dedicated Server and VPN Server Hosting.

We Have offering world class hosting solution to you in very less profit is that we want that you should start using worlds best solutions for your business and grow your biz with the speed of thought.

May you have different types of business and may the different websites to achieve commercial and non commercial goals. Importance of Webhosting A quality web hosting is backbone of any kind of websites. Hosting works likes engine for every web services and mail service. So before choosing web server for your website need to be very carefully. Points to Consider Before Choosing Web Hosting company.

We are determined to offer our clients the best website hosting experience possible Gaining trust in a company you can count on can only occur through experience. We are so confident in our hosting services and sure that you will be fully satisfied as a customer.
    
</div>
<div className='text-lg lg:w-1/2 p-4 sm:w-full'>
   <Image src='https://kinsta.com/wp-content/uploads/2021/11/what-is-web-hosting-1-1200x675.jpg' alt=''/>
</div>
  </div>

  <div className='w-full'>
  <p className='px-10'>
  RCS Technology providing quality web hosting services since 2013. RCS Technology provides very best affordable powerful web hosting services with world class technology.

We provide Domain Registrations, web Hosting, Database Hosting, Windows Web Hosting & Linux Hosting service in the field of Reseller, Dedicated Server and VPN Server Hosting.

We Have offering world class hosting solution to you in very less profit is that we want that you should start using worlds best solutions for your business and grow your biz with the speed of thought.

May you have different types of business and may the different websites to achieve commercial and non commercial goals. Importance of Webhosting A quality web hosting is backbone of any kind of websites. Hosting works likes engine for every web services and mail service. So before choosing web server for your website need to be very carefully. Points to Consider Before Choosing Web Hosting company.

We are determined to offer our clients the best website hosting experience possible Gaining trust in a company you can count on can only occur through experience. We are so confident in our hosting services and sure that you will be fully satisfied as a customer.
  </p>
</div>
{/* third two column side by side ends */}


{/* the last image */}
<div className='w-full p-10'>
   <Image src='https://www.rcsinfo.in/img/web-hosting.jpg' alt=''/>
</div>
{/* the last image */}





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

export default PPC