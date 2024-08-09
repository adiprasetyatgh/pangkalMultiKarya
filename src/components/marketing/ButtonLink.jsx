import { Link } from "react-router-dom";

export default function ButtonLink({
    buttonHref,
    buttonDesc,
    classButton, //flex px-5 py-2 w-40 justify-center bg-white text-black text-lg font-semibold rounded-md border-2 border-black 
}) {

    return (
        <div>
            <Link 
                className= {`${classButton}`}
                to={buttonHref}
            >
                {buttonDesc}
            </Link>
        </div>

    );
}
