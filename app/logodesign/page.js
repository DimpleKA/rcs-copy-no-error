import CommonNavig from '@/app/CommonNavig'
import Footer from '@/app/Footer'
import Image from 'next/image'
import Navbar from '@/app/Navbar'
import React from 'react'

const PPC= () => {
  return (
    <>
    <Navbar/>
    <CommonNavig page="Logo Design "/>

 


{/* first heading  */}
    <div className='w-full p-5'>
    <h1 className='text-4xl '>Logo Design </h1>
    </div>
{/* first heading ends */}

{/* 2ndfirst heading  */}
<div className='w-full p-5'>
    <h1 className='text-3xl font-bold w-1/2 '>Logo Designing</h1>
    </div>
{/* 2ndfirst heading ends */}

{/* third two columns side by side */}
<div className='w-full lg:flex p-5 sm:inline '>
    <div className='text-lg lg:w-1/2 p-4 sm:w-full'>
    Logo is an identity and heart of Graphic Designing, logo designing is the Primo of RCS Technology since 2 years. Basically logos represent companies brands or corporate identities. This is very hard or unprofessional and counterproductive to redesign logos frequently.

We guarantee you total satisfaction and you have absolutely nothing to lose with us. Try out our services or put us to test just now and see why RCS Technology is the number one choice of most businesses in Bangalore India as well the most preferred business logo designer for clients worldwide.

A creative, eye-catching, soothing and a beautiful logo is the most integral part of strategy. It gives the first impression of your company, business or entity. At times this is just the logo that carries forward to your visiting cards or letter heads. Hence it becomes very crucial that you have an impressive creation for your entity to represent you in all pursuit. It not only provides a good reputation of your products or services, but at the same time eventually leads to a high conversion rate optimization of your website to. The making of successful logo design demands a lot of creativity and artistic brilliance. The little structures are nothing but wonderful creations where the heart and the brain come to play.

A meticulously designed Logo helps create the first impression on the viewers mind. It should also have a recall value that would further help a business develop a distinct identity for itself. A logo should reflect the companys features and its professional approach.

When you have been around for as long as we have, you get to learn a lot about what business want, what works and what does not. With this kind of knowledge and experience, our designer team delivers superior quality work with each logo we design.
    
</div>
<div className='text-lg lg:w-1/2 p-4 sm:w-full'>
   <Image src='https://www.rcsinfo.in/img/logo-design.png' alt=''/>
</div>
  </div>

  <div className='w-full'>
  <p className='px-10'>
  Logo creates effective brand recognition and helps in widely spreading your business. It makes people to understand your product or services as soon as they view it. Logo are meant to represent your company and recognition by your consumers. It conveys professional and helps in building trust.
  </p>
</div>
{/* third two column side by side ends */}


{/* the last image */}
{/* <div className='w-full p-10'>
   <Image src='https://www.rcsinfo.in/img/web-hosting.jpg'/>
</div> */}
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