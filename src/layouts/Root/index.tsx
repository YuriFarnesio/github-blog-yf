import { Outlet, ScrollRestoration } from 'react-router-dom'

import { TopBackground } from '../../components'

export function Root() {
  return (
    <>
      <TopBackground />
      <Outlet />
      <ScrollRestoration />
    </>
  )
}
