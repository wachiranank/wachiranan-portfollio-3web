import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Noto_Sans_Thai } from 'next/font/google'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const notoThai = Noto_Sans_Thai({ variable: '--font-noto-thai', subsets: ['thai'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Wachiranan Khanngern — Frontend Developer',
  description:
    'Portfolio of Wachiranan Khanngern, a frontend developer crafting stunning, conversion-focused web experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${notoThai.variable} scroll-smooth`}>
      <body className="bg-black text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
