'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Dropdown menu items
  const dropdownMenus = {
    home: [
      { label: 'Latest Signals', href: '/#signals' },
      { label: 'Features', href: '/#features' },
      { label: 'Testimonials', href: '/#testimonials' },
    ],
    services: [
      { label: 'Crypto Signals', href: '/services#crypto' },
      { label: 'Forex Signals', href: '/services#forex' },
      { label: 'VIP Membership', href: '/services#vip' },
      { label: 'One-on-One Coaching', href: '/services#coaching' },
    ],
    about: [
      { label: 'Our Story', href: '/about#story' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Our Mission', href: '/about#mission' },
    ],
    contact: [
      { label: 'Support', href: '/contact#support' },
      { label: 'FAQ', href: '/contact#faq' },
      { label: 'Partnerships', href: '/contact#partnerships' },
    ],
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-90 backdrop-blur-md bg-primary border-b border-[rgba(255,255,255,0.1)] px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="DEREKFX Logo" 
            width={50} 
            height={50} 
            className="mr-2"
          />
          <span className="text-xl font-bold text-white">DEREKFX</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div 
            className="relative group"
            onMouseEnter={() => handleDropdownHover('home')}
            onMouseLeave={handleDropdownLeave}
          >
            <Link 
              href="/" 
              className={`text-white hover:text-gray-200 transition-transform transform ${activeDropdown === 'home' ? '-translate-y-1' : ''} hover:-translate-y-1 duration-300`}
            >
              Home
            </Link>
            {activeDropdown === 'home' && (
              <div className="absolute left-0 mt-2 w-48 bg-primary bg-opacity-95 backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-lg shadow-xl py-2 z-50 animate-fadeIn">
                {dropdownMenus.home.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white hover:bg-[rgba(255,255,255,0.1)] transition-all"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div 
            className="relative group"
            onMouseEnter={() => handleDropdownHover('services')}
            onMouseLeave={handleDropdownLeave}
          >
            <Link 
              href="/services" 
              className={`text-white hover:text-gray-200 transition-transform transform ${activeDropdown === 'services' ? '-translate-y-1' : ''} hover:-translate-y-1 duration-300`}
            >
              Services
            </Link>
            {activeDropdown === 'services' && (
              <div className="absolute left-0 mt-2 w-48 bg-primary bg-opacity-95 backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-lg shadow-xl py-2 z-50 animate-fadeIn">
                {dropdownMenus.services.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white hover:bg-[rgba(255,255,255,0.1)] transition-all"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div 
            className="relative group"
            onMouseEnter={() => handleDropdownHover('about')}
            onMouseLeave={handleDropdownLeave}
          >
            <Link 
              href="/about" 
              className={`text-white hover:text-gray-200 transition-transform transform ${activeDropdown === 'about' ? '-translate-y-1' : ''} hover:-translate-y-1 duration-300`}
            >
              About
            </Link>
            {activeDropdown === 'about' && (
              <div className="absolute left-0 mt-2 w-48 bg-primary bg-opacity-95 backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-lg shadow-xl py-2 z-50 animate-fadeIn">
                {dropdownMenus.about.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white hover:bg-[rgba(255,255,255,0.1)] transition-all"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div 
            className="relative group"
            onMouseEnter={() => handleDropdownHover('contact')}
            onMouseLeave={handleDropdownLeave}
          >
            <Link 
              href="/contact" 
              className={`text-white hover:text-gray-200 transition-transform transform ${activeDropdown === 'contact' ? '-translate-y-1' : ''} hover:-translate-y-1 duration-300`}
            >
              Contact
            </Link>
            {activeDropdown === 'contact' && (
              <div className="absolute left-0 mt-2 w-48 bg-primary bg-opacity-95 backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-lg shadow-xl py-2 z-50 animate-fadeIn">
                {dropdownMenus.contact.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white hover:bg-[rgba(255,255,255,0.1)] transition-all"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/telegram" 
            className="bg-accent hover:bg-highlight2 text-white px-4 py-2 rounded-md transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300"
          >
            Join Telegram
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary bg-opacity-95 py-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Link 
              href="/" 
              className="text-xl font-medium text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-xl font-medium text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="text-xl font-medium text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-xl font-medium text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/telegram" 
              className="bg-accent hover:bg-highlight2 text-white px-4 py-2 rounded-md text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Telegram
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
