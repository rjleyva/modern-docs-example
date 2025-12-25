import type React from 'react'
import { Helmet } from '@dr.pogodin/react-helmet'
import { usePageTitle } from '@/hooks/usePageTitle'

const HomePage = (): React.JSX.Element => {
  const pageTitle = usePageTitle('Home Page 🛖')

  return (
    <section id="home-page">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      Hero
    </section>
  )
}

export default HomePage
