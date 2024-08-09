export default function CardFlexGridRectangle({
    cards, // map
    classFlex, // justify-evenly text-center
    classImg, //size-full object-cover
  
  }) {
  
      return (
        <div className="container mx-auto px-10">  
          <ul className={`grid gap-8 ${classFlex}`}>
            {cards.map((card, index) => (
            <li
                key={index}
                className={'grid grid-cols-2 border-2 border-black max-w-1/2'}
            >
                <img className={`${classImg} `} 
                src={card.img} 
                alt={card.head}/>
                <div className="flex flex-col justify-between border-l-2 border-black p-4">
                    <div>
                        <p className="font-semibold">{card.subHead}</p>
                        <h3 className="font-bold text-xl mb-4"> {card.head} </h3>
                        <p className="text-sm list-disc">{card.paragraf}</p>
                        <p className="text-sm list-disc">{card.paragraf1}</p>
                        <p className="text-sm list-disc">{card.paragraf2}</p>
                        <p className="text-sm list-disc">{card.paragraf3}</p>
                        <p className="text-sm list-disc">{card.paragraf4}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mt-4"> {card.info} </h3>
                    </div>
                </div>   
            </li>
            ))}
          </ul>
        </div>
      );
    }
  
  //   const cards=[
  //     {
  //         img:      'https://static.wixstatic.com/media/a62217_e831dc376aaf4fdcacc423ec66341ead~mv2.png/v1/fill/w_261,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/COVER%20BAY%202.png',
  //         subHead: 'lorem ',
  //         head:    'LOREM IPSUM',
  //         paragraf: 'lorem ipsum lorem ipsum  ipsum lorem ipsum ', 
  //         paragraf1:'lorem ipsum',    
  //         paragraf2:'lorem ipsum', 
  //         paragraf3:'lorem ipsum', 
  //         paragraf4:'lorem ipsum', 
  //         info:     'lorem blablabla',
  //     },
  //     {
  //       img:      'https://static.wixstatic.com/media/a62217_e831dc376aaf4fdcacc423ec66341ead~mv2.png/v1/fill/w_261,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/COVER%20BAY%202.png',
  //       subHead: 'lorem ',
  //       head:    'LOREM IPSUM',
  //       paragraf: 'lorem ipsum', 
  //       paragraf1:'lorem ipsum',    
  //       paragraf2:'lorem ipsum', 
  //       paragraf3:'lorem ipsum', 
  //       paragraf4:'lorem ipsum', 
  //       info:     'lorem blablabla',
  //   },
  //   {
  //       img:      'https://static.wixstatic.com/media/a62217_e831dc376aaf4fdcacc423ec66341ead~mv2.png/v1/fill/w_261,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/COVER%20BAY%202.png',
  //       subHead: 'lorem ',
  //       head:    'LOREM IPSUM',
  //       paragraf: 'lorem ipsum lorem ipsum  ipsum lorem ipsum ', 
  //       paragraf1:'lorem ipsum',    
  //       paragraf2:'lorem ipsum', 
  //       paragraf3:'lorem ipsum', 
  //       paragraf4:'lorem ipsum', 
  //       info:     'lorem blablabla',
  //   },
  //   {
  //     img:      'https://static.wixstatic.com/media/a62217_e831dc376aaf4fdcacc423ec66341ead~mv2.png/v1/fill/w_261,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/COVER%20BAY%202.png',
  //     subHead: 'lorem ',
  //     head:    'LOREM IPSUM',
  //     paragraf: 'lorem ipsum', 
  //     paragraf1:'lorem ipsum',    
  //     paragraf2:'lorem ipsum', 
  //     paragraf3:'lorem ipsum', 
  //     paragraf4:'lorem ipsum', 
  //     info:     'lorem blablabla',
  //   },    
  // ];
    