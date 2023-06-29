import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminHomePage = () => {
  return (
    <>
      <MetaTags title="AdminHome" description="AdminHome page" />

      <h1>Admin Home</h1>
      <p>
        <li>
          <Link to={routes.posts()}>Posts</Link>
        </li>
        <li>
          <Link to={routes.users()}>Users</Link>
        </li>
      </p>
    </>
  )
}

export default AdminHomePage
