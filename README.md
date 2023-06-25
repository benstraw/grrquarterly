# Redwood Tutorial App

This repo represents the final state of the app created during the [Redwood Tutorial](https://redwoodjs.com/tutorial).
It is meant to be a starting point for those working on the second half of the Tutorial, starting at the [Intermission](https://redwoodjs.com/docs/tutorial/intermission).

This repo contains much more styling than the one we built together in the tutorial, but is functionally identical.

## Setup

The [tutorial itself](https://redwoodjs.com/docs/tutorial/chapter1/prerequisites) contains instructions for getting this repo up and running, but here is a summary of the commands:

```bash
git clone https://github.com/redwoodjs/redwood-tutorial
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
rm -rf ./.yarn/install-state.gz (RFC - I'm not 100% sure this file is required, it's only applicable to Yarn v3 regardless)
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
