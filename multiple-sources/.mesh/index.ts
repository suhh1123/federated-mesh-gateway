// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { LocationsTypes } from './sources/Locations/types';
import type { ReviewsTypes } from './sources/Reviews/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type Query = {
  /** The three latest reviews submitted for FlyBy's locations */
  latestReviews: Array<Review>;
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  /** The full list of locations presented by the Interplanetary Space Tourism department */
  locations: Array<Location>;
  /** The details of a specific location */
  location?: Maybe<Location>;
};


export type Query_entitiesArgs = {
  representations: Array<Scalars['_Any']['input']>;
};


export type QuerylocationArgs = {
  id: Scalars['ID']['input'];
};

export type Mutation = {
  submitReview?: Maybe<SubmitReviewResponse>;
};


export type MutationsubmitReviewArgs = {
  locationReview?: InputMaybe<LocationReviewInput>;
};

export type link__Purpose =
  | 'SECURITY'
  | 'EXECUTION';

export type _Service = {
  sdl?: Maybe<Scalars['String']['output']>;
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
  /** The name of the location */
  name: Scalars['String']['output'];
  /** A short description about the location */
  description: Scalars['String']['output'];
  /** The location's main photo as a URL */
  photo: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  _Entity: ( Location );
}>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  _Any: ResolverTypeWrapper<Scalars['_Any']['output']>;
  _FieldSet: ResolverTypeWrapper<Scalars['_FieldSet']['output']>;
  link__Import: ResolverTypeWrapper<Scalars['link__Import']['output']>;
  link__Purpose: link__Purpose;
  _Service: ResolverTypeWrapper<_Service>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  _Entity: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['_Entity']>;
  Review: ResolverTypeWrapper<Review>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LocationReviewInput: LocationReviewInput;
  SubmitReviewResponse: ResolverTypeWrapper<SubmitReviewResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Location: ResolverTypeWrapper<Location>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Mutation: {};
  _Any: Scalars['_Any']['output'];
  _FieldSet: Scalars['_FieldSet']['output'];
  link__Import: Scalars['link__Import']['output'];
  _Service: _Service;
  String: Scalars['String']['output'];
  _Entity: ResolversUnionTypes<ResolversParentTypes>['_Entity'];
  Review: Review;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  LocationReviewInput: LocationReviewInput;
  SubmitReviewResponse: SubmitReviewResponse;
  Boolean: Scalars['Boolean']['output'];
  Location: Location;
  Float: Scalars['Float']['output'];
}>;

export type externalDirectiveArgs = {
  reason?: Maybe<Scalars['String']['input']>;
};

export type externalDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = externalDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type requiresDirectiveArgs = {
  fields: Scalars['_FieldSet']['input'];
};

export type requiresDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = requiresDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type providesDirectiveArgs = {
  fields: Scalars['_FieldSet']['input'];
};

export type providesDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = providesDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type keyDirectiveArgs = {
  fields: Scalars['_FieldSet']['input'];
  resolvable?: Maybe<Scalars['Boolean']['input']>;
};

export type keyDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = keyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type linkDirectiveArgs = {
  url: Scalars['String']['input'];
  as?: Maybe<Scalars['String']['input']>;
  for?: Maybe<link__Purpose>;
  import?: Maybe<Array<Maybe<Scalars['link__Import']['input']>>>;
};

export type linkDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = linkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type shareableDirectiveArgs = { };

export type shareableDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = shareableDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type inaccessibleDirectiveArgs = { };

export type inaccessibleDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = inaccessibleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type tagDirectiveArgs = {
  name: Scalars['String']['input'];
};

export type tagDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = tagDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type overrideDirectiveArgs = {
  from: Scalars['String']['input'];
};

export type overrideDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = overrideDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type composeDirectiveDirectiveArgs = {
  name: Scalars['String']['input'];
};

export type composeDirectiveDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = composeDirectiveDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type extendsDirectiveArgs = { };

export type extendsDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = extendsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  latestReviews?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType>;
  _entities?: Resolver<Array<Maybe<ResolversTypes['_Entity']>>, ParentType, ContextType, RequireFields<Query_entitiesArgs, 'representations'>>;
  _service?: Resolver<ResolversTypes['_Service'], ParentType, ContextType>;
  locations?: Resolver<Array<ResolversTypes['Location']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<QuerylocationArgs, 'id'>>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  submitReview?: Resolver<Maybe<ResolversTypes['SubmitReviewResponse']>, ParentType, ContextType, Partial<MutationsubmitReviewArgs>>;
}>;

export interface _AnyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_Any'], any> {
  name: '_Any';
}

export interface _FieldSetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_FieldSet'], any> {
  name: '_FieldSet';
}

export interface link__ImportScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['link__Import'], any> {
  name: 'link__Import';
}

export type _ServiceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Service'] = ResolversParentTypes['_Service']> = ResolversObject<{
  sdl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _EntityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Entity'] = ResolversParentTypes['_Entity']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Location', ParentType, ContextType>;
}>;

export type ReviewResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubmitReviewResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SubmitReviewResponse'] = ResolversParentTypes['SubmitReviewResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  overallRating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reviewsForLocation?: Resolver<Array<Maybe<ResolversTypes['Review']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  _Any?: GraphQLScalarType;
  _FieldSet?: GraphQLScalarType;
  link__Import?: GraphQLScalarType;
  _Service?: _ServiceResolvers<ContextType>;
  _Entity?: _EntityResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  SubmitReviewResponse?: SubmitReviewResponseResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  external?: externalDirectiveResolver<any, any, ContextType>;
  requires?: requiresDirectiveResolver<any, any, ContextType>;
  provides?: providesDirectiveResolver<any, any, ContextType>;
  key?: keyDirectiveResolver<any, any, ContextType>;
  link?: linkDirectiveResolver<any, any, ContextType>;
  shareable?: shareableDirectiveResolver<any, any, ContextType>;
  inaccessible?: inaccessibleDirectiveResolver<any, any, ContextType>;
  tag?: tagDirectiveResolver<any, any, ContextType>;
  override?: overrideDirectiveResolver<any, any, ContextType>;
  composeDirective?: composeDirectiveDirectiveResolver<any, any, ContextType>;
  extends?: extendsDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = ReviewsTypes.Context & LocationsTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));