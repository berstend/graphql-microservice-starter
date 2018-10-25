import { mergeSchemas } from 'graphql-tools'
import { GraphQLServer } from 'graphql-yoga'

import { getSchemas } from './utils/schema'

const runServer = async () => {
  const schemas = await getSchemas()

  const server = new GraphQLServer({ schema: mergeSchemas({ schemas }) })
  server.express.get('/', async (req, res) => res.send('Hello world'))

  const options = {
    port: process.env.PORT || 4000,
    endpoint: '/graphql',
    playground: '/playground'
  }
  server.start(options, options =>
    console.log(`
      Server running:
      Web: http://localhost:${options.port}
      GraphQL endpoint: http://localhost:${options.port}${options.endpoint}
      GraphQL playground: http://localhost:${options.port}${options.playground}
    `)
  )
}

runServer().catch(console.warn)
