"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function LetExpedify() {
  

  return (
    <>
      <div className='relative pt-[65px] pb-[120px]'>
        <div className='container'>
          <div className='flex items-center'>
           
            
            <div className='w-full text-center'>
              
              <h2 className='text-6xl font-semibold mb-4'>Let Expedify boost your business!</h2>
              <p className='text-2xl'>Join 300+ brands that are already using<br/>
              Expedify and growing their revenue and sales.</p>
              <div className='btn-grp flex justify-center gap-5 mt-10'>
                            <Link href="/" className='text-white bg-[#EE785A] py-4 px-6 rounded-lg text-lg'>Business Email</Link>
                            <Link href="/" className='text-white bg-[#EE785A] py-4 px-6 rounded-lg'>Sign up for FREE</Link>
                           </div>
            </div>
          </div>
        </div>
        

        
      </div>
      
     
    </>
  );
}

