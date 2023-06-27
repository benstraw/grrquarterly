export const standard = defineScenario({
  comment: {
    jane: {
      data: {
        name: 'Jane Doe',
        body: 'I like trees',
        post: {
          create: {
            title: 'Redwood Leaves',
            body: 'The quick brown fox jumped over the lazy dog.',
            user: {
              create: {
                email: 'String2@foo.zoo',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    john: {
      data: {
        name: 'John Doe',
        body: 'Hug a tree today',
        post: {
          create: {
            title: 'Root Systems',
            body: 'The five boxing wizards jump quickly.',
            user: {
              create: {
                email: 'ring2@foo.zoo',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export const postOnly = defineScenario({
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: "A tree's bark is way worse than its bite",
        user: {
          create: {
            email: 'cgitrieng2@foo.zoo',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
