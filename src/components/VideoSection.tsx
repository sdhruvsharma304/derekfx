'use client';

import { useState } from 'react';

export default function VideoSection() {
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/dQw4w9WgXcQ');

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Expert Trading Signals</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how our professional trading signals can help you maximize your profits and minimize risks.
          </p>
        </div>
        
        <div className="video-container glow-effect">
          <iframe 
            src={videoUrl}
            title="DEREKFX Trading Signals" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center p-6">
            <div className="text-[var(--accent)] text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Accurate Signals</h3>
            <p className="text-gray-300">Our signals have a proven track record with over 85% accuracy rate.</p>
          </div>
          
          <div className="card text-center p-6">
            <div className="text-[var(--accent)] text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Real-Time Alerts</h3>
            <p className="text-gray-300">Get instant notifications for market opportunities 24/7.</p>
          </div>
          
          <div className="card text-center p-6">
            <div className="text-[var(--accent)] text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Community</h3>
            <p className="text-gray-300">Join thousands of traders benefiting from our signals daily.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
