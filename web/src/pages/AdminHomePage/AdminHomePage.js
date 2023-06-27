import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminHomePage = () => {
  return (
    <>
      <MetaTags title="AdminHome" description="AdminHome page" />

      <h1>Admin</h1>
      <p>
        <Link to={routes.posts()}>Posts</Link>
      </p>
    </>
  )
}

export default AdminHomePage
