'use client';

import { useState } from 'react';

export default function PaymentGateway() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>('card');

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Choose Your Subscription Plan</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div 
          className={`card p-6 text-center cursor-pointer transition-all duration-300 ${selectedPlan === 'basic' ? 'border-[var(--accent)] shadow-glow' : ''}`}
          onClick={() => handlePlanSelect('basic')}
        >
          <h3 className="text-xl font-bold mb-2">Basic Plan</h3>
          <div className="text-3xl font-bold text-[var(--accent)] my-4">$29<span className="text-sm text-gray-400">/month</span></div>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Daily trading signals
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Basic market analysis
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Community access
            </li>
          </ul>
          <button className={`w-full py-2 px-4 rounded-lg transition-all duration-300 ${selectedPlan === 'basic' ? 'bg-[var(--accent)] text-white' : 'bg-gray-700 text-gray-300'}`}>
            Select Plan
          </button>
        </div>
        
        <div 
          className={`card p-6 text-center cursor-pointer transition-all duration-300 ${selectedPlan === 'premium' ? 'border-[var(--accent)] shadow-glow' : ''}`}
          onClick={() => handlePlanSelect('premium')}
        >
          <div className="absolute top-0 right-0 bg-[var(--accent)] text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
          <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
          <div className="text-3xl font-bold text-[var(--accent)] my-4">$79<span className="text-sm text-gray-400">/month</span></div>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              All Basic features
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Priority signals
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Weekly strategy calls
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Risk management advice
            </li>
          </ul>
          <button className={`w-full py-2 px-4 rounded-lg transition-all duration-300 ${selectedPlan === 'premium' ? 'bg-[var(--accent)] text-white' : 'bg-gray-700 text-gray-300'}`}>
            Select Plan
          </button>
        </div>
        
        <div 
          className={`card p-6 text-center cursor-pointer transition-all duration-300 ${selectedPlan === 'vip' ? 'border-[var(--accent)] shadow-glow' : ''}`}
          onClick={() => handlePlanSelect('vip')}
        >
          <h3 className="text-xl font-bold mb-2">VIP Plan</h3>
          <div className="text-3xl font-bold text-[var(--accent)] my-4">$199<span className="text-sm text-gray-400">/month</span></div>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              All Premium features
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              1-on-1 coaching
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Custom trading strategies
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Direct phone support
            </li>
          </ul>
          <button className={`w-full py-2 px-4 rounded-lg transition-all duration-300 ${selectedPlan === 'vip' ? 'bg-[var(--accent)] text-white' : 'bg-gray-700 text-gray-300'}`}>
            Select Plan
          </button>
        </div>
      </div>
      
      {selectedPlan && (
        <div className="card p-6 animate-fadeIn">
          <h3 className="text-xl font-bold mb-4">Payment Method</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div 
              className={`p-4 border rounded-lg text-center cursor-pointer transition-all duration-300 ${paymentMethod === 'card' ? 'border-[var(--accent)] bg-[rgba(95,42,131,0.1)]' : 'border-gray-700'}`}
              onClick={() => setPaymentMethod('card')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>Credit Card</span>
            </div>
            
            <div 
              className={`p-4 border rounded-lg text-center cursor-pointer transition-all duration-300 ${paymentMethod === 'crypto' ? 'border-[var(--accent)] bg-[rgba(95,42,131,0.1)]' : 'border-gray-700'}`}
              onClick={() => setPaymentMethod('crypto')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>Cryptocurrency</span>
            </div>
            
            <div 
              className={`p-4 border rounded-lg text-center cursor-pointer transition-all duration-300 ${paymentMethod === 'paypal' ? 'border-[var(--accent)] bg-[rgba(95,42,131,0.1)]' : 'border-gray-700'}`}
              onClick={() => setPaymentMethod('paypal')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              <span>PayPal</span>
            </div>
          </div>
          
          <div className="mb-6">
            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Card Number</label>
                    <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Cardholder Name</label>
                    <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" placeholder="John Doe" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Expiration Date</label>
                    <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">CVC</label>
                    <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" placeholder="123" />
                  </div>
                </div>
              </div>
            )}
            
            {paymentMethod === 'crypto' && (
              <div className="text-center p-6 border border-gray-700 rounded-lg">
                <p className="mb-4">Send payment to the following wallet address:</p>
                <div className="bg-[#2a2a4a] p-3 rounded-lg mb-4 font-mono text-sm break-all">
                  bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                </div>
                <p className="text-sm text-gray-400">Please send the exact amount for your selected plan. Your subscription will be activated once payment is confirmed on the blockchain.</p>
              </div>
            )}
            
            {paymentMethod === 'paypal' && (
              <div className="text-center p-6 border border-gray-700 rounded-lg">
                <p className="mb-4">You will be redirected to PayPal to complete your payment.</p>
                <button className="btn-primary">
                  Proceed to PayPal
                </button>
              </div>
            )}
          </div>
          
          <div className="text-center">
            <button className="btn-primary px-8 py-3">
              Complete Subscription
            </button>
            <p className="mt-4 text-sm text-gray-400">By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
        </div>
      )}
    </div>
  );
}
