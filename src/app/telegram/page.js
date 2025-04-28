'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PaymentGateway from '../../components/PaymentGateway';

export default function Telegram() {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const handleSubscribeClick = () => {
    setShowPaymentGateway(true);
  };
  
  const handlePaymentSuccess = () => {
    setShowPaymentGateway(false);
    setPaymentSuccess(true);
    
    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setPaymentSuccess(false);
    }, 5000);
  };
  
  const handlePaymentCancel = () => {
    setShowPaymentGateway(false);
  };
  
  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Telegram Channel</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get exclusive access to premium trading signals and market insights directly on Telegram.
            </p>
            
            {paymentSuccess && (
              <div className="mt-6 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-green-400 font-medium">
                  <i className="fas fa-check-circle mr-2"></i>
                  Payment successful! You will receive an email with instructions to join our Telegram channel shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Telegram Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Why Join Our Telegram Channel?</h2>
              <p className="text-gray-300 mb-6">
                Our Telegram channel is the central hub for all DEREKFX trading signals and market analysis. Join thousands of successful traders who receive real-time alerts and expert insights.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-accent bg-opacity-20 p-3 rounded-full mr-4 text-accent">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Instant Notifications</h3>
                    <p className="text-gray-300">Receive signals in real-time, never miss a trading opportunity</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent bg-opacity-20 p-3 rounded-full mr-4 text-accent">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Detailed Analysis</h3>
                    <p className="text-gray-300">Get comprehensive market analysis with each signal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent bg-opacity-20 p-3 rounded-full mr-4 text-accent">
                    <i className="fas fa-users"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Community Support</h3>
                    <p className="text-gray-300">Connect with like-minded traders and our expert team</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent bg-opacity-20 p-3 rounded-full mr-4 text-accent">
                    <i className="fas fa-lock"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Exclusive Content</h3>
                    <p className="text-gray-300">Access educational resources and market insights</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-[#212232] rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                {/* Telegram Header */}
                <div className="bg-[#0088cc] p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                      <i className="fab fa-telegram-plane text-[#0088cc] text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">DEREKFX Premium Signals</h3>
                      <p className="text-sm text-white opacity-80">10,000+ members</p>
                    </div>
                  </div>
                </div>
                
                {/* Telegram Content */}
                <div className="p-4 space-y-4">
                  {/* Message 1 */}
                  <div className="bg-[#182533] p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="font-bold text-white">DEREKFX Admin</span>
                      <span className="text-xs text-gray-400">10:30 AM</span>
                    </div>
                    <p className="text-white">
                      🚀 <span className="font-bold">NEW SIGNAL ALERT</span> 🚀<br/>
                      <br/>
                      <span className="font-bold">BTC/USD - BUY</span><br/>
                      Entry: $62,450 - $62,650<br/>
                      Target 1: $63,800 ✅<br/>
                      Target 2: $65,200 🔄<br/>
                      Stop Loss: $61,200<br/>
                      <br/>
                      Risk: 1-2% of portfolio<br/>
                      Timeframe: 1-3 days<br/>
                      <br/>
                      Analysis: Strong support at $62K with increasing volume. RSI showing bullish divergence.
                    </p>
                  </div>
                  
                  {/* Message 2 */}
                  <div className="bg-[#182533] p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="font-bold text-white">DEREKFX Admin</span>
                      <span className="text-xs text-gray-400">11:45 AM</span>
                    </div>
                    <p className="text-white">
                      📊 <span className="font-bold">MARKET UPDATE</span> 📊<br/>
                      <br/>
                      Bitcoin showing strong momentum above $62K support level. ETH following with 3% gains.<br/>
                      <br/>
                      Key levels to watch:<br/>
                      - BTC: $63.5K resistance<br/>
                      - ETH: $3,200 support<br/>
                      - SOL: Breaking out above $150<br/>
                      <br/>
                      Full analysis in VIP channel.
                    </p>
                  </div>
                  
                  {/* Message 3 */}
                  <div className="bg-[#182533] p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="font-bold text-white">DEREKFX Admin</span>
                      <span className="text-xs text-gray-400">2:15 PM</span>
                    </div>
                    <p className="text-white">
                      🎯 <span className="font-bold">TARGET REACHED</span> 🎯<br/>
                      <br/>
                      BTC/USD first target hit at $63,800!<br/>
                      +2.2% profit secured ✅<br/>
                      <br/>
                      Move stop loss to entry for risk-free trade.<br/>
                      Hold remaining position for Target 2.
                    </p>
                  </div>
                </div>
                
                {/* Telegram Footer */}
                <div className="bg-[#182533] p-4 border-t border-gray-700">
                  <div className="flex justify-center">
                    <button className="bg-[#0088cc] text-white py-2 px-6 rounded-full font-bold hover:bg-[#0099dd] transition-all">
                      Join Channel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscription Plans */}
      <section className="py-16 bg-highlight bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Membership Plan</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Select the plan that best fits your trading needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div 
              className={`card cursor-pointer transition-all ${selectedPlan === 'basic' ? 'border-2 border-accent' : 'border border-[rgba(255,255,255,0.1)]'}`}
              onClick={() => setSelectedPlan('basic')}
            >
              <div className="text-center mb-6">
                <div className={`inline-block p-4 rounded-full mb-4 ${selectedPlan === 'basic' ? 'bg-accent bg-opacity-30' : 'bg-[rgba(255,255,255,0.05)]'}`}>
                  <i className={`fas fa-signal text-3xl ${selectedPlan === 'basic' ? 'text-accent' : 'text-gray-300'}`}></i>
                </div>
                <h3 className="text-2xl font-bold">Basic</h3>
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
              
              <div className="text-center">
                <input 
                  type="radio" 
                  id="basic" 
                  name="plan" 
                  checked={selectedPlan === 'basic'} 
                  onChange={() => setSelectedPlan('basic')} 
                  className="mr-2"
                />
                <label htmlFor="basic" className="font-medium">Select Basic Plan</label>
              </div>
            </div>
            
            {/* Premium Plan */}
            <div 
              className={`card cursor-pointer transition-all relative ${selectedPlan === 'premium' ? 'border-2 border-accent' : 'border border-[rgba(255,255,255,0.1)]'}`}
              onClick={() => setSelectedPlan('premium')}
            >
              <div className="absolute -top-4 left-0 right-0 text-center">
                <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-6 mt-4">
                <div className={`inline-block p-4 rounded-full mb-4 ${selectedPlan === 'premium' ? 'bg-accent bg-opacity-30' : 'bg-[rgba(255,255,255,0.05)]'}`}>
                  <i className={`fas fa-chart-line text-3xl ${selectedPlan === 'premium' ? 'text-accent' : 'text-gray-300'}`}></i>
                </div>
                <h3 className="text-2xl font-bold">Premium</h3>
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
              
              <div className="text-center">
                <input 
                  type="radio" 
                  id="premium" 
                  name="plan" 
                  checked={selectedPlan === 'premium'} 
                  onChange={() => setSelectedPlan('premium')} 
                  className="mr-2"
                />
                <label htmlFor="premium" className="font-medium">Select Premium Plan</label>
              </div>
            </div>
            
            {/* VIP Plan */}
            <div 
              className={`card cursor-pointer transition-all ${selectedPlan === 'vip' ? 'border-2 border-accent' : 'border border-[rgba(255,255,255,0.1)]'}`}
              onClick={() => setSelectedPlan('vip')}
            >
              <div className="text-center mb-6">
                <div className={`inline-block p-4 rounded-full mb-4 ${selectedPlan === 'vip' ? 'bg-highlight2 bg-opacity-30' : 'bg-[rgba(255,255,255,0.05)]'}`}>
                  <i className={`fas fa-crown text-3xl ${selectedPlan === 'vip' ? 'text-highlight2' : 'text-gray-300'}`}></i>
                </div>
                <h3 className="text-2xl font-bold">VIP</h3>
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
              
              <div className="text-center">
                <input 
                  type="radio" 
                  id="vip" 
                  name="plan" 
                  checked={selectedPlan === 'vip'} 
                  onChange={() => setSelectedPlan('vip')} 
                  className="mr-2"
                />
                <label htmlFor="vip" className="font-medium">Select VIP Plan</label>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={handleSubscribeClick}
              className="btn-primary text-xl px-8 py-4"
            >
              Subscribe Now
            </button>
            <p className="text-sm text-gray-400 mt-4">
              <i className="fas fa-lock mr-1"></i> Secure payment processing. Cancel anytime.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our Telegram channel and subscription plans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">How do I join after subscribing?</h3>
              <p className="text-gray-300">
                After completing your subscription, you'll receive an email with instructions and a private invitation link to join our Telegram channel. Simply click the link and follow the instructions.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Can I access previous signals?</h3>
              <p className="text-gray-300">
                Yes, once you join our Telegram channel, you'll have access to all previous signals and analysis posted in the channel, allowing you to review our track record.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">How often are signals sent?</h3>
              <p className="text-gray-300">
                The frequency depends on your subscription plan. Basic members receive 5-7 signals per week, Premium members receive 10-15 signals, and VIP members receive 20+ signals weekly.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Can I upgrade my plan later?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade your subscription plan at any time. The price difference will be prorated based on the remaining time in your current subscription.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-highlight bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied traders who have improved their trading with our signals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">John D.</h4>
                  <p className="text-sm text-gray-400">Premium Member</p>
                </div>
              </div>
              <p className="text-gray-300">
                "DEREKFX signals have completely transformed my trading. I've seen a 40% increase in my portfolio in just 3 months. The analysis is spot-on and the risk management advice is invaluable."
              </p>
              <div className="mt-4 text-accent">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah M.</h4>
                  <p className="text-sm text-gray-400">VIP Member</p>
                </div>
              </div>
              <p className="text-gray-300">
                "As a busy professional, I don't have time to analyze markets all day. DEREKFX signals give me the confidence to trade part-time while still achieving great results. The VIP package is worth every penny!"
              </p>
              <div className="mt-4 text-accent">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">RK</span>
                </div>
                <div>
                  <h4 className="font-bold">Robert K.</h4>
                  <p className="text-sm text-gray-400">Basic Member</p>
                </div>
              </div>
              <p className="text-gray-300">
                "I started with the Basic package as a beginner trader and was blown away by the quality. The signals are clear and easy to follow, and the community is incredibly supportive. I'm upgrading to Premium next month!"
              </p>
              <div className="mt-4 text-accent">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Payment Gateway */}
      {showPaymentGateway && (
        <PaymentGateway 
          selectedPlan={selectedPlan}
          onSuccess={handlePaymentSuccess}
          onCancel={handlePaymentCancel}
        />
      )}
    </main>
  );
}
