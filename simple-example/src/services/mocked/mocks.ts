import casual from 'casual'
import { MockList } from 'graphql-tools'

export const mocks = {
  Int: () => casual.integer(0),
  String: () => casual.string,
  MockObject: () => ({
    name: casual.first_name,
    title: casual.title,
    languages: [casual.language_code, casual.language_code]
  }),
  RootQuery: () => ({
    getMockedObjects: () => new MockList(5)
  })
}
