import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Keeta Hub - Explore the Keeta Ecosystem',
  description: 'Discover projects, stay updated with news, and find the tools you need in the Keeta Network ecosystem.',
  keywords: ['Keeta', 'blockchain', 'ecosystem', 'DeFi', 'projects', 'KTA'],
  authors: [{ name: 'Keeta Hub Team' }],
  creator: 'Keeta Hub',
  publisher: 'Keeta Hub',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hub.keeta.com',
    title: 'Keeta Hub - Explore the Keeta Ecosystem',
    description: 'Discover projects, stay updated with news, and find the tools you need in the Keeta Network ecosystem.',
    siteName: 'Keeta Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keeta Hub - Explore the Keeta Ecosystem',
    description: 'Discover projects, stay updated with news, and find the tools you need in the Keeta Network ecosystem.',
    creator: '@KeetaNetwork',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00B4D8',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased bg-background-primary text-text-primary`}>
        {children}
      </body>
    </html>
  )
}