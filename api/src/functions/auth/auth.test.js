import { mockHttpEvent } from '@redwoodjs/testing/api'

import { handler } from './auth'

// FYI: All this does is fucking nothing. Thank you.
// Update: This test just saved my ass because it was caught by the CI
// that i had not set the SESSION_SECRET variable in github secrets,
// which broke the build.
describe('auth handler', () => {
  it('handles login request', async () => {
    // Arrange
    const httpEvent = mockHttpEvent({
      queryStringParameters: {
        username: 'none',
        password: 'wrong',
      },
    })

    // Act
    const result = await handler(httpEvent)
    // console.log('\n\n  result: ', result)

    // Assert
    expect(result.statusCode).toBe(404)
  })
})
