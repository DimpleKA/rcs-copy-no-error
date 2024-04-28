import CommonNavig from '@/app/CommonNavig'
import Footer from '@/app/Footer'
import Navbar from '@/app/Navbar'
import React from 'react'

const IOS= () => {
  return (
    <>
    <Navbar/>
    <CommonNavig page="IOS App Development"/>


{/* first heading  */}
    <div className='w-full p-5'>
    <h1 className='text-4xl '>IOS App Development</h1>
    </div>
{/* first heading ends */}

{/* 2ndfirst heading  */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 '>IOS Apps</h1>
    </div>
{/* 2ndfirst heading ends */}

{/* third two columns side by side */}
<div className='w-full lg:flex p-5 sm:inline '>
    <div className='text-lg lg:w-1/2 p-4 sm:w-full'>
    If there is one mobile platform that is looked upon with awe, that is iOS. The possibilities of development are immense and the methodologies are simple. We at RCS Technology offer innovative iOS application development services that grow with your needs. These apps cover an extensive range including utilities, e-commerce, social networking, education, health, video and file sharing, entertainment and games. Our aim is to provide iOS applications with maximum productivity at minimum cost.

Our team of developers take iOS app development to an enhanced level. We adopt a step by step process to make our deliverables error free and universally compatible across different mobile formats.
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
  <img src='https://www.rcsinfo.in/img/ios-app.jpg'/>
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
    We follow a definite work flow method while completing and executing a project. The entire task though divided into segments has continuity.

Wireframing and Prototyping - Once a project is received several wireframes are drawn. These are then presented to you are reference and comments, based on which prototypes are created. Your approved prototypes are worked upon to create an iOS application.   

Developing The Application – Development of an application comprises coding, interfacing, and debugging. Coding in itself is a time consuming process which might even take over a hundred hours. In case the code is not self-sufficient then a third party interfacing becomes mandatory.  Debugging becomes essential for defective programs.

Deployment – After developing an application it is necessary to carry out certain tests to check its efficacy. Our developers conduct these tests against several quality parameters and using multiple methods. After successful completion of testing, we deploy these iOS applications for regular use. Our responsibility extends to maintenance and support of these apps. Regular updating is carried out as and when required.
    </p>
   
  </div>
{/* fourt one columnd starts */}

{/* fifth one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Approach of our professionals</h1>
    <p className='p-5 '>
    Our application developers are professionally trained and are experts in their respective domains. A systematic method is adopted for developing any iOS application. We follow a transparent system of working where you are consulted at every step of developing a program. With demand of users continually rising, we offer open-ended solutions, thereby allowing the apps to be upgraded at any point. Apps developed by us being flexible by nature increases the capabilities of their usage.

Our team of developers are not only technically thorough, but are also totally aware of the behavioural patterns of users. For creating iOS apps that are truly effective it is important to understand current market behaviour and the fluctuations in consumer behaviour.   </p>
   
  </div>
{/* fifth one columnd starts */}

{/* 6 one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Why us</h1>
    <p className='p-5 '>
    We believe in offering solutions that are market driven. As a mobile application development company we take immense care in creating applications as they form the connecting link between buyers and sellers. Other reasons for selecting us in developing mobile apps:
    </p>

    <ul className='list-disc px-10'>

    <li>We use the latest technologies and current-generation equipment for iOS application development services.</li>
  <li>Experienced professionals with thorough knowledge of iOS are engaged in developing and implementing iOS apps.</li>
  <li>We ensure the least turnaround time for implementing any project.</li>
  <li>We always adopt a flexible approach allowing for last-minute modifications.</li>
  <li>Users are trained, and support is provided immediately when demanded.</li>
  <li>We offer continuous support for uninterrupted operation.</li>
  <li>Our services are competitively priced, thereby controlling costs.</li>


</ul>

    <p className='p-5'>
    Trust us to create the latest and fully functional iOS applications for your Apple smartphones, and tablets.  
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

export default IOS