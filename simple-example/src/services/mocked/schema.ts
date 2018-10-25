import { getGraphQLConfig } from 'graphql-config'
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools'
import { mocks } from './mocks'

const config = getGraphQLConfig().getProjectConfig('mocked')

// No resolvers necessary when mocking
const schema = makeExecutableSchema({ typeDefs: config.getSchemaSDL() })

addMockFunctionsToSchema({ schema, mocks })

export default schema
