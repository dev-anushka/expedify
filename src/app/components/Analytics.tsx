"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Analytics() {
  

  return (
    <>
      <div className='relative pt-[65px] pb-[120px] '>
        <div className='container'>
          <div className='flex lg:flex-row flex-col-reverse items-center relative z-10'>
            <div className='lg:w-1/2 w-full md:pr-20'>
              {/* <h5 className='text-white bg-[#EE785A] w-fit py-2 px-4 rounded-lg font-semibold mb-5'>Analytics</h5> */}
              <h2 className='text-4xl font-semibold mb-4'>Analytics to Insights to Action</h2>
              <p  className='text-[#7a7a7a] text-base'>See the real impact of your content and customer journeys. Delve into advanced analytics, multi-touch attribution, and integrated sales and marketing data  for a complete picture of your customer's experience.</p>
              <Link className='text-white bg-[#EE785A] py-4 px-6 rounded-lg w-fit block mt-4' href="/">Explore Actionable insights
              </Link>
            </div>
            <div className='lg:w-1/2 w-full lg:pl-20'>
              <div className='hero-img relative md:pr-10 md:pl-10 px-10 pt-8 md:pt-0'>
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

