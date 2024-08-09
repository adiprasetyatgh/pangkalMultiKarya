export default function IconFlexGrid({
    icons,      // map 
    classImg,   // size-32 aspect-square object-contain bg-white bg-opacity-80 p-4 hover:bg-white
}) {
    return(
        <div className="flex flex-wrap justify-center gap-8 mt-8">
            {icons.map((icon,index)=>(
                <img 
                key={index}
                className={`${classImg}`}
                src={icon.src} 
                alt={icon.alt} />
            ))}
        </div>
    )
}

// const icons =[
//     {
//         href:   '#',
//         src:    'https://seeklogo.com/images/T/tokopedia-logo-40654CCDD6-seeklogo.com.png',
//         alt:    '1',
//     },
//     {
//         href:   '#',
//         src:    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1442px-Shopee_logo.svg.png',
//         alt:    '1',
//     },
//     {
//         href:   '#',
//         src:    'https://magicwacky.com/wp-content/uploads/2023/07/Tiktok-Shop-Logo-Black-PNG.png',
//         alt:    '1',
//     },
// ];