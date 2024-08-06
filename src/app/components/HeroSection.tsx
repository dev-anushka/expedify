"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function HeroSection() {
  

  return (
    <>
      <div className='relative lg:pt-[65px] pb-[120px] '>
        <div className='container'>
          <div className='flex lg:flex-row flex-col-reverse items-center relative'>
            <div className='w-full lg:w-1/2  md:pr-20 pt-10 lg:pt-0'>
              <h5 className='text-white bg-[#EE785A] w-fit py-2 px-4 rounded-lg font-semibold mb-5'>PERSONALIZED MARKETING</h5> 
              <h1 className='lg:text-5xl text-4xl font-semibold mb-4'>It only works when <br/>
                  it works well together
                  </h1>
               <ul className='list-disc mt-4 pl-4'>
                  <li>Next Generation Automation Platform </li>
                  <li>Campaigns Managed by Experts </li>
                  <li>Content Developed To Engage </li>
                  <li>All Marketing Data in One Place                  </li>
               </ul>
              <Link className='text-white bg-black hover:bg-[#EE785A] py-4 px-6 rounded-lg w-fit block mt-4' href="/">Get Demo
              </Link>
            </div>
            <div className='w-full lg:w-1/2  lg:pl-20'>
              <div className='hero-img relative md:pr-10 md:pl-10 px-5 pt-8 md:pt-0'>
                <Image src="/campaignimg.png" alt="Hero Image" width={585} height={676} priority />
                
              </div>
            </div>
            <Image src="/x-orange.png" width={550} height={550} className='absolute top-0 right-0 lg:w-1/2 w-full -z-[1]' alt='' />
          </div>
        </div>
        

        
      </div>
      
     
    </>
  );
}

