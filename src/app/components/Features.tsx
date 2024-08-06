"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Features() {
  

  return (
    <>
      <div className='relative pt-[65px] pb-[120px]'>
        <div className='container'>
          <div className='flex items-center'>
           
            
            <div className='w-full  '>
              
              <h2 className='text-5xl text-center font-semibold mb-4 max-w-5xl mx-auto'>From awareness to loyalty, exceed customer
              expectations at every stage</h2>
              <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10'>
                
                    <div className='rounded-3xl shadow-xl p-10'>
                        <Image src="/Icon.png" className='mb-4' width={60} height={60} alt='Icon'/>
                        <h5 className='text-xl font-semibold mb-4'>Aquisition</h5>
                        <p>With precise targeting, effectively locate and engage with your ideal audience.</p>
                        <ul className='list-disc mt-4 pl-4'>
                            <li>Nurturing workflows for visitors </li>
                            <li>Exit intent journey</li>
                            <li>Lead capturing</li>
                            <li>Hyperweb personalization</li>
                            <li>Visitor insights</li>
                        </ul>
                    </div>
                    <div className='rounded-3xl shadow-xl p-10'>
                        <Image src="/Icon.png" className='mb-4' width={60} height={60} alt='Icon'/>
                        <h5 className='text-xl font-semibold mb-4'>Activation
                        </h5>
                        <p>Build stronger connections with your audience by offering personalized guidance.
                        </p>
                        <ul className='list-disc mt-4 pl-4'>
                            <li>Nurturing workflows for visitors </li>
                            <li>Exit intent journey</li>
                            <li>Lead capturing</li>
                            <li>Hyperweb personalization</li>
                            <li>Visitor insights</li>
                        </ul>
                    </div>
                    <div className='rounded-3xl shadow-xl p-10'>
                        <Image src="/Icon.png" className='mb-4' width={60} height={60} alt='Icon'/>
                        <h5 className='text-xl font-semibold mb-4'>Engagement
                        </h5>
                        <p>Provide individual audience members with well-timed calls to take the next step.
                        </p>
                        <ul className='list-disc mt-4 pl-4'>
                            <li>Nurturing workflows for visitors </li>
                            <li>Exit intent journey</li>
                            <li>Lead capturing</li>
                            <li>Hyperweb personalization</li>
                            <li>Visitor insights</li>
                        </ul>
                    </div>
                    <div className='rounded-3xl shadow-xl p-10'>
                        <Image src="/Icon.png" className='mb-4' width={60} height={60} alt='Icon'/>
                        <h5 className='text-xl font-semibold mb-4'>Retention</h5>
                        <p>
                        Anticipate and fulfill customer needs at the right time for a delightful and memorable experience</p>
                        <ul className='list-disc mt-4 pl-4'>
                            <li>Nurturing workflows for visitors </li>
                            <li>Exit intent journey</li>
                            <li>Lead capturing</li>
                            <li>Hyperweb personalization</li>
                            <li>Visitor insights</li>
                        </ul>
                    </div>
                
              </div>
              
            </div>
          </div>
        </div>
        

        
      </div>
      
     
    </>
  );
}

