// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Unit Tools - Pakistan Converters',
  description: 'Free online unit converters focused for Pakistan. Marla, Kanal, Tola, and more.',
  keywords: [
    'unit converter Pakistan',
    'marla to square feet',
    'kanal to marla',
    'tola to grams',
    'Pakistan converters',
  ],
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{ padding: '20px', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
          <h1>Unit Tools Pakistan</h1>
          <p>Quick & Accurate Unit Converters</p>
        </header>

        <main>{children}</main>

        <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f5f5f5', marginTop: '40px' }}>
          <p>&copy; {new Date().getFullYear()} Unit Tools Pakistan. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}