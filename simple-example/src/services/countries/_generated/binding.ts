import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import schema from  '../schema'

export interface Query {
    continents: <T = Continent[]>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    continent: <T = Continent>(args: { code?: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    countries: <T = Country[]>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    country: <T = Country>(args: { code?: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    languages: <T = Language[]>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    language: <T = Language>(args: { code?: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {}

export interface Subscription {}

export interface Binding {
  query: Query
  mutation: Mutation
  subscription: Subscription
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
  delegateSubscription(fieldName: string, args?: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(...args): T
}

export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })

/**
 * Types
*/

export type CacheControlScope =   'PUBLIC' |
  'PRIVATE'

export interface Language {
  code?: String
  name?: String
  native?: String
  rtl?: Int
}

export interface Country {
  code?: String
  name?: String
  native?: String
  phone?: String
  continent?: Continent
  currency?: String
  languages?: Language[]
  emoji?: String
  emojiU?: String
}

export interface Continent {
  code?: String
  name?: String
}

/*
The `Upload` scalar type represents a file upload promise that resolves an
object containing `stream`, `filename`, `mimetype` and `encoding`.
*/
export type Upload = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string