import type { Metadata } from 'next'
import '../styles/globals.css'
import SideNavigation from '../components/NavigationComponent/SideNavigation'
import TopNavigation from '../components/NavigationComponent/TopNavigation'
import Providers from '@/redux/provider'

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
      <Providers>
          <TopNavigation />
          <SideNavigation />
        </Providers>
      </body>
    </html>
  )
}
