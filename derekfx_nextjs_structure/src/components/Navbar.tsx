'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <nav className="bg-[rgba(26,26,46,0.8)] backdrop-blur-md sticky top-0 z-50 border-b border-[rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="DEREKFX Logo"
                width={50}
                height={50}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-white">DEREKFX</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group" onMouseEnter={() => toggleDropdown('home')} onMouseLeave={() => toggleDropdown('home')}>
              <Link href="/" className="nav-link flex items-center">
                Home
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {activeDropdown === 'home' && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#2a2a4a] ring-1 ring-black ring-opacity-5 animate-fadeIn">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link href="/#features" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a6a] hover:text-white">
                      Features
                    </Link>
                    <Link href="/#testimonials" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a6a] hover:text-white">
                      Testimonials
                    </Link>
                    <Link href="/#faq" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a6a] hover:text-white">
                      FAQ
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative group" onMouseEnter={() => toggleDropdown('services')} onMouseLeave={() => toggleDropdown('services')}>
              <Link href="/services" className="nav-link flex items-center">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {activeDropdown === 'services' && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#2a2a4a] ring-1 ring-black ring-opacity-5 animate-fadeIn">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link href="/services#basic" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a6a] hover:text-white">
                      Basic Plan
                    </Link>
                    <Link href="/services#premium" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a6a] hover:text-white">
                      Premium Plan
                    </Link>
                    <Link href="/services#vip" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3a6a] hover:text-white">
                      VIP Plan
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/about" className="nav-link">
              About
            </Link>
            
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            
            <Link href="/telegram" className="btn-primary">
              Join Telegram
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-gray-700">
            Home
          </Link>
          <Link href="/services" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white">
            Services
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white">
            Contact
          </Link>
          <Link href="/telegram" className="block px-3 py-2 rounded-md text-white font-medium bg-[var(--accent)]">
            Join Telegram
          </Link>
        </div>
      </div>
    </nav>
  );
}
