'use client';

import { useState } from 'react';

export default function BookDemoNowForm() {
    const [challenge, setChallenge] = useState('');
    const [mediaSpend, setMediaSpend] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const response = await fetch('/api/book-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ challenge, mediaSpend, email, phone }),
      });
  
      if (response.ok) {
        setIsSubmitted(true);
        setChallenge('');
        setMediaSpend('');
        setEmail('');
        setPhone('');
      } else {
        console.error('Failed to submit the form');
      }
    };
  
    if (isSubmitted) {
      return (
        <div className="p-4 bg-green-100 text-green-800 rounded-md">
          Thank you for booking a demo! We'll get back to you soon.
        </div>
      );
    }

  return (
    <div className='max-w-5xl mx-auto'>
        <div className='container'>
            <form onSubmit={handleSubmit} className="mx-auto p-4 bg-white shadow-md rounded-md">
                <h2 className="text-4xl font-semibold mb-4 text-center">Book a Demo Now</h2>
                <div className='grid md:grid-cols-2 gap-x-10'>
                <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="challenge">Immediate Challenge</label>
            <select
            id="challenge"
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
            >
            <option value="" disabled>Select your challenge</option>
            <option value="Lead Generation">Lead Generation</option>
            <option value="Brand Awareness">Brand Awareness</option>
            <option value="Sales Conversion">Sales Conversion</option>
            <option value="Customer Retention">Customer Retention</option>
            </select>
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="mediaSpend">Average Monthly Media Spends</label>
            <input
            type="text"
            id="mediaSpend"
            value={mediaSpend}
            onChange={(e) => setMediaSpend(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
            />
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
            />
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
            <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
            />
        </div>
                </div>
                <button
                    type="submit"
                    className="bg-[#ee785a] text-white px-4 py-2 rounded-md"
                >
                    Book Demo Now
                </button>
            </form>
        </div>
    </div>
  );
}
