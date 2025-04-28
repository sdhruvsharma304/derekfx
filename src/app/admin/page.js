'use client';

import { useState } from 'react';
import AdminPanel from '../../components/AdminPanel';
import Link from 'next/link';
import Image from 'next/image';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (error) setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple demo login - in a real app, this would be a server request
    setTimeout(() => {
      setIsLoading(false);
      
      // Demo credentials for testing
      if (formData.username === 'admin' && formData.password === 'password') {
        setIsLoggedIn(true);
        setShowAdminPanel(true);
      } else {
        setError('Invalid username or password');
      }
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admin Dashboard</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage your DEREKFX website content and settings.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <div className="card">
                <div className="flex justify-center mb-6">
                  <Image 
                    src="/logo.png" 
                    alt="DEREKFX Logo" 
                    width={80} 
                    height={80} 
                  />
                </div>
                
                <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
                
                {error && (
                  <div className="bg-red-500 bg-opacity-20 border border-red-500 rounded-lg p-3 mb-6">
                    <p className="text-red-400 text-sm">
                      <i className="fas fa-exclamation-circle mr-2"></i>
                      {error}
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label htmlFor="username" className="block mb-2 font-medium">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 focus:outline-none focus:border-accent"
                      placeholder="Enter your username"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 font-medium">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 focus:outline-none focus:border-accent"
                      placeholder="Enter your password"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Logging in...
                      </>
                    ) : (
                      'Login'
                    )}
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400">
                    <i className="fas fa-info-circle mr-1"></i> For demo purposes, use:<br/>
                    Username: <span className="text-accent">admin</span><br/>
                    Password: <span className="text-accent">password</span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Welcome to Admin Dashboard</h2>
                  <button 
                    onClick={handleLogout}
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fas fa-sign-out-alt mr-2"></i> Logout
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 border border-[rgba(255,255,255,0.1)]">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-accent bg-opacity-20 flex items-center justify-center mr-3">
                        <i className="fas fa-tachometer-alt text-accent"></i>
                      </div>
                      <h3 className="font-bold text-lg">Website Overview</h3>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex justify-between">
                        <span>Status:</span>
                        <span className="text-green-400">Online</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Pages:</span>
                        <span>5</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Last Updated:</span>
                        <span>{new Date().toLocaleDateString()}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 border border-[rgba(255,255,255,0.1)]">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-accent bg-opacity-20 flex items-center justify-center mr-3">
                        <i className="fas fa-cog text-accent"></i>
                      </div>
                      <h3 className="font-bold text-lg">Quick Actions</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] rounded-lg p-2 text-sm transition-all"
                        onClick={() => setShowAdminPanel(true)}
                      >
                        <i className="fas fa-edit mr-1"></i> Edit Content
                      </button>
                      <button className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] rounded-lg p-2 text-sm transition-all">
                        <i className="fas fa-video mr-1"></i> Update Video
                      </button>
                      <button className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] rounded-lg p-2 text-sm transition-all">
                        <i className="fab fa-telegram mr-1"></i> Telegram Links
                      </button>
                      <button className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] rounded-lg p-2 text-sm transition-all">
                        <i className="fas fa-credit-card mr-1"></i> Payment Settings
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-6 border border-[rgba(255,255,255,0.1)]">
                  <h3 className="font-bold text-xl mb-4">Website Management</h3>
                  <p className="text-gray-300 mb-6">
                    Use the admin panel to manage your website content, update your video, configure Telegram links, and adjust payment settings.
                  </p>
                  
                  <button 
                    className="btn-primary"
                    onClick={() => setShowAdminPanel(true)}
                  >
                    <i className="fas fa-cog mr-2"></i> Open Admin Panel
                  </button>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-xl mb-4">Quick Help</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 border border-[rgba(255,255,255,0.1)]">
                      <h4 className="font-bold mb-2">Update Video</h4>
                      <p className="text-sm text-gray-300 mb-2">
                        Change the video that appears on your homepage.
                      </p>
                      <button 
                        className="text-accent text-sm hover:underline"
                        onClick={() => {
                          setShowAdminPanel(true);
                          // This would ideally set the active tab to 'video'
                        }}
                      >
                        Edit Video <i className="fas fa-arrow-right ml-1"></i>
                      </button>
                    </div>
                    
                    <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 border border-[rgba(255,255,255,0.1)]">
                      <h4 className="font-bold mb-2">Telegram Links</h4>
                      <p className="text-sm text-gray-300 mb-2">
                        Update your Telegram channel information.
                      </p>
                      <button 
                        className="text-accent text-sm hover:underline"
                        onClick={() => {
                          setShowAdminPanel(true);
                          // This would ideally set the active tab to 'telegram'
                        }}
                      >
                        Edit Links <i className="fas fa-arrow-right ml-1"></i>
                      </button>
                    </div>
                    
                    <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 border border-[rgba(255,255,255,0.1)]">
                      <h4 className="font-bold mb-2">Payment Settings</h4>
                      <p className="text-sm text-gray-300 mb-2">
                        Configure subscription plans and payment options.
                      </p>
                      <button 
                        className="text-accent text-sm hover:underline"
                        onClick={() => {
                          setShowAdminPanel(true);
                          // This would ideally set the active tab to 'payment'
                        }}
                      >
                        Edit Settings <i className="fas fa-arrow-right ml-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Admin Panel Modal */}
      <AdminPanel 
        isVisible={showAdminPanel}
        onClose={() => setShowAdminPanel(false)}
      />
    </main>
  );
}
