import BlogLayout from './RyderLayout'

export const loggedIn = () => {
  mockCurrentUser({ email: 'rob@redwoodjs.com' })

  return <BlogLayout />
}

export const loggedOut = () => {
  return <BlogLayout />
}

export default { title: 'Layouts/BlogLayout' }
