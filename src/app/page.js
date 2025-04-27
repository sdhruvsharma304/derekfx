'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/dQw4w9WgXcQ');
  
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="navbar fixed w-full z-10 px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl">DEREKFX</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="text-white hover:text-purple-300 transition-all duration-300 transform group-hover:-translate-y-1">
                HOME
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible dropdown-menu">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-800">Latest Signals</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-800">Performance</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-800">Testimonials</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-white hover:text-purple-300 transition-all duration-300 transform group-hover:-translate-y-1">
                SERVICES
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible dropdown-menu">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-800">Trading Signals</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-800">Market Analysis</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-800">Education</Link>
              </div>
            </div>
            <Link href="#" className="text-white hover:text-purple-300">ABOUT</Link>
            <Link href="#" className="text-white hover:text-purple-300">CONTACT</Link>
            <Link href="#" className="text-white hover:text-purple-300">TELEGRAM</Link>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section pt-24 pb-12 px-4">
        <div className="container mx-auto pt-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Trading Signals</h1>
              <p className="text-xl mb-6">Join DEREKFX for expert crypto and forex trading signals with proven results.</p>
              <div className="flex space-x-4">
                <a href="#" className="btn-primary px-6 py-3 rounded-lg font-semibold">Join Telegram</a>
                <a href="#" className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition duration-300">Learn More</a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={videoUrl}
                  title="Trading Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose DEREKFX</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 rounded-lg">
              <div className="text-purple-400 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
              <p className="text-gray-300">Consistent profits with transparent performance history and verified results.</p>
            </div>
            <div className="card p-6 rounded-lg">
              <div className="text-purple-400 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Real-Time Alerts</h3>
              <p className="text-gray-300">Instant notifications for market opportunities delivered directly to your device.</p>
            </div>
            <div className="card p-6 rounded-lg">
              <div className="text-purple-400 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Support</h3>
              <p className="text-gray-300">Join our exclusive Telegram group for insights, education, and 24/7 support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Telegram Promotion */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Telegram Channel</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Get exclusive trading signals, market analysis, and educational content delivered directly to your device.</p>
          <a href="#" className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.515 7.144c-.115.54-.42.675-.85.42l-2.35-1.73-1.135 1.095c-.125.125-.23.23-.47.23l.17-2.39 4.35-3.93c.19-.165-.04-.255-.29-.09L8.152 12.47l-2.35-.735c-.51-.16-.52-.51.11-.75l9.19-3.54c.425-.16.81.1.66.805z" />
            </svg>
            Subscribe Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-8 px-4 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">DEREKFX</h3>
              <p className="text-gray-400 max-w-xs">Premium trading signals and market analysis for serious traders.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white">Services</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white">Trading Signals</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white">Market Analysis</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white">Education</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white">VIP Access</Link></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white">Telegram</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white">Twitter</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white">Instagram</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white">Email</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center md:text-left">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} DEREKFX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
