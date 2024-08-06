'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Slider = dynamic(() => import('react-slick'), { ssr: false });

const Reviews = () => {
  

  

  const settings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover:true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      text:"Plateform is exactly what our business needed to grow! It saves us soo much time and effort it's unbelievable!",
      name: 'Manish Pratap Singh',
      time: '3 Months ago'
    },
    {
        text:"Plateform is exactly what our business needed to grow! It saves us soo much time and effort it's unbelievable!",
        name: 'Manish Pratap Singh',
        time: '3 Months ago'
      },
      {
        text:"Plateform is exactly what our business needed to grow! It saves us soo much time and effort it's unbelievable!",
        name: 'Manish Pratap Singh',
        time: '3 Months ago'
      },
      {
        text:"Plateform is exactly what our business needed to grow! It saves us soo much time and effort it's unbelievable!",
        name: 'Manish Pratap Singh',
        time: '3 Months ago'
      },
      {
        text:"Plateform is exactly what our business needed to grow! It saves us soo much time and effort it's unbelievable!",
        name: 'Manish Pratap Singh',
        time: '3 Months ago'
      },
      {
        text:"Plateform is exactly what our business needed to grow! It saves us soo much time and effort it's unbelievable!",
        name: 'Manish Pratap Singh',
        time: '3 Months ago'
      }
    
  ];

  return (
    <section className="pt-20 overflow-hidden relative">
      <Image src="/left-quote.png" width={262} height={278} className='absolute top-[100px] left-[5%] left-quote' alt="left" />
      <Image src="/right-quote.png" width={220} height={225} className='absolute top-[10px] right-[5%] right-quote' alt="right" />
      <div className="container">
        <h2 className="heading relative text-center mb-10 lg:text-5xl text-3xl font-semibold">
        What people say
        </h2>
        <p className='text-center'>Our customer are our top priority<br/>
        Let's hear what they have to say.</p>
        <div className='flex flex-col items-start md:flex-row md:pt-8'>
          
          
          <div className='review-slider slider-box w-full'>
            <Slider {...settings}>
              {reviews.map((review, index) => (
                <div key={index} className='testimonial-item md:px-5 px-4'>
                  <Image src="/author.png" className='pb-5' width={48} height={48} alt="Authpr"/>
                  <p>
                    {review.text}
                    
                  </p>
                  <h5 className='pt-4'><span className='text-sm'>-{review.name}</span></h5>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Reviews;
