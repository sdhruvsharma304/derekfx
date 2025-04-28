'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About DEREKFX</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about our mission to help traders succeed in the cryptocurrency and forex markets.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="DEREKFX Logo" 
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                DEREKFX was founded in 2020 by a team of professional traders with over 20 years of combined experience in cryptocurrency and forex markets. Our founder, Derek, recognized a gap in the market for reliable, transparent trading signals that actually deliver results.
              </p>
              <p className="text-gray-300 mb-4">
                After years of trading and mentoring others, Derek assembled a team of expert analysts and developed a proprietary system for identifying high-probability trading opportunities. What started as a small Telegram channel has grown into a global community of successful traders.
              </p>
              <p className="text-gray-300">
                Today, DEREKFX is trusted by thousands of traders worldwide, from beginners to professionals. Our mission remains the same: to provide accurate, timely trading signals that help our members achieve consistent profits in volatile markets.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-highlight bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're committed to empowering traders with the tools, knowledge, and signals they need to succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-accent text-4xl mb-4">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Accuracy</h3>
              <p className="text-gray-300">
                We prioritize quality over quantity, ensuring each signal has a high probability of success. Our team conducts rigorous analysis before sending any signal to our members.
              </p>
            </div>
            
            <div className="card">
              <div className="text-accent text-4xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Risk Management</h3>
              <p className="text-gray-300">
                Every signal includes detailed risk management guidance to help protect your capital. We believe proper risk management is the foundation of long-term trading success.
              </p>
            </div>
            
            <div className="card">
              <div className="text-accent text-4xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-300">
                We've built a supportive community where traders can learn, share insights, and grow together. Our team is actively involved in the community, providing guidance and support.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our team of expert analysts and traders work tirelessly to provide you with the best trading signals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="card text-center">
              <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">D</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Derek</h3>
              <p className="text-accent mb-3">Founder & Lead Analyst</p>
              <p className="text-gray-300 text-sm">
                10+ years of trading experience specializing in cryptocurrency markets and technical analysis.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="card text-center">
              <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">A</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Alex</h3>
              <p className="text-accent mb-3">Forex Analyst</p>
              <p className="text-gray-300 text-sm">
                Former institutional trader with 8 years of experience in forex and commodities markets.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="card text-center">
              <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah</h3>
              <p className="text-accent mb-3">Crypto Analyst</p>
              <p className="text-gray-300 text-sm">
                Blockchain expert and trader with deep knowledge of DeFi and emerging crypto projects.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="card text-center">
              <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Michael</h3>
              <p className="text-accent mb-3">Community Manager</p>
              <p className="text-gray-300 text-sm">
                Experienced trader and educator who ensures our community receives top-notch support.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 bg-highlight bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10,000+</div>
              <p className="text-xl text-gray-300">Active Members</p>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">85%</div>
              <p className="text-xl text-gray-300">Signal Accuracy</p>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
              <p className="text-xl text-gray-300">Countries</p>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">3 Years</div>
              <p className="text-xl text-gray-300">Proven Track Record</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="telegram-section text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Trading Community</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Become part of the DEREKFX family and take your trading to the next level with our premium signals.
            </p>
            <Link href="/telegram" className="btn-primary text-xl px-8 py-4">
              Join Telegram Channel
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
