import { render, screen, waitFor } from '@redwoodjs/testing'

import RyderLayout from './RyderLayout'

const EMAIL = 'user@example.com'
const loggedIn = () => {
  mockCurrentUser({ email: EMAIL })
}
const loggedOut = () => {
  mockCurrentUser(null)
}
// There is really nothing to test on this layout. It is just a wrapper for the pages.
describe('RyderLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RyderLayout />)
    }).not.toThrow()
  })
})
