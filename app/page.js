import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Homee from "./Homee";
import WebDevelopmentSection from "./WebDevelopmentSection";
import WhyChooseUs from "./WhyChooseUs";
import Gallery from "./Gallery";

export default function Home() {
  return (
   <>
   <Navbar/>
    <Homee/>
    <div className="max-w-screen-xl mx-auto bg-gray-100 p-8">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full md:w-4/5 p-4">
          <div className="bg-gray-300 p-6">
            <p className="text-lg font-semibold">Helping Entrepreneurs and Small Businesses to Grow Digitally and Financially</p>
          </div>
        </div>
        <div className="w-full md:w-1/5 p-4">
          <div className="bg-red-500 p-6 text-center">
            <button className="bg-white text-red-500 font-semibold py-2 px-4 rounded-full">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
    <WebDevelopmentSection/>
    <WhyChooseUs/>
    <div className="flex justify-center">
      <div className="text-3xl p-5 underline decoration-wavy">What <span className="text-red-500">People Saying</span> About Us</div>
    </div>


    <Gallery/>
   <Footer/>
   </>
  );
}
