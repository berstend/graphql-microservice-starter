import { getGraphQLConfig } from 'graphql-config'
import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const config = getGraphQLConfig().getProjectConfig('xkcd')

export default makeExecutableSchema({ typeDefs: config.getSchemaSDL(), resolvers })
