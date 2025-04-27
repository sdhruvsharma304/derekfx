'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import VideoSection from '@/components/VideoSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section pt-20">
        <div className="grid-pattern"></div>
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="hero-content md:w-1/2 animate-fadeIn" style={{animationDelay: '0.2s'}}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Master the Markets with <span className="text-[var(--accent)]">DEREKFX</span> Signals
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300">
                Get exclusive access to premium trading signals and market insights that give you the edge in cryptocurrency and forex markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/telegram" className="btn-primary text-center">
                  Join Telegram Channel
                </Link>
                <Link href="/services" className="btn-secondary text-center">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center animate-fadeIn" style={{animationDelay: '0.4s'}}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 glow-effect">
                <Image 
                  src="/logo.png" 
                  alt="DEREKFX Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="py-16 bg-[var(--primary-bg)] bg-opacity-80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See Our Signals in Action</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Watch how our precision trading signals can help you make informed decisions and maximize your profits.
            </p>
          </div>
          <VideoSection />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-[var(--highlight-1)] bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DEREKFX</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our trading signals are backed by expert analysis and proven strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card animate-fadeIn" style={{animationDelay: '0.2s'}}>
              <div className="text-[var(--accent)] text-4xl mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Precision Signals</h3>
              <p className="text-gray-300">
                Receive accurate entry and exit points with detailed risk management guidance.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="card animate-fadeIn" style={{animationDelay: '0.3s'}}>
              <div className="text-[var(--accent)] text-4xl mb-4">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Alerts</h3>
              <p className="text-gray-300">
                Get instant notifications for market opportunities directly to your device.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="card animate-fadeIn" style={{animationDelay: '0.4s'}}>
              <div className="text-[var(--accent)] text-4xl mb-4">
                <i className="fas fa-user-shield"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Analysis</h3>
              <p className="text-gray-300">
                Benefit from our team of professional traders with years of market experience.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="card animate-fadeIn" style={{animationDelay: '0.5s'}}>
              <div className="text-[var(--accent)] text-4xl mb-4">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Educational Content</h3>
              <p className="text-gray-300">
                Learn trading strategies and market analysis techniques from our experts.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="card animate-fadeIn" style={{animationDelay: '0.6s'}}>
              <div className="text-[var(--accent)] text-4xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Community Support</h3>
              <p className="text-gray-300">
                Join a community of like-minded traders to share insights and strategies.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="card animate-fadeIn" style={{animationDelay: '0.7s'}}>
              <div className="text-[var(--accent)] text-4xl mb-4">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Access</h3>
              <p className="text-gray-300">
                Access signals and analysis on-the-go with our mobile-friendly platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Telegram Promotion Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="telegram-section">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Telegram Channel</h2>
                <p className="text-lg mb-6">
                  Get instant access to premium trading signals, market analysis, and a community of successful traders.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-white bg-opacity-20 rounded-full p-3">
                    <i className="fab fa-telegram-plane text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Exclusive Signals</h4>
                    <p className="text-sm">Receive signals before anyone else</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-white bg-opacity-20 rounded-full p-3">
                    <i className="fas fa-lock text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Premium Content</h4>
                    <p className="text-sm">Access expert analysis and insights</p>
                  </div>
                </div>
                <Link href="/telegram" className="btn-primary inline-block">
                  Subscribe Now
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-white bg-opacity-10 rounded-xl p-6 max-w-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#0088cc] rounded-full flex items-center justify-center mr-4">
                      <i className="fab fa-telegram-plane text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">DEREKFX Signals</h4>
                      <p className="text-sm text-gray-300">Premium Trading Channel</p>
                    </div>
                  </div>
                  <div className="border-t border-b border-white border-opacity-10 py-4 my-4">
                    <p className="text-sm">
                      🚀 Latest signal: BTC/USD - Buy @ $62,450<br/>
                      Target: $65,800 | Stop Loss: $61,200<br/>
                      <span className="text-green-400">+5.2% profit on last signal!</span>
                    </p>
                  </div>
                  <div className="text-center">
                    <Link href="/telegram" className="btn-primary w-full inline-block">
                      Join Channel
                    </Link>
                    <p className="text-xs mt-2 text-gray-400">
                      Already 10,000+ successful traders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[var(--primary-bg)] border-t border-[rgba(255,255,255,0.1)] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <Image 
                  src="/logo.png" 
                  alt="DEREKFX Logo" 
                  width={40} 
                  height={40} 
                  className="mr-2"
                />
                <span className="text-xl font-bold">DEREKFX</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Premium trading signals and market analysis for cryptocurrency and forex traders.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-[var(--accent)]">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[var(--accent)]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[var(--accent)]">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[var(--accent)]">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-[var(--accent)]">Home</Link></li>
                  <li><Link href="/services" className="text-gray-400 hover:text-[var(--accent)]">Services</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-[var(--accent)]">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-[var(--accent)]">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><Link href="/services" className="text-gray-400 hover:text-[var(--accent)]">Crypto Signals</Link></li>
                  <li><Link href="/services" className="text-gray-400 hover:text-[var(--accent)]">Forex Signals</Link></li>
                  <li><Link href="/services" className="text-gray-400 hover:text-[var(--accent)]">VIP Membership</Link></li>
                  <li><Link href="/services" className="text-gray-400 hover:text-[var(--accent)]">1-on-1 Coaching</Link></li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400">
                    <i className="fas fa-envelope mr-2 text-[var(--accent)]"></i>
                    support@derekfx.com
                  </li>
                  <li className="flex items-center text-gray-400">
                    <i className="fab fa-telegram mr-2 text-[var(--accent)]"></i>
                    @DEREKFX_Official
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[rgba(255,255,255,0.1)] mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} DEREKFX. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/terms" className="hover:text-[var(--accent)]">Terms of Service</Link> | 
              <Link href="/privacy" className="hover:text-[var(--accent)] ml-2">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
