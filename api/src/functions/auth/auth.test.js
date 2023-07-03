import { mockHttpEvent } from '@redwoodjs/testing/api'

import { handler } from './auth'

// FYI: All this does is fucking nothing. Thank you.
describe('auth handler', () => {
  it('handles login request', async () => {
    // Arrange
    const httpEvent = mockHttpEvent({
      queryStringParameters: {
        username: '20',
        password: '0',
      },
    })

    // Act
    const result = await handler(httpEvent)
    // console.log('\n\n  result: ', result)

    // Assert
    expect(result.statusCode).toBe(404)
  })
})
