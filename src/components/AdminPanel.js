'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminPanel({ isVisible, onClose }) {
  const [activeTab, setActiveTab] = useState('video');
  const [videoUrl, setVideoUrl] = useState('https://player.vimeo.com/video/517069690?h=9c6b3a2f93&title=0&byline=0&portrait=0');
  const [telegramLink, setTelegramLink] = useState('@DEREKFX_Official');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate saving data
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }, 1500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div className="bg-primary rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-[rgba(255,255,255,0.1)]">
        {/* Header */}
        <div className="bg-highlight p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="DEREKFX Logo" 
              width={40} 
              height={40} 
              className="mr-2"
            />
            <h2 className="text-xl font-bold">DEREKFX Admin Panel</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Content */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="bg-[rgba(0,0,0,0.2)] w-full md:w-64 p-4 md:p-0">
            <ul className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
              <li>
                <button 
                  className={`px-4 py-3 w-full text-left flex items-center ${activeTab === 'video' ? 'bg-accent bg-opacity-30 border-l-4 border-accent' : 'hover:bg-[rgba(255,255,255,0.05)]'}`}
                  onClick={() => setActiveTab('video')}
                >
                  <i className="fas fa-video mr-2"></i>
                  <span>Video Settings</span>
                </button>
              </li>
              <li>
                <button 
                  className={`px-4 py-3 w-full text-left flex items-center ${activeTab === 'telegram' ? 'bg-accent bg-opacity-30 border-l-4 border-accent' : 'hover:bg-[rgba(255,255,255,0.05)]'}`}
                  onClick={() => setActiveTab('telegram')}
                >
                  <i className="fab fa-telegram mr-2"></i>
                  <span>Telegram Links</span>
                </button>
              </li>
              <li>
                <button 
                  className={`px-4 py-3 w-full text-left flex items-center ${activeTab === 'payment' ? 'bg-accent bg-opacity-30 border-l-4 border-accent' : 'hover:bg-[rgba(255,255,255,0.05)]'}`}
                  onClick={() => setActiveTab('payment')}
                >
                  <i className="fas fa-credit-card mr-2"></i>
                  <span>Payment Settings</span>
                </button>
              </li>
              <li>
                <button 
                  className={`px-4 py-3 w-full text-left flex items-center ${activeTab === 'content' ? 'bg-accent bg-opacity-30 border-l-4 border-accent' : 'hover:bg-[rgba(255,255,255,0.05)]'}`}
                  onClick={() => setActiveTab('content')}
                >
                  <i className="fas fa-edit mr-2"></i>
                  <span>Content Editor</span>
                </button>
              </li>
              <li>
                <button 
                  className={`px-4 py-3 w-full text-left flex items-center ${activeTab === 'help' ? 'bg-accent bg-opacity-30 border-l-4 border-accent' : 'hover:bg-[rgba(255,255,255,0.05)]'}`}
                  onClick={() => setActiveTab('help')}
                >
                  <i className="fas fa-question-circle mr-2"></i>
                  <span>Help & Guide</span>
                </button>
              </li>
            </ul>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Video Settings */}
            {activeTab === 'video' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Video Settings</h3>
                <p className="text-gray-300 mb-6">
                  Update the video that appears on your homepage. You can use YouTube, Vimeo, or other video embed links.
                </p>
                
                <div className="mb-6">
                  <label htmlFor="videoUrl" className="block mb-2 font-medium">Video Embed URL</label>
                  <input
                    type="text"
                    id="videoUrl"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 focus:outline-none focus:border-accent"
                    placeholder="https://player.vimeo.com/video/123456789"
                  />
                  <p className="text-sm text-gray-400 mt-2">
                    For YouTube videos, use the embed URL format: https://www.youtube.com/embed/VIDEO_ID
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Video Preview</h4>
                  <div className="video-container">
                    <iframe 
                      src={videoUrl}
                      allow="autoplay; fullscreen; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
            
            {/* Telegram Links */}
            {activeTab === 'telegram' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Telegram Links</h3>
                <p className="text-gray-300 mb-6">
                  Update your Telegram channel links and information.
                </p>
                
                <div className="mb-6">
                  <label htmlFor="telegramLink" className="block mb-2 font-medium">Telegram Channel Username</label>
                  <div className="flex">
                    <span className="bg-[rgba(255,255,255,0.1)] border border-r-0 border-[rgba(255,255,255,0.1)] rounded-l-lg p-3">
                      @
                    </span>
                    <input
                      type="text"
                      id="telegramLink"
                      value={telegramLink.replace('@', '')}
                      onChange={(e) => setTelegramLink('@' + e.target.value.replace('@', ''))}
                      className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-r-lg p-3 focus:outline-none focus:border-accent"
                      placeholder="DEREKFX_Official"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="telegramInviteLink" className="block mb-2 font-medium">Telegram Invite Link (Optional)</label>
                  <input
                    type="text"
                    id="telegramInviteLink"
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 focus:outline-none focus:border-accent"
                    placeholder="https://t.me/joinchat/INVITE_CODE"
                  />
                  <p className="text-sm text-gray-400 mt-2">
                    If you have a private channel, provide the invite link here.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Channel Preview</h4>
                  <div className="bg-[#212232] rounded-lg p-4 max-w-md">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center mr-3">
                        <i className="fab fa-telegram-plane text-white"></i>
                      </div>
                      <div>
                        <h5 className="font-bold">DEREKFX Signals</h5>
                        <p className="text-sm text-gray-400">{telegramLink}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Payment Settings */}
            {activeTab === 'payment' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Payment Settings</h3>
                <p className="text-gray-300 mb-6">
                  Configure your payment gateway settings and subscription plans.
                </p>
                
                <div className="bg-yellow-500 bg-opacity-20 border border-yellow-500 rounded-lg p-4 mb-6">
                  <p className="text-yellow-400">
                    <i className="fas fa-exclamation-triangle mr-2"></i>
                    <strong>Important:</strong> To fully integrate a payment gateway, you'll need to:
                  </p>
                  <ol className="list-decimal ml-6 mt-2 space-y-1 text-yellow-400">
                    <li>Sign up for a payment processor (Stripe, PayPal, etc.)</li>
                    <li>Get your API keys from the payment processor</li>
                    <li>Update the server-side code with your API keys</li>
                    <li>Test the payment flow in sandbox mode</li>
                  </ol>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-4">Subscription Plans</h4>
                  
                  <div className="space-y-4">
                    {/* Basic Plan */}
                    <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 border border-[rgba(255,255,255,0.1)]">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-bold">Basic Plan</h5>
                        <div className="flex items-center">
                          <span className="mr-2">$</span>
                          <input
                            type="number"
                            className="w-20 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded p-1 text-center"
                            defaultValue="49"
                          />
                          <span className="ml-2">/month</span>
                        </div>
                      </div>
                      <textarea
                        className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-2 focus:outline-none focus:border-accent text-sm"
                        rows={3}
                        defaultValue="5-7 crypto signals per week, Entry & exit points, Basic risk management, Telegram group access"
                      ></textarea>
                    </div>
                    
                    {/* Premium Plan */}
                    <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 border border-[rgba(255,255,255,0.1)]">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-bold">Premium Plan</h5>
                        <div className="flex items-center">
                          <span className="mr-2">$</span>
                          <input
                            type="number"
                            className="w-20 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded p-1 text-center"
                            defaultValue="99"
                          />
                          <span className="ml-2">/month</span>
                        </div>
                      </div>
                      <textarea
                        className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-2 focus:outline-none focus:border-accent text-sm"
                        rows={3}
                        defaultValue="10-15 crypto & forex signals per week, Detailed entry & exit strategies, Advanced risk management, VIP Telegram group access, Weekly market analysis"
                      ></textarea>
                    </div>
                    
                    {/* VIP Plan */}
                    <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 border border-[rgba(255,255,255,0.1)]">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-bold">VIP Plan</h5>
                        <div className="flex items-center">
                          <span className="mr-2">$</span>
                          <input
                            type="number"
                            className="w-20 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded p-1 text-center"
                            defaultValue="199"
                          />
                          <span className="ml-2">/month</span>
                        </div>
                      </div>
                      <textarea
                        className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-2 focus:outline-none focus:border-accent text-sm"
                        rows={3}
                        defaultValue="20+ crypto & forex signals per week, Priority signals delivery, Expert risk management, Exclusive VIP Telegram access, Daily market analysis & reports, 24/7 1-on-1 support"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Content Editor */}
            {activeTab === 'content' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Content Editor</h3>
                <p className="text-gray-300 mb-6">
                  Edit website content and information.
                </p>
                
                <div className="mb-6">
                  <label htmlFor="siteTitle" className="block mb-2 font-medium">Website Title</label>
                  <input
                    type="text"
                    id="siteTitle"
                    defaultValue="DEREKFX - Premium Trading Signals"
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 focus:outline-none focus:border-accent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="siteDescription" className="block mb-2 font-medium">Website Description</label>
                  <textarea
                    id="siteDescription"
                    defaultValue="Get exclusive trading signals and market insights from DEREKFX. Join our Telegram channel for premium cryptocurrency and forex trading signals."
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 focus:outline-none focus:border-accent"
                    rows={3}
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="contactEmail" className="block mb-2 font-medium">Contact Email</label>
                  <input
                    type="email"
                    id="contactEmail"
                    defaultValue="support@derekfx.com"
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 focus:outline-none focus:border-accent"
                  />
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Social Media Links</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telegramSocial" className="block mb-2 text-sm">Telegram</label>
                      <input
                        type="text"
                        id="telegramSocial"
                        defaultValue="https://t.me/DEREKFX_Official"
                        className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-2 focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="twitterSocial" className="block mb-2 text-sm">Twitter</label>
                      <input
                        type="text"
                        id="twitterSocial"
                        defaultValue="https://twitter.com/DEREKFX_Official"
                        className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-2 focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="instagramSocial" className="block mb-2 text-sm">Instagram</label>
                      <input
                        type="text"
                        id="instagramSocial"
                        defaultValue="https://instagram.com/DEREKFX_Official"
                        className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-2 focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="youtubeSocial" className="block mb-2 text-sm">YouTube</label>
                      <input
                        type="text"
                        id="youtubeSocial"
                        defaultValue="https://youtube.com/c/DEREKFX_Official"
                        className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-2 focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Help & Guide */}
            {activeTab === 'help' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Help & Guide</h3>
                <p className="text-gray-300 mb-6">
                  Learn how to manage and update your website.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4">
                    <h4 className="font-bold mb-2">How to Update Your Video</h4>
                    <ol className="list-decimal ml-6 space-y-2 text-gray-300">
                      <li>Go to the Video Settings tab in the admin panel</li>
                      <li>Enter the embed URL of your video (YouTube or Vimeo)</li>
                      <li>Click Save Changes to update the video on your homepage</li>
                    </ol>
                  </div>
                  
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4">
                    <h4 className="font-bold mb-2">How to Update Telegram Links</h4>
                    <ol className="list-decimal ml-6 space-y-2 text-gray-300">
                      <li>Go to the Telegram Links tab in the admin panel</li>
                      <li>Enter your Telegram channel username (with or without @)</li>
                      <li>Optionally add an invite link for private channels</li>
                      <li>Click Save Changes to update all Telegram links on your website</li>
                    </ol>
                  </div>
                  
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4">
                    <h4 className="font-bold mb-2">How to Configure Payment Gateway</h4>
                    <ol className="list-decimal ml-6 space-y-2 text-gray-300">
                      <li>Sign up for a payment processor (Stripe recommended)</li>
                      <li>Get your API keys from the payment processor dashboard</li>
                      <li>Contact your developer to integrate the API keys</li>
                      <li>Use the Payment Settings tab to configure your subscription plans</li>
                    </ol>
                  </div>
                  
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4">
                    <h4 className="font-bold mb-2">Need More Help?</h4>
                    <p className="text-gray-300 mb-2">
                      If you need additional assistance with your website, please contact your developer or reach out to our support team.
                    </p>
                    <a href="mailto:support@example.com" className="text-accent hover:underline">
                      support@example.com
                    </a>
                  </div>
                </div>
              </div>
            )}
            
            {/* Save Button */}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={onClose}
                className="btn-secondary"
              >
                Cancel
              </button>
              
              <div className="flex items-center">
                {saveSuccess && (
                  <span className="text-green-400 mr-4">
                    <i className="fas fa-check-circle mr-1"></i>
                    Changes saved successfully!
                  </span>
                )}
                
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="btn-primary flex items-center justify-center min-w-[120px]"
                >
                  {isSaving ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
