import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import '../components/NavigationComponent/SideNavigation'
import SideNavigation from '../components/NavigationComponent/SideNavigation'
import TopNavigation from '../components/NavigationComponent/TopNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CSGO-Gambling Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
          <TopNavigation />
          <SideNavigation />
      </body>
    </html>
  )
}
