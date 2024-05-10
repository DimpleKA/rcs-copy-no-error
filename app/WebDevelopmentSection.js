import React from 'react';
import Image from 'next/image';
const WebDevelopmentSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Web Development</h2>
{/* first row starts */}
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white shadow-md p-6 flex items-center">
             <Image src="https://cdn-icons-png.freepik.com/512/5595/5595272.png" className="w-16 h-16 rounded-full mr-4" alt="Avatar" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">We as a website development company, Our Developers are extremely talented and ready to except any challenge to develop a website. Our website development services includes all type of websites from simple to complex.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white shadow-md p-6 flex items-center">
             <Image src="https://cdn-icons-png.freepik.com/512/5595/5595272.png" className="w-16 h-16 rounded-full mr-4" alt="Avatar" />
            <div>
              <h3 className="text-lg font-semibold mb-2">E-Commerce Development</h3>
              <p className="text-gray-600">E-commerce has quickly advancing as a lifestyle. It has turned out to be one of the channels that empower web based shopping which just takes few clicks, offering extensive variety of items from anyplace and whenever.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white shadow-md p-6 flex items-center">
             <Image src="https://cdn-icons-png.freepik.com/512/5595/5595272.png" className="w-16 h-16 rounded-full mr-4" alt="Avatar" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">Digital Marketing is the technique which we use to promote your website, business or company on Search engine like GOOGLE, YAHOO, and BING etc. The Strategy of SEO for your Website will depend upon your Website.</p>
            </div>
          </div>
        </div>
      </div>
{/* first row ends */}

{/* second row starts */}
<div className="flex flex-wrap">
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white shadow-md p-6 flex items-center">
             <Image src="https://cdn-icons-png.freepik.com/512/5595/5595272.png" className="w-16 h-16 rounded-full mr-4" alt="Avatar" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Mobile/Web Apps</h3>
              <p className="text-gray-600">The mobile apps are dominating a major part of people’s life since apps personalize your business for every individual. Our Mobile app and web app development services can give new directions in your business.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white shadow-md p-6 flex items-center">
             <Image src="https://cdn-icons-png.freepik.com/512/5595/5595272.png" className="w-16 h-16 rounded-full mr-4" alt="Avatar" />
            <div>
              <h3 className="text-lg font-semibold mb-2">PPC Services</h3>
              <p className="text-gray-600">We at RCS, assist your organization grow and make it on the 1st page with the most suited keywords. So join our PPC services today to be on top and we are not limited as PPC, we are willing to deliver our services to the world.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white shadow-md p-6 flex items-center">
             <Image src="https://cdn-icons-png.freepik.com/512/5595/5595272.png" className="w-16 h-16 rounded-full mr-4" alt="Avatar" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Graphic Design</h3>
              <p className="text-gray-600">We create designs form your business that creates identity like never before. We help big, small & medium sized businesses to shine and grow by perfectly conveying the spirit of your brand to achieve exceptional results.</p>
            </div>
          </div>
        </div>
      </div>
{/* second row ends */}
    </div>
  );
};

export default WebDevelopmentSection;
