'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('home');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
    setIsDropdownOpen(false); // Close dropdown when a nav item is clicked
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://www.rcsinfo.in/img/logo.png" className="h-8" alt="RCS Info Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RCS Info</span>
        </Link>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isDropdownOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isDropdownOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" onClick={() => handleNavItemClick('home')} className={`block py-2 px-3 text-gray rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent ${activeNavItem === 'home' ? 'bg-blue-700' : ''}`}>Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => handleNavItemClick('about')} className={`block py-2 px-3 text-gray rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent ${activeNavItem === 'about' ? 'bg-blue-700' : ''}`}>About Us</Link>
            </li>
            <li>
              <Link href="/internship" onClick={() => handleNavItemClick('internship')} className={`block py-2 px-3 text-gray rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent ${activeNavItem === 'internship' ? 'bg-blue-700' : ''}`}>Internship</Link>
            </li>
            <li>
              <Link href="/portfolio" onClick={() => handleNavItemClick('portfolio')} className={`block py-2 px-3 text-gray rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent ${activeNavItem === 'portfolio' ? 'bg-blue-700' : ''}`}>Portfolio</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => handleNavItemClick('contact')} className={`block py-2 px-3 text-gray rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent ${activeNavItem === 'contact' ? 'bg-blue-700' : ''}`}>Contact</Link>
            </li>
            <li>
              <Link href="/getquote" onClick={() => handleNavItemClick('getquote')} className={`block py-2 px-3 text-gray rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent ${activeNavItem === 'getquote' ? 'bg-blue-700' : ''}`}>Get Quote</Link>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={toggleDropdown} // Toggle dropdown when the button is clicked
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Our Services
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                {/* dropdown nav menu starts */}
                <div id="dropdownNavbar" className={`z-10 absolute left-0 top-full ${isDropdownOpen ? 'block' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link href="static" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Static Website</Link>
                    </li>
                    <li>
                      <Link href="dynamic" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dynamic Website</Link>
                    </li>
                    <li>
                      <Link href="cms" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CMS Website</Link>
                    </li>
                    <li>
                      <Link href="ecom" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">E-Commerce</Link>
                    </li>
                  </ul>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link href="static" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Android Apps</Link>
                    </li>
                    <li>
                      <Link href="dynamic" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">iOS Apps</Link>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <Link href="cms" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Seach Engine Optimization</Link>
                    </li>
                    <li>
                      <Link href="ecom" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Social Media Marketing</Link>
                    </li>
                    <li>
                      <Link href="ecom" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pay Per Click</Link>
                    </li>
                  </ul>

                  <div className="py-1">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Web Hosting</Link>
                  </div>
                  <div className="py-1">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logo Design</Link>
                  </div>
                </div>
                {/* dropdown nav menu */}
              </div>
            </li>
            {/* Add other nav items */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
