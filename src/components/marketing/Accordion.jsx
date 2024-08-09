import React, { useState } from "react";

export default function Accordion({
  accItems, // Accordion Items (Map)
  classHeadActive, // bg-red-800 text-white
  classHeadNonActive, // bg-white text-black
  classItems, // bg-white text-black text-justify
}) {
  

  // useState
  const [selectedIndex, setSelectedIndex] = useState(null);
  //Accordion open function
  const handleClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (

    <div className="flex flex-col gap-4">
      {accItems.map((item, index) => (
        <div key={index} className="rounded-lg ring-1 ring-black shadow overflow-hidden">
          <button
            type="button"
            className={`font-semibold text-lg underline w-full p-4 focus:outline-none flex justify-between items-center ${
            selectedIndex === index ? classHeadActive : classHeadNonActive
            }`}
            onClick={() => handleClick(index)}
          >
            {item.title}
            
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"                   
            className={`h-5 transform transition duration-200 ease-in-out ${
            selectedIndex === index ? 'rotate-180' : ''
            }`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
            </svg>
          </button>

          {selectedIndex === index && (
            <div className={`p-6 ${classItems}`}>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// const accItems = [
//   { title: 'Question 1', content: 'Answer 1' },
//   { title: 'Question 2', content: 'Answer 2' },
//   // ... more items
// ];
