import React from 'react';
import Image from 'next/image';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CommonNavig from '../CommonNavig';
import CarouselComponent from './CarouselComponent';

const Page = () => {
  return (
    <div>
      <Navbar />
      <CommonNavig page="Internship" />

      {/* Content and picture row starts */}
      <div className="lg:flex sm:inline p-5">
        <div className="lg:w-1/2 sm:w-full p-4">
          <p className="font-semibold text-3xl text-red-600">Internships for BE/BCA/MCA/M.TECH Students</p>
          <p className="p-5">
            We are a professionally managed company with a good track record of extremely satisfied customers and have successfully established a strong customer base across the globe. RCS Technology was founded in 2015 by a team of IT Experts. It has been functioning with a rare supremacy and exceptional commitment in IT fields. We intend to be the leader of Website Design, Web Development, Customized Software Development, SEO, Web Hosting, Domain Registration, Mobile app development and Bulk SMS. RCS TECHNOLOGY, where your ideas shape into reality, we are one of the best emerging IT service company providing the broad range of services and solutions in Website design, development, logo & branding, UI Design, PHP Development, WordPress Development, SEO & Digital Marketing. Our digital Marketing is focused on the latest and the most effective strategies and systems that are put our clients Website in the top rankings of various search engine results. Our Online Marketing strategies use innovative and tested methods that engage people and bring them to your Webpage.
          </p>
        </div>
        <div className="lg:w-1/2 sm:w-full p-4">
           <Image src="https://www.rcsinfo.in/img/intern1.jpg" alt="Internship" />
        </div>
      </div>
      {/* Content and picture row ends */}

      {/* Content and picture row starts */}
      <div className="lg:flex sm:inline p-5">
        <div className="lg:w-1/2 sm:w-full p-4">
          <p className="font-semibold text-3xl text-red-600">Qualification for Internship in Software</p>
          <ul className="p-5">
            <li>Creative and innovative</li>
            <li>Leadership qualities and flexibility to adapt to new situations</li>
            <li>Excellent communication, interpersonal, and team-building skills</li>
            <li>Pursuing a degree in Computer Science/IT engineering, or related field</li>
            <li>Quick learners with a proven record of ramping up on new concepts and technologies</li>
          </ul>
        </div>
        <div className="lg:w-1/2 sm:w-full p-4">
          <p className="font-semibold text-3xl text-red-600">Importance of Internship</p>
          <p className="p-5">
            A lot of undergraduate Computer Science students often shy away from internship opportunities. Whether the reason is that its too stressful to handle both school and an internship or they already have a job in an unrelated field, employers want experienced talent and they dont want excuses. RCS Technology assists students to reach an all-new level of success by getting them trained on software development.
          </p>
        </div>
      </div>
      {/* Content and picture row ends */}


        {/* Content and picture row starts */}
        <div className="lg:flex sm:inline p-5">
        <div className="lg:w-full sm:w-full p-4">
          <p className="font-semibold text-3xl text-red-600">Internship help you develope practical experience.</p>
         <p className='p-5'>
         As a Computer Science major who has been interning at different companies for roughly two years, We were surprised at how unrelated some of my course work was to the actual Software Development process. Theory and academia is definitely important. Alas, all practical applications of software stem from some form of academic research. However, We have learned that school alone does not prepare you when its time to land your first job. The concepts you learn in school serve as a strong backbone for other topics such as Front-end, Back-end, and Mobile development which you must develop outside of Academic studies. Employers love Computer Science degrees, but We would wager that they value Full Stack and VCS experience (Git) just as much. Internships allow you to strengthen those skills so that when you go out to the real world, you can confidently say that you can build that new web application your prospective employer needs..
         </p>
         <div className='w-full flex justify-center'>
         <button className="bg-red-500 text-white py-3 px-6 rounded-lg">Apply now to groom your career</button>
        </div>
        </div>
      </div>
      {/* Content and picture row ends */}

  {/* 3 sectores starts */}
  <div className='w-full lg:flex sm:inline px-10  '>
    <div className='lg:w-1/3 sm:w-full p-4'>
        <div className='text-2xl text-red-600 font-bold pb-5'>Domanin Expertise</div>
        <div className=''>
          <ul className='list-disc'>
            <li>HTML, DHTML, PHP, MYSQL</li>
            <li>C#, ASP.NET, VB.NET</li>
            <li>PYTHON, JAVA, ANDROID</li>
            <li>WORDPRESS</li>
            <li>Search Engine Optimization</li>
          </ul>
        </div>
    </div>
    <div className='lg:w-1/3 sm:w-full p-4'>
        <div className='text-2xl text-red-600 font-bold pb-5'>Sector Expertise</div>
        <div className=''>
          <ul className='list-disc'>
            <li>HTML, DHTML, PHP, MYSQL</li>
            <li>C#, ASP.NET, VB.NET</li>
            <li>PYTHON, JAVA, ANDROID</li>
            <li>WORDPRESS</li>
            <li>Search Engine Optimization</li>
          </ul>
        </div>
    </div>
    <div className='lg:w-1/3 sm:w-full p-4'>
        <div className='text-2xl text-red-600 font-bold pb-5'>Internship Available</div>
        <div className=''>
          <ul className='list-disc'>
            <li>HTML, DHTML, PHP, MYSQL</li>
            <li>C#, ASP.NET, VB.NET</li>
            <li>PYTHON, JAVA, ANDROID</li>
            <li>WORDPRESS</li>
            <li>Search Engine Optimization</li>
          </ul>
        </div>
    </div>
  </div>

  {/* 3 sectores ends */}

  {/* caraursel starts */}
  <CarouselComponent/>

  {/* carausel ends */}

      <Footer />
    </div>
  );
}

export default Page;
