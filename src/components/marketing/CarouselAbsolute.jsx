import React, { useEffect, useState } from 'react';

export default function CarouselAbsolute({
  classCarousel, // carousel-height
  images, // map
}) {
  // Auto Carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Next & Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // HTML Page
  return (
    <div className={`absolute inset-0 overflow-hidden ${classCarousel}`}>
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
//     'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   ];

// Cara Pakai
// <section className="relative h-screen flex items-center">
//     <CarouselAbsolute
//       classCarousel={'h-full'}
//       images={images}
//     />
//     <main className="relative container mx-auto px-10 py-20 bg-black bg-opacity-50 ">
//       <h1 className="text-5xl my-2 text-center text-white font-bold">Selamat Datang di</h1>
//       <h1 className="text-5xl my-2 text-center text-white font-bold">PT Pangkal Multi Karya</h1>
//     </main>
// </section>
