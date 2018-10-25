import { getGraphQLConfig } from 'graphql-config'
import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const config = getGraphQLConfig().getProjectConfig('binding-test')

export default makeExecutableSchema({ typeDefs: config.getSchemaSDL(), resolvers })
