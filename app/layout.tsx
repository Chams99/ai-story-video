import React from "react"
import type { Metadata } from 'next'
import { Cinzel_Decorative, Geist } from 'next/font/google'

import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const logoFont = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-logo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FairyTail - Turn Memories Into Stories',
  description: 'Transform your old photos into cinematic stories with AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${logoFont.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
