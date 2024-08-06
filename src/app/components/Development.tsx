"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


export default function Development() {
  

  return (
    <>
      <div className='relative pt-[65px] pb-[120px]'>
        <div className='container'>
          <div className='flex items-center'>
           
            <div className='w-1/2 pr-20'>
              <div className='hero-img relative md:pr-10 md:pl-10 px-10 pt-8 md:pt-0'>
                <Image src="/campaignimg.png" alt="Hero Image" width={585} height={676} priority />
                
              </div>
            </div>
            <div className='w-1/2 md:pl-20'>
              <h5 className='text-white bg-[#EE785A] w-fit py-2 px-4 rounded-lg font-semibold mb-5'>CREATIVE DEVELOPMENT</h5>
              <h2 className='text-4xl font-semibold mb-4'>COMPARE PERFORMANCE <br/>
              Find Opportunities To Improve</h2>
              <p className='text-[#7a7a7a] text-base'>Communication is key! That's why we make it easy and hassle-free, so you don't waster time on unnecessary interactions.</p>
              <p className='text-[#7a7a7a] text-base mt-2'>Drive customer experience to build loyalty, build your customer segments, drive higher CLTV, track campaign analytics, and stay in touch with your customers. With personalized communication that drives brand love and affinity.</p>
            </div>
          </div>
        </div>
        

        
      </div>
      
     
    </>
  );
}

