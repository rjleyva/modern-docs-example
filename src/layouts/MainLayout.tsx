import type React from 'react'

const MainLayout = ({
  children
}: {
  children: React.ReactNode
}): React.JSX.Element => {
  return <main id="main">{children}</main>
}

export default MainLayout
