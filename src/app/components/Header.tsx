'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >

        {title}
        <svg
          className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <ul
          className="absolute top-10 left-0 mt-2 w-48 bg-white border rounded shadow-lg"
        >
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <span className="block px-4 py-2 hover:bg-gray-100">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div>
              <Link href="/">
                <span>
                  <Image src="/logo.webp" width={130} height={50} alt="Expedify" />
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center">
              <ul className="flex gap-10">
                
                <li className="dropdown">
                      <div className="dropdown-trigger">
                      Product <i className="fa-solid fa-angle-down"></i>
                      </div>
                      <div className="dropdown-content">
                        <Link className="px-2 py-4" href="/">Product 1</Link>
                        
                        <Link className="px-2 py-4" href="/">Product 2</Link>
                        
                      </div>
                </li>
                <li className="dropdown">
                      <div className="dropdown-trigger">
                      Services <i className="fa-solid fa-angle-down"></i>
                      </div>
                      <div className="dropdown-content">
                        <Link className="px-2 py-4" href="/">Service 1</Link>
                        
                        <Link className="px-2 py-4" href="/">Service 2</Link>
                        <Link className="px-2 py-4" href="/">Service 3</Link>
                        <Link className="px-2 py-4" href="/">Service 4</Link>
                      </div>
                </li>
                <li>
                  <Link href="/quote">
                    <span>Get a quote</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources">
                    <span>Resources</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <Link href="/" className="hidden md:inline-block btn bg-[#EE785A] text-white py-2 px-5 rounded-lg">
              Get Started
            </Link>
            <button
              className="md:hidden flex items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <nav className="md:hidden absolute bg-white w-full z-10 left-0 p-4 pt-0">
              <ul className="flex flex-col gap-4 mt-4">
                <DropdownMenu title="Product" items={productItems} />
                <DropdownMenu title="Services" items={serviceItems} />
                <li>
                  <Link href="/quote">
                    <span>Get a quote</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources">
                    <span>Resources</span>
                  </Link>
                </li>
                <li>
                  <Link href="/" className="btn bg-[#EE785A] text-white py-2 px-5 rounded-lg">
                    Get Started
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
      <style jsx>{`
        header {
          box-shadow: 0 2px 8px rgba(120, 158, 174, 0.15);
        }
      `}</style>
    </>
  );
};

export default Header;
