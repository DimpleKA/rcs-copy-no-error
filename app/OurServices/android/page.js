import CommonNavig from '@/app/CommonNavig'
import Footer from '@/app/Footer'
import Image from 'next/image'
import Navbar from '@/app/Navbar'
import React from 'react'

const Android = () => {
  return (
    <>
    <Navbar/>
    <CommonNavig page="Android App Developemnet"/>


{/* first heading  */}
    <div className='w-full p-5'>
    <h1 className='text-4xl '>Android & Mobile Apps Development Company</h1>
    </div>
{/* first heading ends */}

{/* 2ndfirst heading  */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 '>Android Apps</h1>
    </div>
{/* 2ndfirst heading ends */}

{/* third two columns side by side */}
<div className='w-full lg:flex p-5 sm:inline '>
    <div className='text-lg lg:w-1/2 p-4 sm:w-full'>
    Mobile App Development are means of establishing one-to-one contact. Business houses in an effort to establish an intimate relationship with customers through these applications. These internet enabled gateways are designed specifically keeping mobile phone users in mind. The primary purpose is to offer users the exact product or service they desire. Our speciality lies in creating mobile applications that are easy to download and simple to operate.

The challenge of creating mobile apps is that they should be functional across different operating platforms like Android, iOS, or Windows. Our team of experts, deliver creatively designed and strategically functional apps operable across platforms and formats.
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
  <Image src='https://www.rcsinfo.in/img/android-app.png'/>
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
    We being a leading mobile application development company need to be thoroughly conversant of our clients’ needs and create apps accordingly. While creating mobile applications, the fundamental concern is creating a cross platform deliverable. Usually, our mobile apps are open-ended and cross platform, thus allowing them to be used on Android, iOS and Window based devices.
    </p>
    <ul className='list-disc px-10'>

  <li>
    <strong>Android:</strong> We create Android apps that are feature-rich and help you execute a variety of marketing and commercial functions. Our customers are assured of original development solutions which could be customized. We ensure the creation of unprecedented business revenue, thereby protecting your investment.
  </li>
  <li>
    <strong>iOS:</strong> iOS mobile applications developed by us are also feature-rich. All creations are based on the latest iOS software development kit to give a competitive edge. These apps are engaging and performance-driven. They are user-friendly and offer handsome ROI (return on investment).
  </li>
  <li>
    <strong>Windows:</strong> Windows-based applications are extremely user-friendly. With a significant percentage of Windows-based mobile phone users in India, which in absolute numbers is quite large, buyers used to operating desktops or laptops would find Windows-based mobile apps easy to operate.
  </li>


</ul>
  </div>
{/* fourt one columnd starts */}

{/* fifth one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Approach of our professionals</h1>
    <p className='p-5 '>
    We Navigate Us you to help create a successful online business. It is our endeavour to provide end to end e-Commerce website development services through a combination of skilled web designing, effective SEO techniques, and an unmatched support.We always take a transparent approach to our mobile app development projectsF. As mobile apps are universally usable across multiple operating platforms a continuous feedback is taken from you. These feedbacks are essential in creating an application as per customers’ needs.

We at Shreya Web Solutions are careful about offering applications that are flexible in their format, and upgradable by nature. Flexible in the sense, that these applications are compatible to multiple devices. And upgradable in the sense, that the applications might get adapted as and when needed.    </p>
   
  </div>
{/* fifth one columnd starts */}

{/* 6 one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Why Choose us</h1>
    <p className='p-5 '>
    We believe in offering solutions that are market driven. As a mobile application development company we take immense care in creating applications as they form the connecting link between buyers and sellers. Other reasons for selecting us in developing mobile apps:
    </p>

    <ul className='list-disc px-10'>

  <li>We rely on high-quality development platforms.</li>
  <li>We engage experienced personnel with extensive knowledge of mobile technologies and frameworks.</li>
  <li>Mobile apps created by us are robust and cost-effective.</li>
  <li>Deliveries are prompt.</li>
  <li>We provide dynamic after-sales support for different platforms.</li>


</ul>

    <p className='p-5'>
    We develop mobile applications that enhance your marketing capabilities and offer you the flexibility and freedom to create an identity for yourself. 
    </p>
  </div>
{/* 6 one columnd starts */}

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

export default Android