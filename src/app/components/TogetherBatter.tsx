"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


export default function TogetherBatter() {
  

  return (
    <>
      <div className='relative pt-[65px] pb-[120px]'>
        <div className='container'>
          <div className='flex lg:flex-row flex-col items-center'>
           
            <div className='w-full lg:w-1/2 lg:pr-20'>
              <div className='hero-img relative md:pr-10 md:pl-10 px-10 pt-8 md:pt-0'>
                <Image src="/campaignimg.png" alt="Hero Image" width={585} height={676} priority />
                
              </div>
            </div>
            <div className='w-full lg:w-1/2 lg:pl-20'>
              <h5 className='text-white bg-[#EE785A] w-fit py-2 px-4 rounded-lg font-semibold mb-5'>Together for Better              </h5>
              <h2 className='text-4xl font-semibold mb-4'>Integrated Insights with <br/>Expedify Engage</h2>
              <p className='text-[#7a7a7a] text-base'>Integrate analytics, testing, and personalization seamlessly. Expedify Engage is your go-to platform for A/B testing, personalized strategies, and targeted marketing efforts.
              </p>
              
            </div>
          </div>
        </div>
        <Image src="/x-orange.png" width={550} height={550} className='absolute top-0 left-0 w-1/2 -z-[1]' alt='' />

        
      </div>
      
     
    </>
  );
}

