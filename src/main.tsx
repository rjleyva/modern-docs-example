import { StrictMode } from 'react'
import { HelmetProvider } from '@dr.pogodin/react-helmet'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import routes from './routes/routes'
import './styles/globals.css'

const router = createBrowserRouter(routes, {
  basename: '/'
})

const rootElement = document.getElementById('root')

if (!(rootElement instanceof HTMLElement)) {
  throw new Error('Root element not found. Cannot mount React application.')
}

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
)
