import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage'

const rootElement = document.getElementById('root')

if (!(rootElement instanceof HTMLElement)) {
  throw new Error('Root element not found. Cannot mount React application.')
}

createRoot(rootElement).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
)
