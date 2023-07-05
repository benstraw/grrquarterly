import { render, screen, waitFor } from '@redwoodjs/testing'

import Header from './Header'

const EMAIL = 'admin@admin.com'
const loggedIn = () => {
  mockCurrentUser({ email: EMAIL, roles: ['admin'] })
}
const loggedOut = () => {
  mockCurrentUser(null)
}

describe('Header', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Header />)
    }).not.toThrow()
  })
  it('displays a Login link when not logged in', async () => {
    loggedOut()
    render(<Header />)

    await waitFor(() => expect(screen.getByText('Login')).toBeInTheDocument())
  })

  it('displays a Logout link when logged in', async () => {
    loggedIn()
    render(<Header />)

    await waitFor(() => expect(screen.getByText('Logout')).toBeInTheDocument())
  })
})
