export const standard = defineScenario({
  user: {
    one: {
      data: {
        id: 1,
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
          create: {
            email: 'moderator@moderator.com',
            name: 'Moderator',
            roles: 'moderator',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
