# graphql-microservice-starter

GraphQL, data layer abstractions and strongly typed bindings (think ORM/SDK on steroids) are amazing to work with and could pave the way for a new generation of backend stacks.

This repo aims to provide clean starters, as a lot is happening in this space which might overload newcomers.

## Starters

### simple-example

- Showcases how to use **independent GraphQL services with automatic schema stitching**, to power a unified backend
- Everything is derived from a standard `.graphqlconfig.yml`, as single source of truth
- All services expose an executable schema that are stitched together automatically
- Strongly typed bindings are generated automatically and can be used within services to get data from another

## Future ideas

- Add starter with secure authentication & permission system
- Add starter using Prisma (SQL databases without migrations!)
- Add strongly typed full-stack starter with Next.js/GraphQL
- Syndicate bindings for easier imports and improved typings
- More code generation (e.g. automated Canner CMS schemas)
- Look into server-side GraphQL subscriptions
