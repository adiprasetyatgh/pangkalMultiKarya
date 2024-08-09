// src/components/Tabs.jsx
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function LayoutProjects () {
    const [activeTab, setActiveTab] = useState(1);

  return (
    <section>
        <nav className="flex justify-center">
            <div className="flex flex-wrap justify-center bg-white rounded-lg p-1 border-2 border-gray-200">
                
                {tabs.map((tab) => (
                <NavLink
                    to={tab.to}
                    key={tab.id}
                    className={`px-4 py-2 rounded-lg m-1 text-center w-32 ${
                    activeTab === tab.id ? 'bg-red-700 text-white border-2 border-white font-semibold' : 'bg-gray-200 text-gray-800'
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
    { id: 1, label: 'All', to:'', },
    { id: 2, label: 'Residences', to:'residences', },
    { id: 3, label: 'Club House', to:'club-house', },
    { id: 4, label: 'High Rise', to:'high-rise', },
];