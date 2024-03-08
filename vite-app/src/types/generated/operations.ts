import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
export type GetLatestReivewQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLatestReivewQuery = { __typename?: 'Query', latestReviews: Array<{ __typename?: 'Review', id: string, comment?: string | null, rating?: number | null, location?: { __typename?: 'Location', id: string, name: string, overallRating?: number | null } | null }> };

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

export type LocationReviewInput = {
  /** Written text */
  comment: Scalars['String']['input'];
  /** Location Id */
  locationId: Scalars['String']['input'];
  /** A number from 1 - 5 with 1 being lowest and 5 being highest */
  rating: Scalars['Int']['input'];
};

export enum Link__Purpose {
  Execution = 'EXECUTION',
  Security = 'SECURITY'
}


export const GetLatestReivewDocument = gql`
    query GetLatestReivew {
  latestReviews {
    id
    comment
    rating
    location {
      id
      name
      overallRating
    }
  }
}
    `;

/**
 * __useGetLatestReivewQuery__
 *
 * To run a query within a React component, call `useGetLatestReivewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestReivewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestReivewQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLatestReivewQuery(baseOptions?: Apollo.QueryHookOptions<GetLatestReivewQuery, GetLatestReivewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLatestReivewQuery, GetLatestReivewQueryVariables>(GetLatestReivewDocument, options);
      }
export function useGetLatestReivewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLatestReivewQuery, GetLatestReivewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLatestReivewQuery, GetLatestReivewQueryVariables>(GetLatestReivewDocument, options);
        }
export function useGetLatestReivewSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLatestReivewQuery, GetLatestReivewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLatestReivewQuery, GetLatestReivewQueryVariables>(GetLatestReivewDocument, options);
        }
export type GetLatestReivewQueryHookResult = ReturnType<typeof useGetLatestReivewQuery>;
export type GetLatestReivewLazyQueryHookResult = ReturnType<typeof useGetLatestReivewLazyQuery>;
export type GetLatestReivewSuspenseQueryHookResult = ReturnType<typeof useGetLatestReivewSuspenseQuery>;
export type GetLatestReivewQueryResult = Apollo.QueryResult<GetLatestReivewQuery, GetLatestReivewQueryVariables>;