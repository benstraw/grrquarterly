export const standard = defineScenario({
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
