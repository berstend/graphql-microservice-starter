import { DateTime } from '@okgrow/graphql-scalars'
import { IResolvers } from 'graphql-tools'
import fetch from 'isomorphic-fetch'

const BASE_URL = 'https://xkcd.com'

const getLatestComic = async () => {
  const response = await fetch(`${BASE_URL}/info.0.json`)
  return response.json()
}

const getComicById = async id => {
  const response = await fetch(`${BASE_URL}/${id}/info.0.json`)
  return response.json()
}

export const resolvers = {
  // Custom scalar
  DateTime,

  Query: {
    getLatestComic: (root, args, ctx, info) => getLatestComic(),
    getComicById: (obj, { id }, ctx) => getComicById(id)
  },
  XKCD_Comic: {
    // The link is often empty, so build one if it’s not returned.
    link: data => data.link || `https://xkcd.com/${data.num}/`,
    retrievedAt: () => new Date()
  }
} as IResolvers
