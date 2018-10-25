# simple-example

- Showcases how to use **independent GraphQL services with automatic schema stitching**, to power a unified backend
- Everything is derived from a standard `.graphqlconfig.yml`, as single source of truth
- All services expose an executable schema that will be stitched together by `src/utils/schema.ts`
- Strongly typed bindings are generated automatically and can be used within services to get data from another

## Install

Check out this repo and run `yarn` to install dependencies.

## Commands

```bash
# Fetch all remote schemas
yarn graphql get-schema

# Generate bindings for all services
yarn graphql codegen

# Run local development server
yarn ts-node src/server.ts

# Spawn GraphQL playground
yarn graphql playground
```

## Services

### countries

- Shows how to integrate an external GraphQL API using `makeRemoteExecutableSchema`
- The GraphQL schema is fetched/generated through `yarn graphql get-schema`

### mocked

- Returns faked mock data without resolvers using `addMockFunctionsToSchema`

### xkcd

- Returns the latest xkcd comic (or a specific one)
- Shows how to use resolver to fetch data from external JSON API
- Uses custom DateTime scalar type

### binding-test

- Small service showcasing how to get data from other services using bindings
- Bindings are generated automatically through `yarn graphql codegen`

## Queries

Have a look at the schema for all available queries.

### countries

```graphql
query {
  continents {
    name
  }
}
```

### binding-test

```graphql
query {
  getComicAndCountry {
    country
    comic
  }
}
```

## License

MIT
