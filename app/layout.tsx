import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { LenisScrollProvider } from '@/components/lenis-scroll-provider'
import { MinimalTechFooter } from '@/components/ui/motion-footer'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-archivo',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Software Engineer — Portfolio',
  description: 'Building robust and secure systems. Explore projects and download my resume.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${archivo.variable} ${inter.variable}`}>
      <body className="antialiased">
        <LenisScrollProvider lerp={0.08} duration={1.2} wheelMultiplier={1} touchMultiplier={1}>
          {children}
          
          <MinimalTechFooter />
        </LenisScrollProvider>
        
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html> 
  )
}
