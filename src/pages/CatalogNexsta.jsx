import CardGridHref from "../components/marketing/CardGridHref";

export default function CatalogNexsta() {
    return(
        <div className="container mx-auto px-10 pt-10 ">
            <CardGridHref
                cards={cards}
                classGrid={'grid grid-cols-1 xl:grid-cols-3 gap-12'}
                classLi={'group text-center bg-white p-8 flex flex-col justify-between items-center'}
                classLine={'w-32 border-t-2 border-gray-200 group-hover:border-red-700 mt-2 mb-4'}
                classImg={'py-4'}
                classButton={' mt-4 px-5 py-2 text-md bg-white text-black font-semibold border-2 border-black rounded-md'}
                target={'_blank'}
            />
        </div>
        
    )
}

const cards=[
    {
        img:        'https://pangkalmultikarya.com/assets/img/nexsta.jpg',
        head:       'NEXSTA',
        head1:      'L (600 Pa / FOR GENERAL USER)',
        paragraf:   'High Quality Finished Good which Evokes the sprit of Refined Elegance',
        buttonHref: 'https://online.fliphtml5.com/imiiz/tmru/#p=H1',
        buttonDesc: 'Learn More',
    },
    {
        img:        'https://pangkalmultikarya.com/assets/img/nexstapro.jpeg',
        head:       'NEXSTA',
        head1:      'L (600 Pa / FOR PRO USER)',
        paragraf:   'High Quality Finished Good which Evokes the sprit of Refined Elegance',
        buttonHref: 'https://online.fliphtml5.com/imiiz/skkl/#p=H1',
        buttonDesc: 'Learn More',
    },
    {
        img:        'https://pangkalmultikarya.com/assets/img/nexsta%20h.jpeg',
        head:       'NEXSTA',
        head1:      'H (850-1600 Pa / FOR PRO USER)',
        paragraf:   'Lorem ipsum dolor Lorem ipsum dolor ',
        buttonHref: 'https://online.fliphtml5.com/imiiz/bkuh/',
        buttonDesc: 'Learn More',
    },
    {
        img:        'https://pangkalmultikarya.com/assets/img/nexsta%20ven.png',
        head:       'NEXSTA',
        head1:      'HIGH VENTILATION WINDOW',
        paragraf:   'Top Hung Window that Makes Your Home Healthier with Better Ventilation',
        buttonHref: 'https://online.fliphtml5.com/imiiz/vnkr/#p=H1',
        buttonDesc: 'Learn More',
    },
    {
        img:        'https://pangkalmultikarya.com/assets/img/nexsta%20wide.png',
        head:       'NEXSTA',
        head1:      'WIDE VIEW SLIDING',
        paragraf:   'Large Sliding Window Brings You Closer to Nature',
        buttonHref: 'https://online.fliphtml5.com/imiiz/btbo/',
        buttonDesc: 'Learn More',
    },
];