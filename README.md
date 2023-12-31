# Grrquarterly app

This repo was created with the final state of the app I created during the [Redwood Tutorial](https://redwoodjs.com/tutorial).

## About
grrquarterly.com is an app where users can upload a photo of their dog and share a story about them. The app is built with [RedwoodJS](https://redwoodjs.com/), a full-stack framework for JAMstack applications.

The story will be generated using [GPT-3](https://openai.com/blog/openai-api/), a language model that can generate human-like text. The app will use the [OpenAI API](https://beta.openai.com/) to generate the story. (just like it did for this README!)

## Setup

The [tutorial itself](https://redwoodjs.com/docs/tutorial/chapter1/prerequisites) contains instructions for getting this repo up and running, but here is a summary of the commands:

```bash
git clone https://github.com/benstraw/grrquartly
cd redwood-tutorial
yarn install
yarn rw prisma migrate dev
yarn rw prisma db seed
yarn rw dev
```
## Development Environment
```bash
# start the server and launch the web:
yarn rw dev

# start storybook server and launch in browser
yarn rw storybook

# start jest test server and launch in browser
yarn rw test

# start prisma studio and launch in browser
yarn rw prisma studio
```
## Reinstall redwoodjs and start over with your project in tact

[thanks](https://rw-community.org/how%20to/reinstall%20rw/)

```bash
# Delete the following set of files/directories:

rm -rf ./.redwood
rm -rf ./.yarn/install-state.gz # (RFC - I'm not 100% sure this file is required, it's only applicable to Yarn v3 regardless)
rm -rf ./api/node_modules
rm -rf ./web/node_modules
rm -rf ./node_modules
rm -rf ./yarn.lock

# Re-install dependencies
yarn install
# Re-generate Redwood types
yarn rw g types
# Re-generate the Prisma client
yarn rw prisma generate
```
## What's been added?
- much more testing
  - api side
    - posts
    - users
- scaffolding for user management
- scaffolding for posts management
- super basic email functionality using brevo (send in blue api)
- password reset flow with email containing a link to reset password with resetToken
- setup github actions ci to run the full build, including setup of the db, and running the tests

### Addition of fontawesome icons
- added fontawesome icons to the package.json
I am not sure if this is the best way to do this, but it works for now. It uses the [@fortawesome/fontawesome-free](https://www.npmjs.com/package/@fortawesome/fontawesome-free) npm package.


```js
// import the package in your top level layout file
import '@fortawesome/fontawesome-free/js/all.js'

// use the icons in your components
<i className="fa fa-user"></i>
```
