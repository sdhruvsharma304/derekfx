import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DEREKFX - Trading Signals',
  description: 'Professional trading signals and market analysis by DEREKFX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid-pattern"></div>
        {children}
      </body>
    </html>
  )
}
