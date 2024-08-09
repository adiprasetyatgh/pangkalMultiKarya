import { NavLink, Outlet, useLocation } from "react-router-dom";
import { React, useEffect, useState } from 'react';
import Footer from "../components/marketing/Footer";

export default function LayoutRoot () { 
    // Scroll to the top of the page whenever the location changes
    const location = useLocation();
    useEffect(() => {
        const currentPath = location.pathname;
        const mainPaths = [
            '/', 
            '/about', 
            '/product',
            '/catalogs',
            '/projects',
        ];
        
        // Check if the current path is exactly one of the main paths
        if (mainPaths.includes(currentPath)) {
            window.scrollTo(0, 0);
        }
    }, [location]);
    
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* Navbar */}
            <nav className="p-8 bg-red-700">
                <div className="container mx-auto flex justify-between items-center ">
                    
                    <NavLink to="/">
                        <img 
                        className="w-52  bg-white rounded-md"
                        src="https://pangkalmultikarya.com/assets/img/logo.png" alt="" />
                    
                    </NavLink>
                    
                    {/* Large Screen Menu */}
                    <div className="hidden lg:flex space-x-4 text-lg font-bold text-white ">
                        {/* Nav List */}
                        <NavLink to="/" className="px-3 py-2 rounded-md ring-black hover:ring-1 hover:bg-white hover:text-red-700">Home</NavLink>
                        <NavLink to={"projects"} className="px-3 py-2 rounded-md hover:ring-1 hover:bg-white hover:text-red-700">Projects</NavLink>
                        <NavLink to={"catalogs"} className="px-3 py-2 rounded-md hover:ring-1 hover:bg-white hover:text-red-700">Catalogs</NavLink>
                        <NavLink to={"about"} className="px-3 py-2 rounded-md hover:ring-1 hover:bg-white hover:text-red-700">About</NavLink>
                        <NavLink to={"contact"} className="px-3 py-2 rounded-md hover:ring-1 hover:bg-white hover:text-red-700">Contact</NavLink>
                    </div>

                    {/* Hamburger Icon */}
                    <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                <div className="lg:hidden text-lg font-semibold mt-4">
                    {/* Menu List */}
                    <NavLink to={"/"} className="block px-3 py-2 rounded-md text-white hover:ring-1 hover:bg-white hover:text-red-700">Home</NavLink>
                    <NavLink to={"projects"} className="block px-3 py-2 rounded-md text-white hover:ring-1 hover:bg-white hover:text-red-700">Projects</NavLink>
                    <NavLink to={"catalogs"} className="block px-3 py-2 rounded-md text-white hover:ring-1 hover:bg-white hover:text-red-700">Catalogs</NavLink>
                    <NavLink to={"about"} className="block px-3 py-2 rounded-md text-white hover:ring-1 hover:bg-white hover:text-red-700">About</NavLink>
                    <NavLink to={"contact"} className="block px-3 py-2 rounded-md text-white hover:ring-1 hover:bg-white hover:text-red-700">Contact</NavLink>
                </div>
                )}
            </nav>
            
            {/* Outlet */}
            <main>
                <Outlet/>
            </main>   

            {/* Footer */}
            <main className="bg-red-700">
                <Footer
                    classFooter={'text-white font-semibold'}
                    companyName={'PT. PANGKAL MULTIKARYA'}
                    companyAddress={'Jalan Danau Sunter Utara Blok J12 No.41,'}
                    companyAddress1={'Sunter Agung, Tj. Priok, DKI Jakarta, 14350'}
                    companyAddress2={''}
                    titleGrid1={'Contact Us'}
                    contacts={contacts}    
                />
            </main>
        </div>
    )
}

const contacts = [
    {
        href:   'google.com',
        img:    'https://img.icons8.com/?size=100&id=43297&format=png&color=000000',
        text:   '(021) 6510 012',
    },
    {
        href:   'google.com',
        img:    'https://img.icons8.com/?size=100&id=13922&format=png&color=000000',
        text:   'marketing@pangkalmultikarya.com',
    },
];
