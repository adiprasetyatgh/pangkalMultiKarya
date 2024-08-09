import IconFlexGrid from "../components/marketing/IconFlexGrid";

export default function About() {

  return (
    <div>
      {/* Section 1 - */}
      <section className='py-20'>
        <main className='container mx-auto px-10 lg:grid grid-cols-2 bg-gray-100 py-12'>
          <video 
            className='w-full h-full object-cover'
            src="https://pangkalmultikarya.com/assets/img/introduction.mp4"
            loop
            muted
            controls
            preload="metadata"
          />
          <div className=' mt-8 lg:mt-0 lg:pb-12 lg:px-12 flex flex-col justify-between '>
            <h1 className='text-4xl text-gray-900 font-bold text-start'> Our Story </h1>
            <div className="w-20 border-t-4 border-red-700 my-4"></div> 
            <p className='text-md text-gray-700 text-justify mb-8'>PT Pangkal Multikarya as one of the largest authorized distributors of YKK AP already has 33 years of experience in the field of aluminium installation. We have handled more than hundreds of projects ranging from unit houses, residences, banks, hotel, office building, showrooms, and shop houses to high-rise buildings.
            <br /> <br />  
            Our services include installing window walls, curtain walls, frameless glass, suspended glass, ACP, and bending glass.
            </p>           
          </div>
        </main>
      </section>

      {/* Section 2 */}
      <section className="py-20 bg-red-700">
        <main className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2  bg-gray-100 gap-12 p-12">
          <div className="">
            <h1 className='text-4xl text-gray-900 font-bold'> Vision </h1>
            <div className="w-20 border-t-4 border-red-700 my-4"></div> 
            <p className='text-lg text-gray-700 text-justify mb-8'>Become the main choice in facade installation services in Indonesia.
            </p>

            <h1 className='text-4xl text-gray-900 font-bold'> Mision </h1>
            <div className="w-20 border-t-4 border-red-700 my-4"></div> 
            <ul className="list-disc ms-4 text-lg">
              <li>Understand consumer needs and provide the right product choice for facade installation.</li>
              <li>Increase the value of the company and stakeholders.</li>
              <li>Provide quality work results with timeliness in the work process.</li>
            </ul>

          </div>
          <img 
          className='aspect-video size-full object-cover'
          src="https://images.unsplash.com/photo-1489465033131-30f7e2025f68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </main>
      </section>

      {/* Section 3 */}
      <section className="py-20" >
        <main className="container px-10 mx-auto">
          <div className='flex justify-center items-center'>
            <div className="w-20 border-t-4 border-red-700 my-6 "></div> 
            <h1 className='text-4xl text-black text-center font-bold mx-4'>Partner Project</h1>
            <div className="w-20 border-t-4 border-red-700 my-6"></div> 
          </div>
          <IconFlexGrid
              icons={icons}
              classImg={'w-2/5 lg:w-1/5 object-contain bg-white p-4 hover:bg-white'}
          />
        </main>
      </section>
      
    </div>
  )
}

const icons =[
  {
      src:    'https://pangkalmultikarya.com/assets/img/team/agungpodo.png',
      alt:    '1',
  },
  {
      src:    'https://pangkalmultikarya.com/assets/img/team/sum.png',
      alt:    '1',
  },
  {
      src:    'https://pangkalmultikarya.com/assets/img/team/lip.png',
      alt:    '1',
  },
  {
    src:    'https://pangkalmultikarya.com/assets/img/team/pik2.png',
    alt:    '1',
  },
  {
    src:    'https://pangkalmultikarya.com/assets/img/team/alsut.png',
    alt:    '1',
  },
  {
      src:    'https://pangkalmultikarya.com/assets/img/team/modern.png',
      alt:    '1',
  },
  {
      src:    'https://pangkalmultikarya.com/assets/img/team/agungsedayu.png',
      alt:    '1',
  },
  {
    src:    'https://pangkalmultikarya.com/assets/img/team/paramon.png',
    alt:    '1',
  },
];