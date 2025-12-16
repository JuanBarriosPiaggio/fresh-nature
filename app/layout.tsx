import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fresh Nature - Natural Products for Your Home',
  description: 'Discover our range of natural, eco-friendly products including deodorant, hand wash, dishwashing soap, and shampoo.',
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Fresh Nature - Natural Products for Your Home',
    description: 'Discover our range of natural, eco-friendly products',
    images: ['/logo.svg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fresh Nature - Natural Products for Your Home',
    description: 'Discover our range of natural, eco-friendly products',
    images: ['/logo.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

