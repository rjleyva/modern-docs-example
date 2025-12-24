import { StrictMode } from 'react'
import { HelmetProvider } from '@dr.pogodin/react-helmet'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage'

const rootElement = document.getElementById('root')

if (!(rootElement instanceof HTMLElement)) {
  throw new Error('Root element not found. Cannot mount React application.')
}

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <HomePage />
    </HelmetProvider>
  </StrictMode>
)
