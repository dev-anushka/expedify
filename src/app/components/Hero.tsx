"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


export default function Hero() {
  

  return (
    <>
      <div className='hero-section relative pt-[65px] pb-[120px]'>
        <div className='container'>
          <div className='flex lg:flex-row flex-col-reverse items-center relative'>
            <div className='md:w-3/6 w-full md:pr-2'>
              <h1 className='font-bold md:text-6xl text-[42px] leading-snug mb-4'>
                 Integrated Paid Advertising 
              </h1>
              <h2 className='text-4xl font-semibold mb-4'>Expedify your Growth. Optimize your ROI.</h2>
              <p>Drive your  ROI with paid campaign powered by advanced analytics,
                  creative experiments and continuous  improvements</p>
            </div>
            <div className='md:w-3/6 w-full flex justify-end'>
              <div className='hero-img relative md:pr-10 md:pl-10 px-10 pt-8 md:pt-0'>
                <Image src="/hero.png" alt="Hero Image" width={600} height={600} priority />
                
              </div>
            </div>
            <Image src="/x-orange.png" width={550} height={550} className='absolute top-0 right-0 lg:w-1/2 w-full -z-[1]' alt='' />
          </div>
        </div>
        

        
      </div>
      
      
    </>
  );
}

