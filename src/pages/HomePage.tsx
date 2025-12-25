import type React from 'react'
import { usePageTitle } from '@/hooks/usePageTitle'

const HomePage = (): React.JSX.Element => {
  const pageTitle = usePageTitle('Home Page 🛖')

  return (
    <section id="home-page">
      <title>{pageTitle}</title>
      Hero
    </section>
  )
}

export default HomePage
