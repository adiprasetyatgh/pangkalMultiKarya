import React, { useState } from 'react';

export default function FormContact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission goes here
    console.log('Form data:', formData);
    // You might want to reset the form or show a success message
  };

  return (
    <form 
        onSubmit={handleSubmit}
        className="w-full p-4 bg-white rounded"
    >
        <div className='mb-4'>
            <label 
            htmlFor="name"
            className="block text-gray-700 font-bold mb-2"
            >
                Nama
            </label>
            <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className='border rounded w-full py-2 px-3 text-gray-700'
            />
        </div>

        <div className='mb-4'>
            <label 
            htmlFor="email"
            className='block text-gray-700 font-bold mb-2'
            >
                Email
            </label>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className='border rounded w-full py-2 px-3 text-gray-700'
            />
        </div>

        <div className='mb-4'>
            <label 
            htmlFor="subject"
            className="block text-gray-700 font-bold mb-2"
            >
                Subject
            </label>
            <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border rounded w-full py-2 px-3 text-gray-700"
            />
        </div>

        <div className='mb-4'>
            <label 
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
            >
                Message
            </label>
            <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="border rounded w-full py-2 px-3 text-gray-700"
            ></textarea>
        </div>

        <button type="submit"
        className="bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
            Submit
        </button>
    </form>
  );
};
