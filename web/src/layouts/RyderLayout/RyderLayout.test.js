import { render } from '@redwoodjs/testing/web'

import RyderLayout from './RyderLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RyderLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RyderLayout />)
    }).not.toThrow()
  })
})
