"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


export default function WorksTogether() {
  

  return (
    <>
      <div className='relative pt-[65px] pb-[120px]'>
        <div className='container'>
          <div className='text-center'>
            <div className='w-full md:pr-2'>
             
              <h2 className='text-3xl font-semibold mb-4'>It Only Works When It All Works Together</h2>
              <p className='mb-2'><strong>Expedify</strong> helps you synergize all you paid marketing efforts for total alignment and control. Easy and all in one place.</p>
              <p>Running fragmented campaigns is like assembling a rocket without the blueprint—it's a recipe for disaster. An integrated approach is not just important - its non-negaotiable</p>
            </div>
            <div className='w-full'>
              <div className='hero-img relative md:pr-10 md:pl-10 px-10 pt-8 md:pt-0'>
                <Image src="/datause.png" alt="Hero Image" width={1210} height={626} priority />
                
              </div>
            </div>
          </div>
        </div>
        

        
      </div>
      
     
    </>
  );
}

