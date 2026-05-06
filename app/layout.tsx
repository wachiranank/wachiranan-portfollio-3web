import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wachiranan Khanngern — Frontend Developer',
  description:
    'Portfolio of Wachiranan Khanngern, a frontend developer crafting stunning, conversion-focused web experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  )
}
