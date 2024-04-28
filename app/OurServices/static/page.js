import CommonNavig from '@/app/CommonNavig'
import Footer from '@/app/Footer'
import Navbar from '@/app/Navbar'
import React from 'react'

const StaticWeb = () => {
  return (
    <>
    <Navbar/>
    <CommonNavig page="Static Website"/>


{/* first heading  */}
    <div className='w-full p-5'>
    <h1 className='text-4xl '>Static Website Development Services</h1>
    </div>
{/* first heading ends */}
{/* first heading  */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 '>The Value of Static Website Designing – Simple & SEO Effective</h1>
    </div>
{/* first heading ends */}

{/* third two columns side by side */}
<div className='w-full lg:flex p-5 sm:inline '>
    <div className='text-lg lg:w-1/2 p-4 sm:w-full'>Old is gold – this holds true even for static website development services. In the nascent days, static website written in HTML (Hyper text Markup Language) held monopoly. In fact, every web designer would readily agree to the fact that mastering HTML is the basic step towards designing a career in web designing. 

Static website translates to static web pages which offer/present similar web content to every visitor. Content of the site are embedded in individual web pages written in HTML and are uploaded on the web server. Such pages are easy to code, easy to navigate, easy to load and are independent of user identity and access devices.  

Static websites made with HTML, CSS (Client-side Scripting) and JavaScript seem to be the first love of web designers and search engine optimizers because of the simplicity in creation of such pages.

Even dynamic web pages can be created using HTML coding but with limited functionality. In dynamic website case two-thirds of the site designing rests on HTML coding and rest one-third fetches content from the database.
</div>
<div className='text-lg lg:w-1/2 p-4 sm:w-full'>
  <img src='https://th.bing.com/th/id/OIP.8SjojHKe9YXn_ow30UxX0QHaEH?rs=1&pid=ImgDetMain'/>
</div>
  </div>

{/* third two column side by side ends */}

{/* fourt one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Our Work Procedure</h1>
    <p className='p-5 '>
    When you are in need of designing a static website get in touch with our support staff. Your requirement will be sent across to the team of web designers and project manager. After scrutinizing the project need, our company will send you the cost document. We assure that you will get the best, affordable price quotes from us – definitely the best in the market.
    </p>
  </div>
{/* fourt one columnd starts */}

{/* fifth one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Planned Approach of Our Professionals</h1>
    <p className='p-5 '>
    We believe in utmost professionalism in all our services. Basically, we follow a three-step planned approach. It initiates with planning, followed by project execution and schedule project delivery to all our valuable customers.

At the initiation level round of meetings are carried on with the clients and also with team members who are supposed to take the work further. This is primarily done to assuage what the client exactly wants from our service in web designing. Moreover, the nature of client’s business is thoroughly comprehended at this stage.

The professional team creates a blue print of your site and sends it to the client for initial approval. Consequently web pages are built using HTML, CSS and JavaScript codes.

Throughout the work procedure, reporting is done to keep clients in the loop of the work progress and expected time to finish the designing job.

Before project delivery, test run is done to ensure the site is working in fine health.
    </p>
  </div>
{/* fifth one columnd starts */}

{/* 6 one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Top Reasons to Choose Us</h1>
    <p className='p-5 '>
    We ensure perfection in static website development services with utmost expertise in designing of static websites.  Rcs Web Solution has a talented pool of designers who have detailed know how of static website designing ways and tactics.
Hire us and trust our work capabilities:
    </p>

    <ul className='list-disc px-10'>
  <li>Techies have the expertise to handle site designing of simple to complex sites</li>
  <li>Able to create visually appealing websites</li>
  <li>Able to customize project as per the need of the client</li>
  <li>Follow a planned out work approach</li>
  <li>On-time project execution</li>
  <li>Affordable website design services</li>
</ul>

    <p className='p-5'>
    We leave no stones unturned to give you the best value for your money.
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

export default StaticWeb