import CardGrid from "../components/marketing/CardGrid";

export default function ProjectsHighRise() {
    return(
        <div>
            <section>
                <main>
                    <CardGrid
                        cards={cards}
                        classGrid={'grid-cols-1 lg:grid-cols-3 gap-x-8'}
                        classLi={'p-4 group text-center bg-white'}
                        classImg={'rounded-md mb-2'}
                        classLine={''} // w-32 border-t-2 border-gray-200 group-hover:border-red-700 mt-2 mb-4 mx-auto
                    />
                </main>
            </section>
            
        </div>
    )
}

const cards=[
    {
        img:      'https://pangkalmultikarya.com/assets/img/projects/high1.png',
        head:     'Vasanta Innopark, Cibitung',
        paragraf: '',
    },
    {
        img:      'https://pangkalmultikarya.com/assets/img/projects/high2.png',
        head:     'District 8, SCBD',
        paragraf: '',
    },
    {
        img:      'https://pangkalmultikarya.com/assets/img/projects/high3.png',
        head:     'Collins Boulevard',
        paragraf: '',
    },
    
];