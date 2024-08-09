export default function ButtonBasic({
    buttonHref,
    buttonDesc,
    classButton, // flex justify-center px-5 py-2 w-1/3 mx-auto bg-white text-black text-lg font-semibold rounded-md border-2 border-black
}) {
    return (
        <div>
            <a 
                className= {`${classButton}`}
                href={buttonHref}
            >
                {buttonDesc}
            </a>
        </div>
    );
}
