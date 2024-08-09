import React, { useState } from 'react';

export default function FormContactWA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState('');

  // Masukin data yang diketik ke useState FormData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // Mencegah refresh agar bisa diakses javascript
    e.preventDefault();

    // Membuat link WhatsApp
    const phoneNumber = '6200000000000'; // Ganti dengan nomor WhatsApp Anda
    const message = encodeURIComponent(`
      Nama: ${formData.name}
      Email: ${formData.email}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    // Membuka link WhatsApp
    window.open(whatsappLink, '_blank');

    // Set status pengiriman
    setSubmissionStatus('Pengiriman form berhasil!');

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full p-4 bg-white rounded">
        <div className='mb-4'>
          <label htmlFor="name" className="block text-gray-700 text-lg font-bold mb-2">Nama</label>
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
          <label htmlFor="email" className='block text-gray-700 text-lg font-bold mb-2'>Email</label>
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
          <label htmlFor="subject" className="block text-gray-700 text-lg font-bold mb-2">Subject</label>
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
          <label htmlFor="message" className="block text-gray-700 text-lg font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="border rounded w-full py-2 px-3 text-gray-700"
          ></textarea>
        </div>

        <button type="submit" className="bg-red-700 text-white font-bold text-lg py-2 px-4 rounded">
          Submit
        </button>
      </form>

      {/* Menampilkan pesan status */}
      {submissionStatus && <p className="text-center m-4  text-xl text-red-700 font-bold">{submissionStatus}</p>}
    </div>
  );
}
