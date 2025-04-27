'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Trading Signal Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of premium trading signal packages designed to match your trading style and goals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Service Packages */}
      <section className="py-16 bg-highlight bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="card">
              <div className="text-center mb-6">
                <div className="inline-block p-4 rounded-full bg-highlight bg-opacity-30 mb-4">
                  <i className="fas fa-signal text-3xl text-accent"></i>
                </div>
                <h3 className="text-2xl font-bold">Basic Signals</h3>
                <p className="text-gray-400 mt-2">Perfect for beginners</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>5-7 crypto signals per week</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Entry & exit points</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Basic risk management</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Telegram group access</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <i className="fas fa-times mt-1 mr-2"></i>
                  <span>Advanced analysis</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <i className="fas fa-times mt-1 mr-2"></i>
                  <span>1-on-1 support</span>
                </li>
              </ul>
              
              <Link href="/telegram" className="btn-secondary w-full text-center block">
                Subscribe Now
              </Link>
            </div>
            
            {/* Premium Package */}
            <div className="card relative border-2 border-accent transform scale-105">
              <div className="absolute -top-4 left-0 right-0 text-center">
                <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-6 mt-4">
                <div className="inline-block p-4 rounded-full bg-accent bg-opacity-30 mb-4">
                  <i className="fas fa-chart-line text-3xl text-accent"></i>
                </div>
                <h3 className="text-2xl font-bold">Premium Signals</h3>
                <p className="text-gray-400 mt-2">For serious traders</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>10-15 crypto & forex signals per week</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Detailed entry & exit strategies</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Advanced risk management</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>VIP Telegram group access</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Weekly market analysis</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <i className="fas fa-times mt-1 mr-2"></i>
                  <span>1-on-1 support</span>
                </li>
              </ul>
              
              <Link href="/telegram" className="btn-primary w-full text-center block">
                Subscribe Now
              </Link>
            </div>
            
            {/* VIP Package */}
            <div className="card">
              <div className="text-center mb-6">
                <div className="inline-block p-4 rounded-full bg-highlight2 bg-opacity-30 mb-4">
                  <i className="fas fa-crown text-3xl text-highlight2"></i>
                </div>
                <h3 className="text-2xl font-bold">VIP Signals</h3>
                <p className="text-gray-400 mt-2">Elite trading experience</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>20+ crypto & forex signals per week</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Priority signals delivery</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Expert risk management</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Exclusive VIP Telegram access</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Daily market analysis & reports</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>24/7 1-on-1 support</span>
                </li>
              </ul>
              
              <Link href="/telegram" className="btn-secondary w-full text-center block">
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Signals Work</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We provide clear, actionable trading signals to help you make profitable trades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-accent bg-opacity-20 mb-4">
                <i className="fas fa-search text-3xl text-accent"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Market Analysis</h3>
              <p className="text-gray-400">
                Our experts analyze market conditions using technical and fundamental analysis.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-accent bg-opacity-20 mb-4">
                <i className="fas fa-chart-bar text-3xl text-accent"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Signal Generation</h3>
              <p className="text-gray-400">
                We identify high-probability trading opportunities with clear entry/exit points.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-accent bg-opacity-20 mb-4">
                <i className="fas fa-paper-plane text-3xl text-accent"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Delivery</h3>
              <p className="text-gray-400">
                Signals are sent directly to your device via our Telegram channel.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-accent bg-opacity-20 mb-4">
                <i className="fas fa-chart-line text-3xl text-accent"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Trade & Profit</h3>
              <p className="text-gray-400">
                Execute trades based on our signals and track your performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="telegram-section text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Trading?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join DEREKFX today and get access to premium trading signals that can help you achieve your financial goals.
            </p>
            <Link href="/telegram" className="btn-primary text-xl px-8 py-4">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
