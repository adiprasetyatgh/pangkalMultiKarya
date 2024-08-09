import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <div className="container mx-auto text-center px-10 py-28">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h2 className="text-3xl font-bold text-gray-900">Page Not Found</h2>
            <p className="mt-2 text-lg text-indigo-600">Sorry, we could not find the page you are looking for</p>
            <Link to={'/'}>
                <button className="mt-6 mx-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                    Home Page
                </button>
            </Link>
        </div>
    )
}