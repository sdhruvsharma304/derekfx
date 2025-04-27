'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  
  // Mock login function - in a real app, this would validate against a backend
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Use username: admin, password: password');
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Mock data for the admin panel
  const mockData = {
    subscribers: 342,
    activeSignals: 8,
    successRate: '87%',
    recentSubscribers: [
      { id: 1, name: 'John Doe', plan: 'Premium', date: '2025-04-25' },
      { id: 2, name: 'Sarah Smith', plan: 'VIP', date: '2025-04-24' },
      { id: 3, name: 'Mike Johnson', plan: 'Basic', date: '2025-04-23' }
    ]
  };
  
  if (!isLoggedIn) {
    return (
      <main>
        <Navbar />
        
        <section className="py-20">
          <div className="max-w-md mx-auto px-4">
            <div className="card p-8">
              <div className="text-center mb-8">
                <Image 
                  src="/logo.png" 
                  alt="DEREKFX Logo" 
                  width={80} 
                  height={80}
                  className="mx-auto mb-4"
                />
                <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
                <p className="text-gray-400">Enter your credentials to access the admin panel</p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
                  <input 
                    type="text" 
                    name="username"
                    value={loginData.username}
                    onChange={handleInputChange}
                    className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                  <input 
                    type="password" 
                    name="password"
                    value={loginData.password}
                    onChange={handleInputChange}
                    className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" 
                    required
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Login
                </button>
                
                <div className="text-center text-sm text-gray-400">
                  <p>Demo credentials:</p>
                  <p>Username: admin</p>
                  <p>Password: password</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen bg-[#1a1a2e]">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-[#16162a] border-r border-gray-800 flex flex-col">
          <div className="p-4 border-b border-gray-800 flex items-center">
            <Image 
              src="/logo.png" 
              alt="DEREKFX Logo" 
              width={40} 
              height={40}
              className="mr-2"
            />
            <h1 className="text-xl font-bold">DEREKFX Admin</h1>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'dashboard' ? 'bg-[var(--accent)] text-white' : 'hover:bg-[rgba(95,42,131,0.1)]'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                  Dashboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('video')}
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'video' ? 'bg-[var(--accent)] text-white' : 'hover:bg-[rgba(95,42,131,0.1)]'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Video Settings
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('telegram')}
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'telegram' ? 'bg-[var(--accent)] text-white' : 'hover:bg-[rgba(95,42,131,0.1)]'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Telegram Links
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('payment')}
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'payment' ? 'bg-[var(--accent)] text-white' : 'hover:bg-[rgba(95,42,131,0.1)]'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Payment Settings
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('content')}
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'content' ? 'bg-[var(--accent)] text-white' : 'hover:bg-[rgba(95,42,131,0.1)]'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Content Editor
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('help')}
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'help' ? 'bg-[var(--accent)] text-white' : 'hover:bg-[rgba(95,42,131,0.1)]'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Help & Guide
                </button>
              </li>
            </ul>
          </nav>
          
          <div className="p-4 border-t border-gray-800">
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="w-full px-4 py-2 rounded-lg bg-red-900 hover:bg-red-800 text-white flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <header className="bg-[#16162a] border-b border-gray-800 p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'video' && 'Video Settings'}
              {activeTab === 'telegram' && 'Telegram Links'}
              {activeTab === 'payment' && 'Payment Settings'}
              {activeTab === 'content' && 'Content Editor'}
              {activeTab === 'help' && 'Help & Guide'}
            </h2>
            <div className="flex items-center">
              <span className="mr-4">Welcome, Admin</span>
              <div className="h-8 w-8 bg-[var(--accent)] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
            </div>
          </header>
          
          <div className="p-6">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium">Total Subscribers</h3>
                      <div className="h-10 w-10 bg-[rgba(95,42,131,0.1)] rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-3xl font-bold">{mockData.subscribers}</div>
                    <p className="text-green-500 flex items-center mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      12% from last month
                    </p>
                  </div>
                  
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium">Active Signals</h3>
                      <div className="h-10 w-10 bg-[rgba(95,42,131,0.1)] rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-3xl font-bold">{mockData.activeSignals}</div>
                    <p className="text-gray-400 mt-2">Updated 2 hours ago</p>
                  </div>
                  
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium">Success Rate</h3>
                      <div className="h-10 w-10 bg-[rgba(95,42,131,0.1)] rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-3xl font-bold">{mockData.successRate}</div>
                    <p className="text-green-500 flex items-center mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      3% from last week
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card p-6">
                    <h3 className="text-lg font-medium mb-4">Recent Subscribers</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-800">
                            <th className="text-left py-2 px-4">Name</th>
                            <th className="text-left py-2 px-4">Plan</th>
                            <th className="text-left py-2 px-4">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockData.recentSubscribers.map(subscriber => (
                            <tr key={subscriber.id} className="border-b border-gray-800">
                              <td className="py-2 px-4">{subscriber.name}</td>
                              <td className="py-2 px-4">
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  subscriber.plan === 'VIP' ? 'bg-purple-900 text-purple-200' : 
                                  subscriber.plan === 'Premium' ? 'bg-blue-900 text-blue-200' : 
                                  'bg-gray-700 text-gray-200'
                                }`}>
                                  {subscriber.plan}
                                </span>
                              </td>
                              <td className="py-2 px-4">{subscriber.date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 text-center">
                      <button className="text-[var(--accent)] hover:underline">View All Subscribers</button>
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="card p-4 hover:bg-[rgba(95,42,131,0.1)] transition-colors duration-300 text-left">
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">Add Signal</span>
                        </div>
                        <p className="text-sm text-gray-400">Create a new trading signal</p>
                      </button>
                      
                      <button className="card p-4 hover:bg-[rgba(95,42,131,0.1)] transition-colors duration-300 text-left">
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                          <span className="font-medium">Send Alert</span>
                        </div>
                        <p className="text-sm text-gray-400">Notify all subscribers</p>
                      </button>
                      
                      <button className="card p-4 hover:bg-[rgba(95,42,131,0.1)] transition-colors duration-300 text-left">
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <span className="font-medium">View Reports</span>
                        </div>
                        <p className="text-sm text-gray-400">Check performance metrics</p>
                      </button>
                      
                      <button className="card p-4 hover:bg-[rgba(95,42,131,0.1)] transition-colors duration-300 text-left">
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-medium">Settings</span>
                        </div>
                        <p className="text-sm text-gray-400">Manage account settings</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Video Settings Tab */}
            {activeTab === 'video' && (
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-6">Video Settings</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">Current Video</h4>
                  <div className="bg-[#2a2a4a] rounded-lg p-4 mb-4">
                    <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">trading_signals_intro.mp4</p>
                        <p className="text-sm text-gray-400">Uploaded on Apr 15, 2025</p>
                      </div>
                      <button className="text-red-500 hover:text-red-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">Upload New Video</h4>
                  <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mb-2">Drag and drop your video file here</p>
                    <p className="text-sm text-gray-400 mb-4">MP4, WebM, or OGG (Max 100MB)</p>
                    <button className="btn-primary px-6">Browse Files</button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">Video Settings</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Video Title</label>
                      <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="DEREKFX Trading Signals Introduction" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Video Description</label>
                      <textarea className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)] h-24" defaultValue="Learn how DEREKFX trading signals can help you maximize your profits in the cryptocurrency, forex, and stock markets." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Autoplay</label>
                      <div className="flex items-center">
                        <input type="checkbox" id="autoplay" className="mr-2" defaultChecked />
                        <label htmlFor="autoplay">Enable autoplay when user visits the homepage</label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Muted by Default</label>
                      <div className="flex items-center">
                        <input type="checkbox" id="muted" className="mr-2" defaultChecked />
                        <label htmlFor="muted">Start video muted (recommended for better user experience)</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="btn-primary px-6">Save Changes</button>
                </div>
              </div>
            )}
            
            {/* Telegram Links Tab */}
            {activeTab === 'telegram' && (
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-6">Telegram Links</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">Channel Information</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Channel Name</label>
                      <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="DEREKFX Signals" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Channel Username</label>
                      <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="derekfx_signals" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Public Channel Link</label>
                      <div className="flex">
                        <input type="text" className="flex-1 bg-[#2a2a4a] border border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="https://t.me/derekfx_signals" />
                        <button className="bg-gray-700 px-4 rounded-r-lg hover:bg-gray-600 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">Private Channels</h4>
                  <div className="space-y-4">
                    <div className="bg-[#2a2a4a] rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium">Basic Plan Channel</p>
                        <p className="text-sm text-gray-400">https://t.me/+AbCdEfGhIjK1234</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="text-red-500 hover:text-red-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium">Premium Plan Channel</p>
                        <p className="text-sm text-gray-400">https://t.me/+LmNoPqRsTuV5678</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="text-red-500 hover:text-red-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium">VIP Plan Channel</p>
                        <p className="text-sm text-gray-400">https://t.me/+WxYzAbCdEfG9012</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="text-red-500 hover:text-red-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">Add New Channel</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Channel Name</label>
                      <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" placeholder="Enter channel name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Invite Link</label>
                      <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" placeholder="https://t.me/+..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Subscription Plan</label>
                      <select className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]">
                        <option value="">Select a plan</option>
                        <option value="basic">Basic Plan</option>
                        <option value="premium">Premium Plan</option>
                        <option value="vip">VIP Plan</option>
                        <option value="custom">Custom Plan</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="btn-primary px-6">Save Changes</button>
                </div>
              </div>
            )}
            
            {/* Payment Settings Tab */}
            {activeTab === 'payment' && (
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-6">Payment Settings</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">Subscription Plans</h4>
                  <div className="space-y-4">
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="font-bold">Basic Plan</h5>
                        <div className="flex space-x-2">
                          <button className="text-blue-500 hover:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Price</label>
                          <div className="flex">
                            <span className="bg-gray-700 px-3 py-2 rounded-l-lg">$</span>
                            <input type="text" className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded-r-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="29" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Billing Cycle</label>
                          <select className="w-full bg-[#1a1a2e] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]">
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="annually">Annually</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
                          <select className="w-full bg-[#1a1a2e] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="font-bold">Premium Plan</h5>
                        <div className="flex space-x-2">
                          <button className="text-blue-500 hover:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Price</label>
                          <div className="flex">
                            <span className="bg-gray-700 px-3 py-2 rounded-l-lg">$</span>
                            <input type="text" className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded-r-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="79" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Billing Cycle</label>
                          <select className="w-full bg-[#1a1a2e] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]">
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="annually">Annually</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
                          <select className="w-full bg-[#1a1a2e] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="font-bold">VIP Plan</h5>
                        <div className="flex space-x-2">
                          <button className="text-blue-500 hover:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Price</label>
                          <div className="flex">
                            <span className="bg-gray-700 px-3 py-2 rounded-l-lg">$</span>
                            <input type="text" className="flex-1 bg-[#1a1a2e] border border-gray-700 rounded-r-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="199" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Billing Cycle</label>
                          <select className="w-full bg-[#1a1a2e] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]">
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="annually">Annually</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
                          <select className="w-full bg-[#1a1a2e] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">Payment Gateways</h4>
                  <div className="space-y-4">
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <input type="checkbox" id="stripe" className="mr-3" defaultChecked />
                          <label htmlFor="stripe" className="font-bold">Stripe</label>
                        </div>
                        <span className="px-2 py-1 bg-green-900 text-green-200 rounded-full text-xs">Active</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">API Key</label>
                          <input type="text" className="w-full bg-[#1a1a2e] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="sk_test_51HZ3kDJK8zT7JK8zT7JK8zT7" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Secret Key</label>
                          <input type="password" className="w-full bg-[#1a1a2e] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="••••••••••••••••••••••••" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <input type="checkbox" id="paypal" className="mr-3" />
                          <label htmlFor="paypal" className="font-bold">PayPal</label>
                        </div>
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">Inactive</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Client ID</label>
                          <input type="text" className="w-full bg-[#1a1a2e] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" placeholder="Enter PayPal Client ID" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Secret Key</label>
                          <input type="password" className="w-full bg-[#1a1a2e] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" placeholder="Enter PayPal Secret Key" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <input type="checkbox" id="crypto" className="mr-3" defaultChecked />
                          <label htmlFor="crypto" className="font-bold">Cryptocurrency</label>
                        </div>
                        <span className="px-2 py-1 bg-green-900 text-green-200 rounded-full text-xs">Active</span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Bitcoin Wallet Address</label>
                        <input type="text" className="w-full bg-[#1a1a2e] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="btn-primary px-6">Save Changes</button>
                </div>
              </div>
            )}
            
            {/* Content Editor Tab */}
            {activeTab === 'content' && (
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-6">Content Editor</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">Homepage Content</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Hero Title</label>
                      <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="Expert Trading Signals for Maximum Profits" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Hero Subtitle</label>
                      <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="Join thousands of successful traders who rely on DEREKFX signals to make informed trading decisions." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Telegram Promotion Text</label>
                      <textarea className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)] h-24" defaultValue="Get instant access to premium trading signals, market analysis, and a community of successful traders." />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">Contact Information</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                      <input type="email" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="support@derekfx.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                      <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
                      <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="New York, NY, USA" />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">Social Media Links</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Twitter</label>
                      <input type="url" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="https://twitter.com/derekfx" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Instagram</label>
                      <input type="url" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="https://instagram.com/derekfx" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Facebook</label>
                      <input type="url" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="https://facebook.com/derekfx" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">LinkedIn</label>
                      <input type="url" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="https://linkedin.com/company/derekfx" />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">Footer Content</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Copyright Text</label>
                      <input type="text" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="© 2025 DEREKFX. All rights reserved." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Privacy Policy Link</label>
                      <input type="url" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="/privacy" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Terms of Service Link</label>
                      <input type="url" className="w-full bg-[#2a2a4a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)]" defaultValue="/terms" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="btn-primary px-6">Save Changes</button>
                </div>
              </div>
            )}
            
            {/* Help & Guide Tab */}
            {activeTab === 'help' && (
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-6">Help & Guide</h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4">Admin Panel Guide</h4>
                  <div className="space-y-4">
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <h5 className="font-bold mb-2">Dashboard</h5>
                      <p className="text-gray-300">The dashboard provides an overview of your website's performance, including subscriber count, active signals, and success rate. You can also access quick actions for common tasks.</p>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <h5 className="font-bold mb-2">Video Settings</h5>
                      <p className="text-gray-300">Manage the video that appears on your homepage. You can upload a new video, change the title and description, and adjust autoplay settings.</p>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <h5 className="font-bold mb-2">Telegram Links</h5>
                      <p className="text-gray-300">Update your Telegram channel information and manage private channel links for different subscription plans.</p>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <h5 className="font-bold mb-2">Payment Settings</h5>
                      <p className="text-gray-300">Configure your subscription plans and payment gateways. You can adjust prices, billing cycles, and payment methods.</p>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <h5 className="font-bold mb-2">Content Editor</h5>
                      <p className="text-gray-300">Edit the text content of your website, including homepage content, contact information, and social media links.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4">Payment Gateway Setup</h4>
                  <div className="space-y-4">
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <h5 className="font-bold mb-2">Stripe Integration</h5>
                      <ol className="list-decimal list-inside space-y-2 text-gray-300">
                        <li>Create a Stripe account at <a href="https://stripe.com" className="text-blue-400 hover:underline">stripe.com</a></li>
                        <li>Go to the Developers section and get your API keys</li>
                        <li>Enter your API keys in the Payment Settings tab</li>
                        <li>Enable Stripe as a payment method</li>
                      </ol>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <h5 className="font-bold mb-2">PayPal Integration</h5>
                      <ol className="list-decimal list-inside space-y-2 text-gray-300">
                        <li>Create a PayPal Business account at <a href="https://paypal.com/business" className="text-blue-400 hover:underline">paypal.com/business</a></li>
                        <li>Go to the Developer Dashboard and create a new app</li>
                        <li>Get your Client ID and Secret Key</li>
                        <li>Enter these credentials in the Payment Settings tab</li>
                        <li>Enable PayPal as a payment method</li>
                      </ol>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <h5 className="font-bold mb-2">Cryptocurrency Integration</h5>
                      <ol className="list-decimal list-inside space-y-2 text-gray-300">
                        <li>Create a cryptocurrency wallet (Bitcoin, Ethereum, etc.)</li>
                        <li>Enter your wallet address in the Payment Settings tab</li>
                        <li>Enable Cryptocurrency as a payment method</li>
                        <li>Note: Cryptocurrency payments require manual verification</li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4">Website Management Tips</h4>
                  <div className="space-y-4">
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <h5 className="font-bold mb-2">Updating Content</h5>
                      <p className="text-gray-300">Regularly update your website content to keep it fresh and engaging. Use the Content Editor tab to modify text on various pages.</p>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <h5 className="font-bold mb-2">Managing Subscribers</h5>
                      <p className="text-gray-300">Keep track of your subscribers and their subscription plans. Send regular updates and signals to keep them engaged.</p>
                    </div>
                    
                    <div className="bg-[#2a2a4a] rounded-lg p-4">
                      <h5 className="font-bold mb-2">Security Best Practices</h5>
                      <p className="text-gray-300">Change your admin password regularly and keep your payment gateway API keys secure. Never share your login credentials with others.</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-400 mb-4">Need additional help? Contact our support team.</p>
                  <button className="btn-primary px-6">Contact Support</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
