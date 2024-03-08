// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace LocationsTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _Any: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
  link__Import: { input: any; output: any; }
};

export type link__Purpose =
  | 'SECURITY'
  | 'EXECUTION';

export type _Service = {
  sdl?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  /** The full list of locations presented by the Interplanetary Space Tourism department */
  locations: Array<Location>;
  /** The details of a specific location */
  location?: Maybe<Location>;
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
};


export type QuerylocationArgs = {
  id: Scalars['ID']['input'];
};


export type Query_entitiesArgs = {
  representations: Array<Scalars['_Any']['input']>;
};

export type _Entity = Location;

export type Location = {
  id: Scalars['ID']['output'];
  /** The name of the location */
  name: Scalars['String']['output'];
  /** A short description about the location */
  description: Scalars['String']['output'];
  /** The location's main photo as a URL */
  photo: Scalars['String']['output'];
};

  export type QuerySdk = {
      /** The full list of locations presented by the Interplanetary Space Tourism department **/
  locations: InContextSdkMethod<Query['locations'], {}, MeshContext>,
  /** The details of a specific location **/
  location: InContextSdkMethod<Query['location'], QuerylocationArgs, MeshContext>,
  /** undefined **/
  _entities: InContextSdkMethod<Query['_entities'], Query_entitiesArgs, MeshContext>,
  /** undefined **/
  _service: InContextSdkMethod<Query['_service'], {}, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Locations"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
