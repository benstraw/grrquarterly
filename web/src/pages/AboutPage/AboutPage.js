import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <p>
        <Link to={routes.home()}>Back to home</Link>
      </p>
    </>
  )
}

export default AboutPage
