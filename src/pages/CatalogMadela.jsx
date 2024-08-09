import CardGridHref from "../components/marketing/CardGridHref";

export default function CatalogMadela() {
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
        img:        'https://pangkalmultikarya.com/assets/img/madela.jpeg',
        head:       'MADELA',
        head1:      'L (600 Pa)',
        paragraf:   'Efficient Window with New Concept that Meets the Demands of Future Housing in Indonesia',
        buttonHref: 'https://online.fliphtml5.com/imiiz/ndcf/#p=H1',
        buttonDesc: 'Learn More',
    },
    {
        img:        'https://pangkalmultikarya.com/assets/img/madela%20h.jpeg',
        head:       'MADELA',
        head1:      'H (1200 Pa)',
        paragraf:   'Efficient Window with New Concept that Meets the Demands of Future Housing in Indonesia',
        buttonHref: 'https://online.fliphtml5.com/imiiz/myzq/#p=H1',
        buttonDesc: 'Learn More',
    },
    {
        img:        'https://pangkalmultikarya.com/assets/img/madela%20door.png',
        head:       'MADELA',
        head1:      'Door (600 Pa / 1200 Pa)',
        paragraf:   'High Quality doors that meet the requirements of modern and future homes',
        buttonHref: 'https://online.fliphtml5.com/imiiz/bzxh/#p=1',
        buttonDesc: 'Learn More',
    },
    {
        img:        'https://pangkalmultikarya.com/assets/img/madela%20sliding.png',
        head:       'MADELA',
        head1:      'SLIDING FLAT SILL',
        paragraf:   'Split the room without barrier with Sliding Flat Sill. *For High Rise building, indoor use only',
        buttonHref: 'https://online.fliphtml5.com/imiiz/hfhg/#p=1',
        buttonDesc: 'Learn More',
    },
];