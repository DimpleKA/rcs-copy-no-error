'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3; // Total number of pages in the carousel
  const colors = ['#ffcccc', '#ccffcc', '#ccccff']; // Array of background colors for pages

  const goToNextPage = () => {
    setCurrentPage(currentPage === totalPages - 1 ? 0 : currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage === 0 ? totalPages - 1 : currentPage - 1);
  };

  useEffect(() => {
    const interval = setInterval(goToNextPage, 3000); // Change page every 3 seconds
    return () => clearInterval(interval);
  }, [currentPage]);

  return (
    <div style={{ background: colors[currentPage], height: '80vh' }}>
      <div>
        {currentPage === 0 && (
          <div>
            <h3 className='text-center text-2xl p-5 text-blue-900'>
            I just wanted to thank you for the excellent job you have done on our website. The service was incredible and responsive. We were treated as the valued customer, affordable price compared to the others website company. Cheers!!
            </h3>

            <p className='text-center text-lg py-2'>Global Interiors India</p>
            <p className='text-center text-lg py-2'>Shiva Kumar</p>
            <p className='text-center text-lg py-2'>www.globalinteriorsindia.com</p>

          </div>
        )}
        {currentPage === 1 && (
          <div>
          <h3 className='text-center text-2xl p-5 text-blue-900'>
          I just wanted to thank you for the excellent job you have done on our website. The service was incredible and responsive. We were treated as the valued customer, affordable price compared to the others website company. Cheers!!
          </h3>

          <p className='text-center text-lg py-2'>
            
          </p>
          <p className='text-center text-lg py-2'>Shiva Kumar</p>
          <p className='text-center text-lg py-2'>www.globalinteriorsindia.com</p>

        </div>
        )}
        {currentPage === 2 && (
          <div>
          <h3 className='text-center text-2xl p-5 text-blue-900'>
          I just wanted to thank you for the excellent job you have done on our website. The service was incredible and responsive. We were treated as the valued customer, affordable price compared to the others website company. Cheers!!
          </h3>

          <p className='text-center text-lg py-2'>Global Interiors India</p>
          <p className='text-center text-lg py-2'>Shiva Kumar</p>
          <p className='text-center text-lg py-2'>www.globalinteriorsindia.com</p>

        </div>
        )}
        {/* Add more pages as needed */}
      </div>
    </div>
  );
};

export default Gallery;
