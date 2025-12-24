import type React from 'react'
import { Helmet } from '@dr.pogodin/react-helmet'
import { usePageTitle } from '@/hooks/usePageTitle'
import MainLayout from '@/layouts/MainLayout'

const HomePage = (): React.JSX.Element => {
  const pageTitle = usePageTitle('Home Page 🚀')

  return (
    <MainLayout>
      <section id="home-page">
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        Hero
      </section>
    </MainLayout>
  )
}

export default HomePage
