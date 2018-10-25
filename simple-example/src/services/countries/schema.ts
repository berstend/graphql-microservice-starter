import { HttpLink } from 'apollo-link-http'
import { getGraphQLConfig } from 'graphql-config'
import { makeRemoteExecutableSchema } from 'graphql-tools'
import fetch from 'isomorphic-fetch'

const config = getGraphQLConfig().getProjectConfig('countries')
const uri = config.endpointsExtension.getEndpoint('default', process.env).url
const link = new HttpLink({ uri, fetch })

export default makeRemoteExecutableSchema({ schema: config.getSchema(), link })
