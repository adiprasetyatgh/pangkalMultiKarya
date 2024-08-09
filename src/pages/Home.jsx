import React from 'react';
import CarouselAbsolute from "../components/marketing/CarouselAbsolute";
import ButtonLink from '../components/marketing/ButtonLink';
import CardGrid from '../components/marketing/CardGrid';
import LayoutProjects from '../layouts/LayoutProjects';

const images = [
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export default function Home() {
  return (
    <div>
      {/* Section 1 - */}
      <section className="relative carousel-height flex items-center ">
        <CarouselAbsolute
          classCarousel={'h-full'}
          images={images}
        />
        <main className="relative container mx-auto px-10 py-20 bg-black bg-opacity-60">
          <h1 className="text-5xl text-center text-white font-bold">PT Pangkal Multikarya</h1>
          <svg 
            className="w-20 font-bold text-red-700 mx-auto"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
          <h3 className='text-xl text-center text-white font-semibold'>Authorized Distributor of PT YKK AP Indonesia</h3>
        </main>
      </section>

      {/* Section 2 -  */}
      <section className='py-20 '>
        <main className='container mx-auto px-10 bg-gray-100 py-20 lg:grid grid-cols-2'>
          <img 
          className='aspect-video size-full object-cover'
          src="https://images.unsplash.com/photo-1489465033131-30f7e2025f68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className=' mt-8 lg:mt-0 lg:pb-12 lg:px-12 flex flex-col justify-between '>
            <h1 className='text-4xl text-gray-900 font-bold text-start'> Our Story </h1>
            <div className="w-20 border-t-4 border-red-700 my-4"></div> 
            <p className='text-md text-gray-700 text-justify mb-8'>PT Pangkal Multikarya as one of the largest authorized distributors of YKK AP already has 33 years of experience in the field of aluminium installation. We have handled more than hundreds of projects ranging from unit houses, residences, banks, hotel, office building, showrooms, and shop houses to high-rise buildings.
            <br /> <br />  
            Our services include installing window walls, curtain walls, frameless glass, suspended glass, ACP, and bending glass.</p>
            <ButtonLink
              buttonHref={'about'}
              buttonDesc={'Read More'}
              classButton={'flex px-5 py-2 w-40 justify-center bg-white text-black text-lg font-semibold rounded-md border-2 border-black'} 
            />
          </div>
        </main>
      </section>

      {/* Section 3 */}
      <section className='bg-gray-100 py-20'>
        <main className='container mx-auto px-10 lg:px-40'>
          <div className='flex justify-center items-center pb-12'>
            <div className="w-20 border-t-4 border-red-700 my-6 "></div> 
            <h1 className='text-4xl text-black text-center font-bold mx-4'>Core Values</h1>
            <div className="w-20 border-t-4 border-red-700 my-6"></div> 
          </div>
          
          <CardGrid
          cards={cards}
          classGrid={'grid-cols-2 xl:grid-cols-4 gap-8'} // 
          classLi={'p-8 group text-center bg-white'}
          classImg={'size-20 mx-auto aspect-square object-contain '}
          classLine={'w-32 border-t-2 border-gray-200 group-hover:border-red-700 mt-2 mb-4 mx-auto'}
          />
        </main>
      </section>

      {/* Section 4 - Projects */}
      <section className='py-20'>
        <main className='container mx-auto px-10'>
          <div className='flex justify-center items-center pb-8'>
            <div className="w-20 border-t-4 border-red-700 my-6 "></div> 
            <h1 className='text-4xl text-black text-center font-bold mx-4'>Projects</h1>
            <div className="w-20 border-t-4 border-red-700 my-6"></div> 
          </div>
          <LayoutProjects/>
        </main>
      </section>

    </div>
  );
}

const cards=[
  {
    img:      'https://pangkalmultikarya.com/assets/img/cust.png',
    head:     'Customer Focus',
    paragraf: 'Prioritizing customer satisfaction in every job.',
  },
  {
    img:      'https://pangkalmultikarya.com/assets/img/int.png',
    head:     'Integrity',
    paragraf: 'Honest, disciplined, and responsible in all work.',
  },
  {
    img:      'https://pangkalmultikarya.com/assets/img/team.png',
    head:     'Team Work',
    paragraf: 'Synergize with all stakeholders to achieve maximum performance.',
  },
  {
    img:      'https://pangkalmultikarya.com/assets/img/vis.png',
    head:     'Visionary',
    paragraf: 'Future-oriented that can add value to the company',
  },
];