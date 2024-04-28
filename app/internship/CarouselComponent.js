'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons from FontAwesome

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://www.rcsinfo.in/img/pic/1.jpg',
    'https://www.rcsinfo.in/img/pic/2.jpg',
    'https://www.rcsinfo.in/img/pic/3.jpg',
    'https://www.rcsinfo.in/img/pic/4.jpg',
    'https://www.rcsinfo.in/img/pic/5.jpg',
    'https://www.rcsinfo.in/img/pic/6.jpg'
  ];

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative p-10">
      <Image
        className="w-full max-h-96 object-cover rounded-lg"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button onClick={prevSlide}><FaArrowLeft /></button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button onClick={nextSlide}><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Gallery;
