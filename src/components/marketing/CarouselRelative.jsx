import React, { useEffect, useState } from 'react';

export default function CarouselRelative({
    classCarousel,  //carousel-height
    images,         // map
}) {
    // Auto Carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

//   Next & Before Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

//   HTML Page
  return (
    <div className={`relative overflow-hidden ${classCarousel}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full text-white p-3"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full text-white p-3"
      >
        &gt;
      </button>
    </div>
  );
}

// const images = [
//     'https://via.placeholder.com/800x400?text=Slide+1',
//     'https://via.placeholder.com/800x400?text=Slide+2',
//     'https://via.placeholder.com/800x400?text=Slide+3',
//   ];
