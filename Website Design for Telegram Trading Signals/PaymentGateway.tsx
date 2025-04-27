'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PaymentGatewayProps {
  selectedPlan: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function PaymentGateway({ selectedPlan, onSuccess, onCancel }: PaymentGatewayProps) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    email: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const planDetails = {
    basic: {
      name: 'Basic Plan',
      price: 49,
      description: 'Monthly subscription to DEREKFX Basic Signals'
    },
    premium: {
      name: 'Premium Plan',
      price: 99,
      description: 'Monthly subscription to DEREKFX Premium Signals'
    },
    vip: {
      name: 'VIP Plan',
      price: 199,
      description: 'Monthly subscription to DEREKFX VIP Signals'
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (paymentMethod === 'card') {
      if (!formData.cardNumber) {
        newErrors.cardNumber = 'Card number is required';
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Card number must be 16 digits';
      }
      
      if (!formData.cardName) {
        newErrors.cardName = 'Name on card is required';
      }
      
      if (!formData.expiry) {
        newErrors.expiry = 'Expiry date is required';
      } else if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) {
        newErrors.expiry = 'Expiry date must be in MM/YY format';
      }
      
      if (!formData.cvv) {
        newErrors.cvv = 'CVV is required';
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = 'CVV must be 3 or 4 digits';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="bg-[var(--primary-bg)] bg-opacity-95 fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-[var(--highlight-1)] bg-opacity-90 rounded-xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-[rgba(255,255,255,0.1)]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Complete Your Purchase</h2>
          <button 
            onClick={onCancel}
            className="text-gray-400 hover:text-white"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Order Summary */}
        <div className="bg-[rgba(0,0,0,0.2)] rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">{planDetails[selectedPlan as keyof typeof planDetails].name}</h3>
              <p className="text-gray-300 text-sm">{planDetails[selectedPlan as keyof typeof planDetails].description}</p>
            </div>
            <div className="text-xl font-bold">
              ${planDetails[selectedPlan as keyof typeof planDetails].price}
            </div>
          </div>
        </div>
        
        {/* Payment Method Selection */}
        <div className="mb-6">
          <h3 className="font-bold mb-3">Payment Method</h3>
          <div className="grid grid-cols-4 gap-3">
            <div 
              className={`bg-[rgba(255,255,255,0.05)] rounded-lg p-3 flex items-center justify-center cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-2 border-[var(--accent)]' : 'border border-[rgba(255,255,255,0.1)]'}`}
              onClick={() => setPaymentMethod('card')}
            >
              <i className="fas fa-credit-card text-xl"></i>
            </div>
            <div 
              className={`bg-[rgba(255,255,255,0.05)] rounded-lg p-3 flex items-center justify-center cursor-pointer transition-all ${paymentMethod === 'paypal' ? 'border-2 border-[var(--accent)]' : 'border border-[rgba(255,255,255,0.1)]'}`}
              onClick={() => setPaymentMethod('paypal')}
            >
              <i className="fab fa-paypal text-xl"></i>
            </div>
            <div 
              className={`bg-[rgba(255,255,255,0.05)] rounded-lg p-3 flex items-center justify-center cursor-pointer transition-all ${paymentMethod === 'crypto' ? 'border-2 border-[var(--accent)]' : 'border border-[rgba(255,255,255,0.1)]'}`}
              onClick={() => setPaymentMethod('crypto')}
            >
              <i className="fab fa-bitcoin text-xl"></i>
            </div>
            <div 
              className={`bg-[rgba(255,255,255,0.05)] rounded-lg p-3 flex items-center justify-center cursor-pointer transition-all ${paymentMethod === 'bank' ? 'border-2 border-[var(--accent)]' : 'border border-[rgba(255,255,255,0.1)]'}`}
              onClick={() => setPaymentMethod('bank')}
            >
              <i className="fas fa-university text-xl"></i>
            </div>
          </div>
        </div>
        
        {/* Payment Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-[rgba(255,255,255,0.05)] border ${errors.email ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)]'} rounded-lg p-3 focus:outline-none focus:border-[var(--accent)]`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          {paymentMethod === 'card' && (
            <>
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block mb-2 font-medium">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className={`w-full bg-[rgba(255,255,255,0.05)] border ${errors.cardNumber ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)]'} rounded-lg p-3 focus:outline-none focus:border-[var(--accent)]`}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
                {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="cardName" className="block mb-2 font-medium">Name on Card</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  className={`w-full bg-[rgba(255,255,255,0.05)] border ${errors.cardName ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)]'} rounded-lg p-3 focus:outline-none focus:border-[var(--accent)]`}
                  placeholder="John Doe"
                />
                {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="expiry" className="block mb-2 font-medium">Expiry Date</label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    className={`w-full bg-[rgba(255,255,255,0.05)] border ${errors.expiry ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)]'} rounded-lg p-3 focus:outline-none focus:border-[var(--accent)]`}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                  {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>}
                </div>
                
                <div>
                  <label htmlFor="cvv" className="block mb-2 font-medium">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className={`w-full bg-[rgba(255,255,255,0.05)] border ${errors.cvv ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)]'} rounded-lg p-3 focus:outline-none focus:border-[var(--accent)]`}
                    placeholder="123"
                    maxLength={4}
                  />
                  {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                </div>
              </div>
            </>
          )}
          
          {paymentMethod === 'paypal' && (
            <div className="text-center py-6">
              <p className="mb-4">You will be redirected to PayPal to complete your payment.</p>
              <div className="bg-[#0070ba] text-white py-2 px-4 rounded-lg inline-flex items-center">
                <i className="fab fa-paypal mr-2"></i> Pay with PayPal
              </div>
            </div>
          )}
          
          {paymentMethod === 'crypto' && (
            <div className="text-center py-6">
              <p className="mb-4">Pay with cryptocurrency</p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-3 flex items-center justify-center cursor-pointer border border-[rgba(255,255,255,0.1)]">
                  <i className="fab fa-bitcoin text-xl mr-2"></i> BTC
                </div>
                <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-3 flex items-center justify-center cursor-pointer border border-[rgba(255,255,255,0.1)]">
                  <i className="fab fa-ethereum text-xl mr-2"></i> ETH
                </div>
                <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-3 flex items-center justify-center cursor-pointer border border-[rgba(255,255,255,0.1)]">
                  <i className="fas fa-coins text-xl mr-2"></i> USDT
                </div>
              </div>
              <p className="text-sm text-gray-400">Select a cryptocurrency to continue</p>
            </div>
          )}
          
          {paymentMethod === 'bank' && (
            <div className="text-center py-6">
              <p className="mb-4">Pay via bank transfer</p>
              <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 text-left mb-4">
                <p className="font-bold mb-1">Bank Details:</p>
                <p>Bank Name: Example Bank</p>
                <p>Account Name: DEREKFX Trading</p>
                <p>Account Number: XXXX-XXXX-XXXX-XXXX</p>
                <p>Reference: Your email address</p>
              </div>
              <p className="text-sm text-gray-400">Please include your email as reference</p>
            </div>
          )}
          
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={onCancel}
              className="btn-secondary"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={isProcessing}
              className="btn-primary flex items-center justify-center min-w-[150px]"
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>Pay ${planDetails[selectedPlan as keyof typeof planDetails].price}</>
              )}
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            <i className="fas fa-lock mr-1"></i> Secure payment processing. Your payment information is encrypted.
          </p>
        </div>
      </div>
    </div>
  );
}
