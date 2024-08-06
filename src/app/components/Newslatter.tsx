'use client';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="newslatter p-6 rounded-lg shadow-md text-center relative lg:mt-0 mt-5">
      <div className='background-shape'></div>
      <h2 className="text-base font-bold mb-4 pb-2">Discover how we can help your business grow      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex  rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-1/2 p-4 border text-gray-500 font-medium  focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
          type="submit"
          className="w-1/2 bg-[#1d3eb2] text-white font-medium py-2 px-4 transition-colors"
        >
          Send Me a 
          Proposal!
        </button>
        </div>
        
      </form>
    </div>
  );
};

export default Newsletter;
