// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Header {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Header from './Header'

export const loggedOutView = () => {
  return <Header />
}

export const moderatorView = () => {
  mockCurrentUser({
    id: 1,
    email: 'moderator@moderator.com',
    roles: 'moderator',
  })
  return <Header />
}

export const adminView = () => {
  mockCurrentUser({
    id: 1,
    email: 'admin@admin.com',
    roles: 'admin',
  })
  return <Header />
}

export const userView = () => {
  mockCurrentUser({
    id: 1,
    email: 'user@user.com',
    roles: 'user',
  })
  return <Header />
}

export default {
  title: 'Components/Header',
  component: Header,
}
