import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'DEREKFX - Premium Trading Signals',
  description: 'Get exclusive trading signals and market insights from DEREKFX. Join our Telegram channel for premium cryptocurrency and forex trading signals.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <footer className="bg-primary py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-white font-bold text-xl">DEREKFX</p>
                <p className="text-gray-300 text-sm mt-1">Premium Trading Signals</p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-accent">
                  <i className="fab fa-telegram text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-accent">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-accent">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} DEREKFX. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
