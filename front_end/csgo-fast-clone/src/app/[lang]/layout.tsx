import type { Metadata } from 'next'
import '../../styles/globals.css'
import SideNavigation from '../../components/NavigationComponent/SideNavigation'
import TopNavigation from '../../components/NavigationComponent/TopNavigation'
import Providers from '@/redux/provider'
import { dir } from 'i18next'
import ParentComponent from '@/components/ParentComponent'


export const metadata: Metadata = {
  title: 'CSGO-Gambling Clone',
}

export default function RootLayout({
  children,
  params: {
    lang
  }
}: {
  children: React.ReactNode,
  params:any
}) {

  return (
    <html lang={lang} dir={dir(lang)}>
      <body >
      <Providers>
        <ParentComponent language={lang}>
          <TopNavigation />
          <SideNavigation />
        </ParentComponent>
        </Providers>
      </body>
    </html>
  )
}
