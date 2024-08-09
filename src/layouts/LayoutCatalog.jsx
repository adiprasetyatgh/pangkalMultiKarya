// src/components/Tabs.jsx
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function LayoutCatalog () {
    const [activeTab, setActiveTab] = useState(1);

  return (
    <section>
        <nav className="flex justify-center">
            <div className="flex flex-wrap justify-center rounded-lg p-1">
                
                {tabs.map((tab) => (
                <NavLink
                    to={tab.to}
                    key={tab.id}
                    className={`px-4 py-2 rounded-lg m-1 text-center w-44 flex items-center justify-center border border-black ${
                    activeTab === tab.id ? 'bg-red-700 text-white border border-black font-semibold' : 'bg-white text-gray-800'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </NavLink>
                ))}
            </div>
        </nav>

        <main>
            <Outlet/> 
        </main>
    </section>   
  );
};

const tabs = [
    { id: 1, label: 'Nexsta', to:'', },
    { id: 2, label: 'Madela', to:'madela', },
    { id: 3, label: 'Exhido', to:'exhido', },
    { id: 4, label: 'KCW-75', to:'kcw75', },
    { id: 5, label: 'Bar + Parts Series', to:'barparts', },
    { id: 6, label: 'SF Bar Series', to:'sfbar', },
];