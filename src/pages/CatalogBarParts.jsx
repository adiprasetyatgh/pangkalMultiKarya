import CardGridHref from "../components/marketing/CardGridHref";

export default function CatalogBarParts() {
    return(
        <div className="container mx-auto px-10 pt-10 ">
            <CardGridHref
                cards={cards}
                classGrid={'flex justify-center'}
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
        img:        'https://pangkalmultikarya.com/assets/img/bar+.jpeg',
        head:       'BAR + PARTS SERIES',
        head1:      '',
        paragraf:   'Affordable Window with Dedicated Parts',
        buttonHref: 'https://online.fliphtml5.com/imiiz/phcg/#p=H1',
        buttonDesc: 'Learn More',
    },
];