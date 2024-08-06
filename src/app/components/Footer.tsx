'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Newsletter from './Newslatter';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import Counter from './Counter';

const Footer = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState({
        service: false,
        links: false,
        company: false,
        product: false,
        bookNow: false,
        getstart: false,
        newsletter: false,
      });
    const toggleAccordion = (section) => {
        setIsAccordionOpen(prevState => ({
          ...prevState,
          [section]: !prevState[section],
        }));
      };  
  return (
    <footer className="bg-[#24262a] text-white py-10">
      <div className="container mx-auto px-4">
        <div className='footer-top flex lg:flex-row flex-col items-center pb-10'>
            <Counter/>
            <Newsletter/>
        </div>
        <div className='footer-bottom grid lg:grid-cols-4 border-t-2 py-10 border-black-500'>
           <div className='pr-10'>
           <Image src="/white-logo.png" className='mb-5' width={200} height={65} alt='Expedify'/>
           <p>Celebrating 15+ Years <br/>
           of Digital Marketing Excellence</p>
           <Link href="/" className='text-sm font-medium border-solid border-2 border-[#ee785a] hover:text-white bg-[#fff] text-black hover:bg-[#ee785a] py-4 px-4 block rounded-lg my-5 mr-4'>
           <span>Ready to speak with a marketing expert?
           Click Here</span>
           </Link>
           <div  className='mt-10'>
                <h4 className='font-semibold text-lg'>Find Us At</h4>
                <ul className='flex flex-col gap-5 mt-5 text-xs'>
                    <li>
                    <svg width={15} height={15} className='mr-2 inline' fill="#dd6e42" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>  
                    C-1184, Ground Floor, Sushant Lok 1, 
                    Gurugram - 122002, Haryana, India
                    </li>
                    <li>
                    <svg width={15} height={15} className='mr-2 inline' fill="#dd6e42" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>  
                      
                    10 Anson Road, #22-15 International Plaza, 
                    Singapore 079903</li>
                    <li>
                    <svg width={15} height={15} className='mr-2 inline' fill="#dd6e42" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>  
                      
                    Horburgstrasse, Basel 4057, 
                    Switzerland</li>
                    <li>
                    <svg width={15} height={15} className='mr-2 inline' fill="#dd6e42" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>  
                      
                    Rainstraße 1, 79539 Lörrach, 
                    Baden Württemberg, Germany</li>
                   
                </ul>
              </div>
           </div> 
           <div className=''>
              <div className='menu lg:py-0 py-2'>
                <h4 className='font-semibold text-lg uppercase text-[#dd6e42]' onClick={() => toggleAccordion('product')}>Product</h4>
                <ul className={`${isAccordionOpen.product ? 'flex' : 'hidden'} lg:flex flex-col gap-5 mt-5 text-gray-300 text-sm`}>
                    <li><Link href='/'> Expedify DataHub </Link></li>
                    <li><Link href='/expedify-engage'>Expedify Engage </Link></li>
                    <li><Link href='/'>Expedify LeadEngage </Link></li>
                </ul>
              </div>
              <div  className='lg:mt-10 lg:py-0 py-2'>
                <h4 className='font-semibold text-lg uppercase text-[#dd6e42]'  onClick={() => toggleAccordion('company')}>Company</h4>
                <ul className={`${isAccordionOpen.company ? 'flex' : 'hidden'} lg:flex flex-col gap-5 mt-5 text-gray-300 text-sm`}>
                    <li><Link href='/'> Blogs </Link></li>
                    <li><Link href='/'>Careers </Link></li>
                    <li><Link href='/'>Our Team </Link></li>
                    <li><Link href='/'>Our Portfolio</Link></li>
                    <li><Link href='/'>Contact Us </Link></li>
                </ul>
              </div>
           </div>
           <div className=''>
              <div className='menu lg:py-0 py-2'>
                <h4 className='font-semibold text-lg uppercase text-[#dd6e42]' onClick={() => toggleAccordion('service')}>Services</h4>
                <ul className={`${isAccordionOpen.service ? 'flex' : 'hidden'} lg:flex flex-col gap-5 mt-5 text-gray-300 text-sm`}>
                    <li><Link href='/'> Paid Advertising</Link></li>
                    <li><Link href='/'>Development </Link></li>
                    <li><Link href='/'>eCommerce </Link></li>
                    <li><Link href="/">Marketing Analytics</Link></li>
                    <li><Link href="/">Marketing Automation</Link></li>
                    <li><Link href="/">CRM</Link> </li>
                </ul>
              </div>
              <div  className='lg:mt-10 lg:py-0 py-2'>
                <h4 className='font-semibold text-lg uppercase text-[#dd6e42]' onClick={() => toggleAccordion('getstart')} >Get Started</h4>
                <ul className={`${isAccordionOpen.getstart ? 'flex' : 'hidden'} lg:flex flex-col gap-5 mt-5 text-gray-300 text-sm`}>
                
                    <li><Link href='/'> 6C Analytics </Link></li>
                    <li><Link href='/'>Book Demo </Link></li>
                    <li><Link href='/'>Book Discovery </Link></li>
                    
                </ul>
              </div>
           </div>
           <div className=''>
              <div className='lg:py-0 py-2'>
                <h4 className='font-semibold text-lg uppercase text-[#dd6e42]' onClick={() => toggleAccordion('links')}>Quick Links</h4>
                <ul className={`${isAccordionOpen.links ? 'flex' : 'hidden'} lg:flex flex-col gap-5 mt-5 text-gray-300 text-sm`}>
                    <li><Link href='/'> Get Quote</Link></li>
                    <li><Link href='/'>Privacy Policy </Link></li>
                    <li><Link href='/'>Terms and Conditions</Link></li>
                    <li><Link href="/">FAQ</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    
                </ul>
              </div>
              <SocialLinks />
           </div>
        </div>
        <div className="flex text-center justify-center items-center border-t-2 border-black-500 pt-5">
            <p className='lg:text-base text-sm'>Expedify is a registered trademark of Brainpan Digital Pvt. Ltd. | &copy; {new Date().getFullYear()}</p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
