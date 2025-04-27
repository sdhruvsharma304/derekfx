'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our trading signals? We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                We're always happy to hear from our members and potential traders. Reach out with any questions about our services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent bg-opacity-20 p-3 rounded-full mr-4">
                    <i className="fas fa-envelope text-accent"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-300">support@derekfx.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent bg-opacity-20 p-3 rounded-full mr-4">
                    <i className="fab fa-telegram text-accent"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telegram</h3>
                    <p className="text-gray-300">@DEREKFX_Official</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent bg-opacity-20 p-3 rounded-full mr-4">
                    <i className="fas fa-clock text-accent"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Support Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9AM - 6PM EST</p>
                    <p className="text-gray-300">Weekend: 10AM - 2PM EST</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-accent bg-opacity-20 p-3 rounded-full text-accent hover:bg-opacity-30 transition-all">
                    <i className="fab fa-telegram"></i>
                  </a>
                  <a href="#" className="bg-accent bg-opacity-20 p-3 rounded-full text-accent hover:bg-opacity-30 transition-all">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="bg-accent bg-opacity-20 p-3 rounded-full text-accent hover:bg-opacity-30 transition-all">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="bg-accent bg-opacity-20 p-3 rounded-full text-accent hover:bg-opacity-30 transition-all">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {submitSuccess ? (
                  <div className="bg-green-500 bg-opacity-20 border border-green-500 rounded-lg p-4 mb-6">
                    <p className="text-green-400 font-medium">
                      <i className="fas fa-check-circle mr-2"></i>
                      Your message has been sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 focus:outline-none focus:border-accent"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 focus:outline-none focus:border-accent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 focus:outline-none focus:border-accent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 focus:outline-none focus:border-accent"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-highlight bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our trading signals and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">How do I receive the trading signals?</h3>
              <p className="text-gray-300">
                All our trading signals are delivered directly to our private Telegram channels. Once you subscribe, you'll receive an invitation link to join the appropriate channel based on your membership level.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">How many signals will I receive?</h3>
              <p className="text-gray-300">
                The number of signals depends on your subscription plan. Basic members receive 5-7 signals per week, Premium members receive 10-15 signals, and VIP members receive 20+ signals weekly.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">What is your signal success rate?</h3>
              <p className="text-gray-300">
                We maintain an average success rate of 85% across all our signals. We're transparent about our performance and regularly post results and statistics in our channels.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Can I cancel my subscription?</h3>
              <p className="text-gray-300">
                Yes, you can cancel your subscription at any time. Your access will remain active until the end of your current billing period. We don't offer refunds for partial months.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Do you offer a free trial?</h3>
              <p className="text-gray-300">
                We occasionally offer free trial periods for new members. Join our public Telegram channel to be notified when free trials are available.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">What markets do you cover?</h3>
              <p className="text-gray-300">
                We primarily focus on cryptocurrency (Bitcoin, Ethereum, and top altcoins) and major forex pairs. VIP members also receive signals for commodities and select stocks.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="telegram-section text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Trading with Confidence?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of successful traders who rely on DEREKFX signals to navigate the markets.
            </p>
            <Link href="/telegram" className="btn-primary text-xl px-8 py-4">
              Join Our Telegram Channel
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
