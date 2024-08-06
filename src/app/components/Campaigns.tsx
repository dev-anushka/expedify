"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


export default function Campaigns() {
  

  return (
    <>
      <div className='relative pt-[65px] pb-[120px]'>
        <div className='container'>
          <div className='flex'>
            <div className='w-1/2 md:pr-20'>
              <h5 className='text-white bg-[#EE785A] w-fit py-2 px-4 rounded-lg font-semibold mb-5'>PAID CAMPAIGNS</h5>
              <h2 className='text-4xl font-semibold mb-4'>Without Data, You're Just Guessing</h2>
              <ul className=''>
                <li className='flex pt-10'>
                    <div className='icon-box w-[60px]'>
                        <Image src="/Icon.png" width={60} height={60} alt='Icon'/>
                    </div>
                    <div className='icon-text w-full md:w-[calc(100%-60px)] pl-5'>
                        <h3 className='text-2xl font-semibold'>6C analytics</h3>
                        <p className='text-[#7a7a7a] text-base'>Know everything about your Competition, Customer,
                        Channel, Campaign, Communication and Conversions. in one place.</p>
                    </div>
                </li>
                <li className='flex pt-10'>
                    <div className='icon-box w-[60px]'>
                        <Image src="/Icon.png" width={60} height={60} alt='Icon'/>
                    </div>
                    <div className='icon-text w-full md:w-[calc(100%-60px)] pl-5'>
                        <h3 className='text-2xl font-semibold'>Real-time, Multi-Channel view</h3>
                        <p className='text-[#7a7a7a] text-base'>Track your campaigns with multiple metrics
                        from across channels.</p>
                    </div>
                </li>
                <li className='flex pt-10'>
                    <div className='icon-box w-[60px]'>
                        <Image src="/Icon.png" width={60} height={60} alt='Icon'/>
                    </div>
                    <div className='icon-text w-full md:w-[calc(100%-60px)] pl-5'>
                        <h3 className='text-2xl font-semibold'>AI Driven Insights</h3>
                        <p className='text-[#7a7a7a] text-base'></p>
                    </div>
                </li>
              </ul>
            </div>
            <div className='w-1/2 pl-20'>
              <div className='hero-img relative md:pr-10 md:pl-10 px-10 pt-8 md:pt-0'>
                <Image src="/campaignimg.png" alt="Hero Image" width={585} height={676} priority />
                
              </div>
            </div>
          </div>
        </div>
        

        
      </div>
      
     
    </>
  );
}

