'use client';

import Navbar from '../../components/Navbar';
import PaymentGateway from '../../components/PaymentGateway';
import Link from 'next/link';

export default function Services() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our <span className="text-[var(--accent)]">Trading Signal</span> Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan that suits your trading needs and goals.
          </p>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card p-8" id="basic">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Basic Plan</h2>
                <p className="text-gray-400">Perfect for beginners</p>
                <div className="text-3xl font-bold text-[var(--accent)] my-4">$29<span className="text-sm text-gray-400">/month</span></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3-5 trading signals per day</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic market analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Telegram community access</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Email support</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <svg className="h-6 w-6 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Priority signals</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <svg className="h-6 w-6 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Weekly strategy calls</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <svg className="h-6 w-6 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>1-on-1 coaching</span>
                </li>
              </ul>
              
              <Link href="/telegram" className="btn-primary block text-center">
                Get Started
              </Link>
            </div>
            
            <div className="card p-8 border-[var(--accent)]" id="premium">
              <div className="absolute top-0 right-0 bg-[var(--accent)] text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Premium Plan</h2>
                <p className="text-gray-400">For serious traders</p>
                <div className="text-3xl font-bold text-[var(--accent)] my-4">$79<span className="text-sm text-gray-400">/month</span></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All Basic Plan features</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>5-8 trading signals per day</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority signals (30 min early)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Weekly strategy calls</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Risk management advice</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <svg className="h-6 w-6 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>1-on-1 coaching</span>
                </li>
              </ul>
              
              <Link href="/telegram" className="btn-primary block text-center">
                Get Started
              </Link>
            </div>
            
            <div className="card p-8" id="vip">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">VIP Plan</h2>
                <p className="text-gray-400">Professional level</p>
                <div className="text-3xl font-bold text-[var(--accent)] my-4">$199<span className="text-sm text-gray-400">/month</span></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All Premium Plan features</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>10+ trading signals per day</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exclusive VIP signals</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1-on-1 coaching (2 hours/month)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom trading strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Portfolio review and advice</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct phone support</span>
                </li>
              </ul>
              
              <Link href="/telegram" className="btn-primary block text-center">
                Get Started
              </Link>
            </div>
          </div>
          
          <div className="card p-8 mb-16" id="custom">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Need a Custom Solution?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                We offer tailored trading signal packages for institutional investors, trading groups, and high-net-worth individuals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Custom Features Available:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Market-specific signal packages</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>API integration for automated trading</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>White-label solutions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[rgba(255,255,255,0.03)] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Contact Us for a Custom Quote</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input type="email" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)] h-32"></textarea>
                  </div>
                  <button type="button" className="btn-primary w-full">
                    Request Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div id="education" className="card p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Trading Education</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Enhance your trading skills with our educational resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[rgba(255,255,255,0.03)] p-6 rounded-lg">
                <div className="text-[var(--accent)] text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Trading Guides</h3>
                <p className="text-gray-300 text-center mb-4">
                  Comprehensive guides on various trading strategies and market analysis techniques.
                </p>
                <button className="btn-secondary w-full">
                  Learn More
                </button>
              </div>
              
              <div className="bg-[rgba(255,255,255,0.03)] p-6 rounded-lg">
                <div className="text-[var(--accent)] text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Video Courses</h3>
                <p className="text-gray-300 text-center mb-4">
                  In-depth video courses taught by professional traders with years of experience.
                </p>
                <button className="btn-secondary w-full">
                  Browse Courses
                </button>
              </div>
              
              <div className="bg-[rgba(255,255,255,0.03)] p-6 rounded-lg">
                <div className="text-[var(--accent)] text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Live Webinars</h3>
                <p className="text-gray-300 text-center mb-4">
                  Weekly live webinars covering market analysis, trading strategies, and Q&A sessions.
                </p>
                <button className="btn-secondary w-full">
                  Join Next Webinar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Payment Gateway */}
      <section className="py-16 bg-[rgba(26,26,46,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Subscribe?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your plan and payment method below to get started.
            </p>
          </div>
          
          <PaymentGateway />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#1a1a2e] border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 DEREKFX. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
