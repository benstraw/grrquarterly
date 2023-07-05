export const standard = defineScenario({
  user: {
    one: {
      data: {
        id: 3,
        name: 'Admin',
        email: 'String5632270',
        hashedPassword: 'String',
        salt: 'String',
        roles: 'admin',
      },
    },
  },
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        user: {
          create: {
            id: 1,
            email: 'admin@admin.com',
            name: 'Admin',
            roles: 'admin',
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
          connect: { id: 1 },
        },
      },
    },
  },
})
