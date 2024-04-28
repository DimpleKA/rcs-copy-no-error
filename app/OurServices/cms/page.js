import CommonNavig from '@/app/CommonNavig'
import Footer from '@/app/Footer'
import Navbar from '@/app/Navbar'
import React from 'react'

const CMS = () => {
  return (
    <>
    <Navbar/>
    <CommonNavig page="CMS Website"/>


{/* first heading  */}
    <div className='w-full p-5'>
    <h1 className='text-4xl '>CMS Website Development Services</h1>
    </div>
{/* first heading ends */}

{/* 2ndfirst heading  */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 '>From Lead Generation to Online Business Success – CMS Websites Work</h1>
    </div>
{/* 2ndfirst heading ends */}

{/* third two columns side by side */}
<div className='w-full lg:flex p-5 sm:inline '>
    <div className='text-lg lg:w-1/2 p-4 sm:w-full'>
    CMS or content management system is a web application that enables managing your website even without technical expertise. It allows creating content-rich website, streamlining web publishing and its deployment in a trouble-free fashion, and that too by non-technical users. Our CMS website development services allow start-up or small companies to build and maintain functional websites at nominal cost.

However, the initial creation of a CMS website and its customization requires technical proficiency and could only be done by professionals. Website developers at RCS Technology are vastly experienced and professionally qualified to build CMS websites that are robust and comparable to any enterprise level web window.
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
  <img src='https://www.rcsinfo.in/img/cms-website.jpg'/>
</div>
  </div>

  <div className='w-full'>
  <p className='px-10'>

  </p>
</div>
{/* third two column side by side ends */}

{/* fourt one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Work flow</h1>
    <p className='p-5 '>
    CMS websites are open source which is a fundamental prerequisite. Open source platforms are easier to customise and maintain. Our developers use Joomla, WordPress, Magento and Drupal for creating the perfect website as per your requirement.

Joomla -  It is one of the most powerful open source CMS tools. It is popular because of its simple structure and ease of using. In spite of its simplicity, Joomla could be used even for complex web development as required in enterprise applications. This tool is equally popular among non-technical and technical users.

WordPress – The reach of WordPress as a CMS tool is unparalleled. Exceptional templates, easy-to-use features, and vivid instructions make WordPress a favourite tool among developers. This free tool is customizable and readily available over Internet.

Magento – The significance of Magento lies in its capability of creating fully featured e-Commerce websites. Magento offers complete control and adaptability of contents created, and the functionality of a web page. It is extensively featured and owns the flexibility of a truly open source tool. It is a perfect tool for creating store front operations as required in an e-Commerce site.

Drupal – Drupal is another tool at dispense of our CMS web developers. Its modular and robust framework is useful for creating websites based on MySQL.
    </p>
  </div>
{/* fourt one columnd starts */}

{/* fifth one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Approach of the professionals</h1>
    <p className='p-5 '>
    Like our other application development programs, CMS developers adopt a transparent and systematic approach. We consult you at every step of developing a website as your demands are primary. Our solutions are open ended, thereby allowing improvement at every opportunity. For us, it is not only important to be technically thorough but totally aware of market trends and consumer behaviour. Our solutions are market driven and cater to the needs of the users.
    </p>
  </div>
{/* fifth one columnd starts */}

{/* 6 one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Why us</h1>
    <p className='p-5 '>
    We offer e-Commerce website development services that keep you ahead of your competitors. In this era of cut throat competition even a marginal edge could make a significant impact on your business capabilities and market presence.
    </p>

    <ul className='list-disc px-10'>
    <li>We offer customized solutions that are created as per your exact demands of prospect building and business creation.</li>
  <li>Our developers are experts in their respective domains and experienced to offer the most viable solution.</li>
  <li>Our service is not limited to just creating an application but extends to its support and maintenance.</li>
  <li>We offer knowledge on using our applications and offer continuous support so that your business does not falter.</li>
  <li>Websites are upgraded when there is a technological change, so as to ensure uninterrupted service.</li>
</ul>

    <p className='p-5'>
    Contact us for catering to your CMS website creation needs.
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

export default CMS