import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/nav/Footer'
import EmergencyBanner from '@/components/nav/EmergencyBanner'
import StickyContactBar from '@/components/ui/StickyContactBar'
import ThemeProvider from '@/components/providers/ThemeProvider'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Boston Plumbing | Licensed Plumbers in Boston, MA',
    template: '%s | Boston Plumbing',
  },
  description:
    'Boston Plumbing — licensed, insured, and trusted by 500+ Boston homeowners. Same-day service, upfront pricing, 24/7 emergency. Call (617) 555-0192.',
  keywords: ['plumber boston', 'plumbing boston ma', 'emergency plumber boston', 'drain cleaning boston'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Boston Plumbing',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col dark:bg-dark-bg dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <EmergencyBanner />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyContactBar />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
