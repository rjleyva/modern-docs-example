import type React from 'react'
import { Outlet } from 'react-router'

const MainLayout = (): React.JSX.Element => {
  return (
    <main id="main">
      <Outlet />
    </main>
  )
}

export default MainLayout
