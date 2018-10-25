import { IResolvers } from 'graphql-tools'
import { Binding as CountriesBinding } from '../countries/_generated/binding'
import { Binding as XkcdBinding } from '../xkcd/_generated/binding'

const countries = new CountriesBinding()
const xkcd = new XkcdBinding()

export const resolvers = {
  Query: {
    getComicAndCountry: async (root, args, ctx, info) => {
      const countryList = await countries.query.countries({}, `{ name }`)
      return {
        comic: (await xkcd.query.getLatestComic()).img,
        country: countryList[3].name // Antigua and Barbuda
      }
    }
  }
} as IResolvers
