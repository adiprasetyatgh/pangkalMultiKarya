export default function Hero ({
    title,
    desc,
    classHero, //bg-black bg-opacity-50 text-center text-gray-50
}) {
    return(
        <div className={`rounded-xl ${classHero}`}>
            <h1 className="font-bold text-6xl mb-8"> {title} </h1>
            <p className="font-semibold text-2xl"> {desc} </p>
      </div>
    )
}
