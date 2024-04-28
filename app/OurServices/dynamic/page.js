import CommonNavig from '@/app/CommonNavig'
import Footer from '@/app/Footer'
import Image from 'next/image'
import Navbar from '@/app/Navbar'
import React from 'react'

const DynamicWeb = () => {
  return (
    <>
    <Navbar/>
    <CommonNavig page="Dynamic Website"/>


{/* first heading  */}
    <div className='w-full p-5'>
    <h1 className='text-4xl '>Dynamic Website Development Services</h1>
    </div>
{/* first heading ends */}

{/* 2ndfirst heading  */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 '>From Lead Generation to Online Business Success – Dynamic Websites Work</h1>
    </div>
{/* 2ndfirst heading ends */}

{/* third two columns side by side */}
<div className='w-full lg:flex p-5 sm:inline '>
    <div className='text-lg lg:w-1/2 p-4 sm:w-full'>
    Lead generation plays a key role in success of online businesses. It can effectively come from dynamic websites with unique set of landing pages (adjusted to the need of each visitor) that can be attributed with useful functional features. In the age of ecommerce business, the target of every business owner is to convert casual lookers to potential buyers –hence securing leads is important. The top features on sites that help in online business leads are:
    <ul className='list-disc px-10'>
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
</ul>
</div>
<div className='text-lg lg:w-1/2 p-4 sm:w-full'>
  <Image src='https://www.rcsinfo.in/img/dynamic-website.png'/>
</div>
  </div>

  <div className='w-full'>
  <p className='px-10'>
  Every company brand is keen to float the best website to bolster online presence and reputation and create a communicative, interactive interface or platform for its loyal clientele as well the prospective ones. New pages can be easily added, and graphic images can be uploaded in quick time. Hence, in recent times the demand of dynamic web development services has spurred.

The web pages, written in server-side scripting languages (PHP, ASP, ASP.Net,  JSP, Perl, ColdFusion) are generated in real-time since it is dependent on the user identity (hence ideal for customer targeting). The code on such page gets parsed on the web server and results in an HTML page which is then sent forth to the browser’s window. The server end languages deploy CGI (Common Gateway Interface) to create the web pages.
  </p>
</div>
{/* third two column side by side ends */}

{/* fourt one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>The Way We Work</h1>
    <p className='p-5 '>
    RCS Technology is among professional web designing and development service providers. You can get in touch with us – we have the contact details on our site. Our web consultants are always at your service to discuss the project requirements. Once, we get services order from your end we revert with price quotes, assuredly the most competitive pricing option you can ever think of.
    </p>
  </div>
{/* fourt one columnd starts */}

{/* fifth one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Planning before Project Execution</h1>
    <p className='p-5 '>
    Every step of the project is done in the most professionally planned manner. We have a client-first approach and we consider you to be an integral part of the team. So, we first ensure that we get the matter right and discuss every detail about the nature of your online business and what kind of immersive, engaging experience you are expecting to give visitor flocking to your dynamic site.
    </p>
  </div>
{/* fifth one columnd starts */}

{/* 6 one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Reasons to Hire Us for Dynamic Web Design and Development</h1>
    <p className='p-5 '>
   
    </p>

    <ul className='list-disc px-10'>
    <li>We help to create visually attractive, functional, updatable/upgradable by end users, navigable (an important aspect for ecommerce and shopping portals), and easy-to-manage dynamic websites.</li>
  <li>In short, we can help create high on user experience dynamic websites.</li>
  <li>Our team has versatile, talented designers & developers capable of handling intricate coding and programming of dynamic web development services.</li>
  <li>We can customize project requirements as per your needs.</li>
  <li>Working in strict time schedule to ensure project delivery at the right time.</li>
  <li>Hiring us is a cost-effective solution for you.</li>
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

export default DynamicWeb