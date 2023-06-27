export const standard = defineScenario({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        user: {
          create: {
            email: 'String2@foo.zoo',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        user: {
          create: {
            email: 'String@foo.foo',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
