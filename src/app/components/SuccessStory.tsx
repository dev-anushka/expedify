"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function SuccessStory() {
  

  return (
    <>
      <div className='relative pt-[65px] pb-[120px]'>
        <div className='container'>
          <div className='flex items-center justify-center text-center'>
           
            
            <div className='w-full max-w-5xl'>
              <h5 className='text-white bg-[#EE785A] w-fit py-2 px-4 rounded-lg font-semibold mb-5 mx-auto'>WE LOVE TO SEE YOU GROW</h5>
              <h2 className='text-5xl font-semibold mb-4'>Success Stories</h2>
              <p className='text-center'>Plateform helps businesses thrive - see how we help our<br/>
              clients manage their restaurant and grow their revenue!</p>

              <ul className='mt-10'>
                 <li className='story-item'>
                    <div className='story-box flex items-center lg:flex-row flex-col rounded-3xl shadow-xl overflow-fidden'>
                       <div className='story-img lg:w-1/2'>
                          <Image className='story_img' src="/image-32.png" width={500} height={500} alt='Image' />
                       </div>
                       <div className='lg:w-1/2 text-left p-10'>
                           <p>See how our friends at Avoburger used our AI tools to optimize their routes, reach new customers and explode their reach in just a year.</p>
                           <p>An interview with Avoburger CEO Janet Smith.</p>
                           <div className='btn-grp flex lg:flex-row flex-col gap-5 mt-10'>
                             <Link href="/" className='text-white bg-[#EE785A] py-2 px-4 rounded-lg text-center'>Watch interview</Link>
                             <Link href="/" className='text-white bg-[#EE785A] py-2 px-4 rounded-lg text-center'>See all success stories</Link>
                           </div>
                       </div>
                       
                       
                    </div>
                 </li>

              </ul>
            </div>
          </div>
        </div>
        

        
      </div>
      <style jsx>{`
       
      `}
      
      </style>
     
    </>
  );
}

