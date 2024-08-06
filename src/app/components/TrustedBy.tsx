'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import { Settings } from 'react-slick';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface SliderSettings extends Settings {
  responsive: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
    };
  }[];
}

const TrustedBy = () => {
  
  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className='py-20 overflow-hidden our-partner'>
      <div className='container'>
        <h2 className='heading relative text-center mb-10 text-5xl font-semibold'>Trusted By</h2>
        
        <Slider {...settings}>
          <div className='px-3'>
            <Image src="/award1.png" width={300} height={100} alt='Award 1' />            
          </div>
          <div className='px-3'><Image src="/award1.png" width={300} height={100} alt='Award 2' /></div>
          <div className='px-3'><Image src="/award1.png" width={300} height={100} alt='Award 3' /></div>
          <div className='px-3'><Image src="/award1.png" width={300} height={100} alt='Award 4' /></div>
          <div className='px-3'><Image src="/award1.png" width={300} height={100} alt='Award 5' /></div>
          <div className='px-3'><Image src="/award1.png" width={300} height={100} alt='Award 6' /></div>
          
        </Slider>
      </div>
    </div>
  );
};



export default TrustedBy;