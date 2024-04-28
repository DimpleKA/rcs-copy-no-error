import React from 'react';
import { FaMapMarkerAlt,FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CommonNavig from '../CommonNavig';

const Page = () => {
  return (
    <div>
      <Navbar />
      <CommonNavig page="Get A Quote" />

      <div className="flex justify-center items-start flex-col sm:flex-row">
        {/* Left column with the form */}
        <div className="w-full sm:w-2/3 p-8">
          <form className="mb-8">
            <h2 className="text-lg font-bold mb-4">
              Get A Quote By Filling A Form Below
            </h2>

            <div className="mb-4 flex justify-between">
              <div className="flex flex-col w-1/2 sm:w-full px-5">
                <label htmlFor="name" className="mb-2">
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex flex-col w-1/2 sm:w-full px-5">
                <label htmlFor="email" className="mb-2 ">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="mb-4 flex justify-between">
              <div className="flex flex-col w-1/2 sm:w-full px-5">
                <label htmlFor="phone" className="mb-2">
                  Phone:
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex flex-col w-1/2 sm:w-full px-5">
                <label htmlFor="subject" className="mb-2">
                  Subject:
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="mb-4 px-5">
              <label htmlFor="message" className="mb-2">
                Message:
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows="4"
                className="w-full p-2 border rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white px-5 py-2 rounded"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right column with contact information */}
        <div className="w-full sm:w-1/3 p-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Information</h2>

            <div className="mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <div>
                <strong className='mb-1'>Address:</strong> <br/>
                <p>
                  No.26, 2nd Cross, Amba Bhawani Road, Sai Nagar-1 Behind hamson Super Market Vidyaranyapura Bengaluru-560097, Karnataka 560013
                </p>
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <FaPhone className="mr-2" />
              <a href="tel:+919916255206" className="text-blue-500">+91-9916255206</a>, <a href="tel:+918892823521" className="text-blue-500">+91-8892823521</a>
            </div>

            <div className="mb-4 flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="mailto:info@rcsinfo.in" className="text-blue-500">info@rcsinfo.in</a>, <a href="mailto:inforcsblr@gmail.com" className="text-blue-500">inforcsblr@gmail.com</a>
            </div>
          </div>
        </div>
      </div>




    

      <Footer />
    </div>
  );
};

export default Page;
