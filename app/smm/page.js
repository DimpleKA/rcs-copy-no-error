import CommonNavig from '@/app/CommonNavig'
import Image from 'next/image'
import Footer from '@/app/Footer'
import Navbar from '@/app/Navbar'
import React from 'react'

const SMM= () => {
  return (
    <>
    <Navbar/>
    <CommonNavig page="Social Media Marketing"/>


{/* first heading  */}
    <div className='w-full p-5'>
    <h1 className='text-4xl '>Social Media Marketing (SMO)</h1>
    </div>
{/* first heading ends */}

{/* 2ndfirst heading  */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 '>Social media marketing.</h1>
    </div>
{/* 2ndfirst heading ends */}

{/* third two columns side by side */}
<div className='w-full lg:flex p-5 sm:inline '>
    <div className='text-lg lg:w-1/2 p-4 sm:w-full'>
    The significance of social media is indisputable in today’s world of online business and communication. The distinction between social networking sites and any other website is the formers individualistic or informal appeal. Networking sites as a platform enables establishment of a one-to-one communication avenue and that too at a personal level. Producers and sellers of goods and services get an unbiased opinion directly from end-users.

Rcs Web Solution on behalf of our customers carries out social media marketing in a well regulated and purposeful manner.
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
   <Image src='https://hotdogmarketing.net/wp-content/uploads/2021/11/110321-HDM-Social-Media-Marketing-02.png' alt=''/>
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
    The importance of social media marketing cannot be ignored when business and communication has matured to become an online round the clock phenomenon. We for the following reasons advice network marketing for you.
    </p>
    <ul className='list-disc p-10'>
  <li>
    Increased Prospect Base – Using networking sites for publicity has a positive impact on increasing prospect base. An online presence enables a global awareness of your existence thereby improving your scope of business. A wider prospect base gives you a better chance of converting them to actual customers.
  </li>
  <li>
    Target Selection – Using social media for advertisement gives the flexibility to select specific target audience depending on demographic characteristics such as language, age, or gender. Networking sites assist on focusing attention to smaller target groups thereby increasing your hit ratio.
  </li>
  <li>
    Greater Visibility – As your prospect base becomes wider, your visibility increases among interested viewers. They are eager to know about your achievements and innovations which once again are communicated among group members.
  </li>
  <li>
    Creation of Trust – As networking sites increase the interaction between end users and suppliers, a bond of trust is created between online sellers and buyers. As this form of communication is used consistently a mutual trust is created among different members. This aids e-commerce companies to reach out to newer buyers.
  </li>
  <li>
    Customer Involvement – Unlike any other form of publicity, social sites involve customers closely. For business houses it is an opportunity to learn about the exact tastes and preferences of end users, their impressions about a product or service. Customer involvement also is helpful in improving a product or service.
  </li>
</ul>

  </div>
{/* fourt one columnd starts */}

{/* fifth one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Approach of the Professionals</h1>
    <p className='p-5 '>
    Our developers are thorough professionals and are trained to cater to different market segments. Social networking is different from other forms of marketing as its essence is informal. With individual behaviour differing from one person to another, creating a marketing strategy is a challenging task. We are constant contact of our users as we intend to understand their exact demands.  </p>
   
  </div>
{/* fifth one columnd starts */}

{/* 6 one columnd starts */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 p-5 '>Why Us?</h1>
    <p className='p-5 '>

    </p>

    <ul className='list-disc px-10'>
  <li>
    Our developers are adept technically and offer solutions that are up-to-date and refined.
  </li>
  <li>
    Our strength is not only limited to technical proficiency but extends to our understanding of market behaviour. This is a vital aspect in social media marketing.
  </li>
  <li>
    We always maintain a transparent business relationship so as to help in creating a fruitful and everlasting business relationship.
  </li>
  <li>
    We offer value for money solutions, which is essential in protecting your investment.
  </li>
</ul>


    <p className='p-5'>
    We are confident of achieving a substantial prospect base for your commodities through our social network marketing services.
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

export default SMM