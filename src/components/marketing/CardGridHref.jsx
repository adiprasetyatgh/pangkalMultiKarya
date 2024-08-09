export default function CardGridHref({
  cards, // map
  classGrid, // grid grid-cols-1 xl:grid-cols-3 gap-12
  classLi, // group text-center bg-white p-8 flex flex-col justify-between items-center
  classLine, // w-32 border-t-2 border-gray-200 group-hover:border-red-700 mt-2 mb-4
  classImg, // py-4
  classButton, // w-1/3 mt-4 px-5 py-1 bg-white text-black text-lg font-semibold border-2 border-black rounded-md
  target, // _blank _self

}) {

    return (
      <ul className={`${classGrid} `}>
        {cards.map((card, index) => (
          <li
            key={index}
            className={`${classLi} `}
          >
            <h3 className="font-semibold text-xl ">{card.head} <br /> {card.head1}</h3>
            <div className={`${classLine} `}/>
            <img className={`${classImg} `} src={card.img} alt={card.head}/>
            <p>{card.paragraf}</p>
            <a
              className= {`${classButton}`}
              href={card.buttonHref}
              target={target}
            >
              {card.buttonDesc}
            </a>
          </li>
        ))}
      </ul>
    );
  }

//   const cards=[
//     {
//         img:      'https://pangkalmultikarya.com/assets/img/nexsta.jpg',
//         head:     'L (600 Pa / FOR GENERAL USER)',
//          card.head1
//         paragraf: 'High Quality Finished Good which Evokes the sprit of Refined Elegance',
//         buttonHref: '#',
//         buttonDesc:'123123',
//     },
//     {
//         img:      'https://pangkalmultikarya.com/assets/img/nexstapro.jpeg',
//         head:     'L (600 Pa / FOR PRO USER)',
//         paragraf: 'High Quality Finished Good which Evokes the sprit of Refined Elegance',
//         buttonHref: '#',
//         buttonDesc:'123123',
//     },
//     {
//         img:      'https://pangkalmultikarya.com/assets/img/nexsta%20h.jpeg',
//         head:     'H (850-1600 Pa / FOR PRO USER)',
//         paragraf: 'Lorem ipsum dolor Lorem ipsum dolor ',
//         buttonHref: '#',
//         buttonDesc:'123123',
//     },
//     {
//         img:      'https://pangkalmultikarya.com/assets/img/nexsta%20ven.png',
//         head:     'HIGH VENTILATION WINDOW',
//         paragraf: 'Top Hung Window that Makes Your Home Healthier with Better Ventilation',
//         buttonHref: '#',
//         buttonDesc:'123123',
//     },
//     {
//         img:      'https://pangkalmultikarya.com/assets/img/nexsta%20wide.png',
//         head:     'WIDE VIEW SLIDING',
//         paragraf: 'Large Sliding Window Brings You Closer to Nature',
//         buttonHref: '#',
//         buttonDesc:'123123',
//     },
// ];