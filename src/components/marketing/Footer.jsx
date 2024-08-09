export default function Footer ({
    classFooter,        // text-black 
    companyName,        // PT Lorem
    companyAddress,     // Jl menuju hatinya
    companyAddress1,    // Buntu, Indonesia
    companyAddress2,    // Buntu, Indonesia
    titleGrid1,         // Contact Us
    contacts,           // cards contacts
    titleGrid2,         // Social Media
    sosmeds,            // cards sosmeds

}){
    return(
        <div className={`container mx-auto px-10 py-10 grid grid-cols-1 xl:grid-cols-3 gap-5 ${classFooter}`}>
            {/* Grid 1 */}
            <div className="xl:col-span-2 p-4 text-base ring-1 ring-white rounded-xl">
                <h2 className="text-xl font-semibold mb-2"> {companyName} </h2>
                <p> {companyAddress} </p>
                <p> {companyAddress1} </p>
                <p> {companyAddress2} </p>
            </div>

            {/* Grid 2 */}
            <div className="p-4 text-sm ring-1 ring-white rounded-xl">
                <h2 className="text-xl font-semibold mb-2"> {titleGrid1} </h2>
                {contacts.map((contact, index) => (
                    <div
                    className="flex items-center text-base break-words py-1"
                    key={index} 
                    >
                        <img className="size-8 me-2" src={contact.img} alt={contact.text} />
                        <p className="overflow-x-auto"> {contact.text} </p>
                    </div> 
                ))}
                
                
            </div>

        </div>
    )
}

// const contacts = [
//     {
//         href:   'google.com',
//         img:    'https://img.icons8.com/?size=100&id=43297&format=png&color=000000',
//         text:   '0000 0000 0000',
//     },
//     {
//         href:   'google.com',
//         img:    'https://img.icons8.com/?size=100&id=13922&format=png&color=000000',
//         text:   '0000 0000 0000',
//     },
// ];

// const sosmeds = [
//     {
//         href:   'google.com',
//         img:    'https://img.icons8.com/?size=100&id=lTkH3THtr7SL&format=png&color=000000',
//         text:   'tiktok',
//     },
//     {
//         href:   'google.com',
//         img:    'https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000',
//         text:   'instagram',
//     },
//     {
//         href:   'google.com',
//         img:    'https://img.icons8.com/?size=100&id=13912&format=png&color=000000',
//         text:   'facebook',
//     },
// ]