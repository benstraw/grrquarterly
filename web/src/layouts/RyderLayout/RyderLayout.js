import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'
import Header from 'src/components/Header'

const RyderLayout = ({ children }) => {
  return (
    <>
      <Toaster />
      <Header />
      <main className="max-w-4xl mx-auto p-12 bg-white shadow rounded-b">
        {children}
      </main>
    </>
  )
}

export default RyderLayout
