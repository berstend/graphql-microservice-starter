import { GraphQLSchema } from 'graphql'
import { getGraphQLConfig } from 'graphql-config'
import * as path from 'path'

// Fetches all executable schemas listed in .graphqlconfig.yml
export const getSchemas = async (): Promise<GraphQLSchema[]> => {
  const projects = getGraphQLConfig().getProjects()
  const importPromises = [] as any[]
  if (!projects || !Object.keys(projects).length) return []

  for (const [name, config] of Object.entries(projects)) {
    if (!name || !config || !config.extensions) continue
    // Ignore certain schemas, e.g. the public one or Prisma
    if (config.extensions.merge === false) continue
    // Executable schema is listed in 'config.extensions.codegen.input'
    if (!config.extensions.codegen || !config.extensions.codegen.input) continue

    importPromises.push(import(path.join(process.cwd(), config.extensions.codegen.input)))
  }
  return (await Promise.all(importPromises)).map(f => f.default)
}
