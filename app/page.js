import Head from 'next/head';
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
{/* Head compnent meta tags */}
<Head>
        <meta charSet="utf-8" />
        <title>top Web Designer and digital marketing company in Bangalore </title>
        <meta name="google-site-verification" content="JXZyFQichbif1W0A0tZF1r6NFfbyYJwLsbO17Gl8DkY" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
        <meta name="title" content="website designing and development services, website designing company in vidyaranpura Bangalore india,web designing in peenya" />
        <meta name="description" content="RCS Technology is the best web designing,e-commece,digital marketing and SEO company in Bangalore.We are providing the complete IT services." />
        <meta name="keywords" content="website designing,Hosting,digital marketing,ecommerce, top web design company in Bangalore.web designer near me.web and app development ., web design in yelankha Bangalore,web design in MS palya reactjs development, dynamic website development" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="index.html" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3" />
        <meta name="author" content="Sunil Kumar" />
        <meta property="og:title" content="Web,App & digital Marketing in Bangalore" />
        <meta property="og:site_name" content="RCS Technology" />
        <meta property="og:url" content="https://rcsinfo.in/" />
        <meta property="og:description" content="Leading web Designing and development company in Bangalore & we providing website designing and web development services at a reasonable cost.." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.rcsinfo.in/img/logo.png" />
      </Head>
{/* head componnet meta tags */}

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
