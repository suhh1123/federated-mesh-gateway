// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ReviewsTypes {
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
  /** The three latest reviews submitted for FlyBy's locations */
  latestReviews: Array<Review>;
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
};


export type Query_entitiesArgs = {
  representations: Array<Scalars['_Any']['input']>;
};

export type _Entity = Location;

export type Review = {
  id: Scalars['ID']['output'];
  /** Written text */
  comment?: Maybe<Scalars['String']['output']>;
  /** A number from 1 - 5 with 1 being lowest and 5 being highest */
  rating?: Maybe<Scalars['Int']['output']>;
  /** The location the review is about */
  location?: Maybe<Location>;
};

export type Mutation = {
  submitReview?: Maybe<SubmitReviewResponse>;
};


export type MutationsubmitReviewArgs = {
  locationReview?: InputMaybe<LocationReviewInput>;
};

export type LocationReviewInput = {
  /** Written text */
  comment: Scalars['String']['input'];
  /** A number from 1 - 5 with 1 being lowest and 5 being highest */
  rating: Scalars['Int']['input'];
  /** Location Id */
  locationId: Scalars['String']['input'];
};

export type SubmitReviewResponse = {
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Newly created review */
  locationReview?: Maybe<Review>;
};

export type Location = {
  id: Scalars['ID']['output'];
  /** The calculated overall rating based on all reviews */
  overallRating?: Maybe<Scalars['Float']['output']>;
  /** All submitted reviews about this location */
  reviewsForLocation: Array<Maybe<Review>>;
};

  export type QuerySdk = {
      /** The three latest reviews submitted for FlyBy's locations **/
  latestReviews: InContextSdkMethod<Query['latestReviews'], {}, MeshContext>,
  /** undefined **/
  _entities: InContextSdkMethod<Query['_entities'], Query_entitiesArgs, MeshContext>,
  /** undefined **/
  _service: InContextSdkMethod<Query['_service'], {}, MeshContext>
  };

  export type MutationSdk = {
      /** undefined **/
  submitReview: InContextSdkMethod<Mutation['submitReview'], MutationsubmitReviewArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Reviews"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
