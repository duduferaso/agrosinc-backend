import { GraphQLResolveInfo } from 'graphql';
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
};

export type Agricultor = {
  __typename?: 'Agricultor';
  cep?: Maybe<Scalars['String']['output']>;
  cidade?: Maybe<Scalars['String']['output']>;
  cpf?: Maybe<Scalars['String']['output']>;
  datanascimento?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  endereco?: Maybe<Scalars['String']['output']>;
  estado?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nome: Scalars['String']['output'];
  sexo?: Maybe<Scalars['String']['output']>;
  sobrenome: Scalars['String']['output'];
  telefone?: Maybe<Scalars['String']['output']>;
};

export type AgricultorInput = {
  cep?: InputMaybe<Scalars['String']['input']>;
  cidade?: InputMaybe<Scalars['String']['input']>;
  cpf?: InputMaybe<Scalars['String']['input']>;
  datanascimento?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  endereco?: InputMaybe<Scalars['String']['input']>;
  estado?: InputMaybe<Scalars['String']['input']>;
  nome: Scalars['String']['input'];
  sexo?: InputMaybe<Scalars['String']['input']>;
  sobrenome: Scalars['String']['input'];
  telefone?: InputMaybe<Scalars['String']['input']>;
};

export type Area = {
  __typename?: 'Area';
  id: Scalars['ID']['output'];
  idagricultor: Scalars['ID']['output'];
  nome: Scalars['String']['output'];
  tipoarea?: Maybe<Scalars['Boolean']['output']>;
};

export type AreaInput = {
  idagricultor: Scalars['ID']['input'];
  nome: Scalars['String']['input'];
  tipoarea?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DadosClimaticos = {
  __typename?: 'DadosClimaticos';
  data: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  tipodado: Scalars['String']['output'];
  titulo: Scalars['String']['output'];
};

export type DadosClimaticosInput = {
  data: Scalars['String']['input'];
  tipodado: Scalars['String']['input'];
  titulo: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  atualizarAgricultor?: Maybe<Agricultor>;
  atualizarArea?: Maybe<Area>;
  atualizarDadosClimaticos?: Maybe<DadosClimaticos>;
  atualizarNoticiaSemana?: Maybe<NoticiaSemana>;
  atualizarUsuario?: Maybe<Usuario>;
  criarAgricultor?: Maybe<Agricultor>;
  criarArea?: Maybe<Area>;
  criarDadosClimaticos?: Maybe<DadosClimaticos>;
  criarNoticiaSemana?: Maybe<NoticiaSemana>;
  criarUsuario?: Maybe<Usuario>;
  excluirAgricultor?: Maybe<Agricultor>;
  excluirArea?: Maybe<Area>;
  excluirDadosClimaticos?: Maybe<DadosClimaticos>;
  excluirNoticiaSemana?: Maybe<NoticiaSemana>;
  excluirUsuario?: Maybe<Usuario>;
  login?: Maybe<Scalars['String']['output']>;
};


export type MutationAtualizarAgricultorArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<AgricultorInput>;
};


export type MutationAtualizarAreaArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<AreaInput>;
};


export type MutationAtualizarDadosClimaticosArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<DadosClimaticosInput>;
};


export type MutationAtualizarNoticiaSemanaArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<NoticiaSemanaInput>;
};


export type MutationAtualizarUsuarioArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UsuarioInput>;
};


export type MutationCriarAgricultorArgs = {
  input?: InputMaybe<AgricultorInput>;
};


export type MutationCriarAreaArgs = {
  input?: InputMaybe<AreaInput>;
};


export type MutationCriarDadosClimaticosArgs = {
  input?: InputMaybe<DadosClimaticosInput>;
};


export type MutationCriarNoticiaSemanaArgs = {
  input?: InputMaybe<NoticiaSemanaInput>;
};


export type MutationCriarUsuarioArgs = {
  input?: InputMaybe<UsuarioInput>;
};


export type MutationExcluirAgricultorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExcluirAreaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExcluirDadosClimaticosArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExcluirNoticiaSemanaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExcluirUsuarioArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  nome: Scalars['String']['input'];
  senha: Scalars['String']['input'];
};

export type NoticiaSemana = {
  __typename?: 'NoticiaSemana';
  conteudo: Scalars['String']['output'];
  data_publicacao?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  titulo: Scalars['String']['output'];
};

export type NoticiaSemanaInput = {
  conteudo: Scalars['String']['input'];
  data_publicacao?: InputMaybe<Scalars['String']['input']>;
  titulo: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  agricultor?: Maybe<Agricultor>;
  agricultores?: Maybe<Array<Maybe<Agricultor>>>;
  area?: Maybe<Area>;
  areas?: Maybe<Array<Maybe<Area>>>;
  dadosclimatico?: Maybe<DadosClimaticos>;
  dadosclimaticos?: Maybe<Array<Maybe<DadosClimaticos>>>;
  noticianasemana?: Maybe<NoticiaSemana>;
  noticiasemana?: Maybe<Array<Maybe<NoticiaSemana>>>;
  usuario?: Maybe<Usuario>;
  usuarios?: Maybe<Array<Maybe<Usuario>>>;
};


export type QueryAgricultorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAreaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDadosclimaticoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoticianasemanaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsuarioArgs = {
  id: Scalars['ID']['input'];
};

export type Usuario = {
  __typename?: 'Usuario';
  id: Scalars['ID']['output'];
  nome: Scalars['String']['output'];
  senha?: Maybe<Scalars['String']['output']>;
};

export type UsuarioInput = {
  nome: Scalars['String']['input'];
  senha: Scalars['String']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Agricultor: ResolverTypeWrapper<Agricultor>;
  AgricultorInput: AgricultorInput;
  Area: ResolverTypeWrapper<Area>;
  AreaInput: AreaInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DadosClimaticos: ResolverTypeWrapper<DadosClimaticos>;
  DadosClimaticosInput: DadosClimaticosInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  NoticiaSemana: ResolverTypeWrapper<NoticiaSemana>;
  NoticiaSemanaInput: NoticiaSemanaInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Usuario: ResolverTypeWrapper<Usuario>;
  UsuarioInput: UsuarioInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Agricultor: Agricultor;
  AgricultorInput: AgricultorInput;
  Area: Area;
  AreaInput: AreaInput;
  Boolean: Scalars['Boolean']['output'];
  DadosClimaticos: DadosClimaticos;
  DadosClimaticosInput: DadosClimaticosInput;
  ID: Scalars['ID']['output'];
  Mutation: {};
  NoticiaSemana: NoticiaSemana;
  NoticiaSemanaInput: NoticiaSemanaInput;
  Query: {};
  String: Scalars['String']['output'];
  Usuario: Usuario;
  UsuarioInput: UsuarioInput;
};

export type AgricultorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agricultor'] = ResolversParentTypes['Agricultor']> = {
  cep?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cidade?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cpf?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  datanascimento?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endereco?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  estado?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nome?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sexo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sobrenome?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  telefone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AreaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Area'] = ResolversParentTypes['Area']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  idagricultor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nome?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tipoarea?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DadosClimaticosResolvers<ContextType = any, ParentType extends ResolversParentTypes['DadosClimaticos'] = ResolversParentTypes['DadosClimaticos']> = {
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tipodado?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  titulo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  atualizarAgricultor?: Resolver<Maybe<ResolversTypes['Agricultor']>, ParentType, ContextType, RequireFields<MutationAtualizarAgricultorArgs, 'id'>>;
  atualizarArea?: Resolver<Maybe<ResolversTypes['Area']>, ParentType, ContextType, RequireFields<MutationAtualizarAreaArgs, 'id'>>;
  atualizarDadosClimaticos?: Resolver<Maybe<ResolversTypes['DadosClimaticos']>, ParentType, ContextType, RequireFields<MutationAtualizarDadosClimaticosArgs, 'id'>>;
  atualizarNoticiaSemana?: Resolver<Maybe<ResolversTypes['NoticiaSemana']>, ParentType, ContextType, RequireFields<MutationAtualizarNoticiaSemanaArgs, 'id'>>;
  atualizarUsuario?: Resolver<Maybe<ResolversTypes['Usuario']>, ParentType, ContextType, RequireFields<MutationAtualizarUsuarioArgs, 'id'>>;
  criarAgricultor?: Resolver<Maybe<ResolversTypes['Agricultor']>, ParentType, ContextType, Partial<MutationCriarAgricultorArgs>>;
  criarArea?: Resolver<Maybe<ResolversTypes['Area']>, ParentType, ContextType, Partial<MutationCriarAreaArgs>>;
  criarDadosClimaticos?: Resolver<Maybe<ResolversTypes['DadosClimaticos']>, ParentType, ContextType, Partial<MutationCriarDadosClimaticosArgs>>;
  criarNoticiaSemana?: Resolver<Maybe<ResolversTypes['NoticiaSemana']>, ParentType, ContextType, Partial<MutationCriarNoticiaSemanaArgs>>;
  criarUsuario?: Resolver<Maybe<ResolversTypes['Usuario']>, ParentType, ContextType, Partial<MutationCriarUsuarioArgs>>;
  excluirAgricultor?: Resolver<Maybe<ResolversTypes['Agricultor']>, ParentType, ContextType, RequireFields<MutationExcluirAgricultorArgs, 'id'>>;
  excluirArea?: Resolver<Maybe<ResolversTypes['Area']>, ParentType, ContextType, RequireFields<MutationExcluirAreaArgs, 'id'>>;
  excluirDadosClimaticos?: Resolver<Maybe<ResolversTypes['DadosClimaticos']>, ParentType, ContextType, RequireFields<MutationExcluirDadosClimaticosArgs, 'id'>>;
  excluirNoticiaSemana?: Resolver<Maybe<ResolversTypes['NoticiaSemana']>, ParentType, ContextType, RequireFields<MutationExcluirNoticiaSemanaArgs, 'id'>>;
  excluirUsuario?: Resolver<Maybe<ResolversTypes['Usuario']>, ParentType, ContextType, RequireFields<MutationExcluirUsuarioArgs, 'id'>>;
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'nome' | 'senha'>>;
};

export type NoticiaSemanaResolvers<ContextType = any, ParentType extends ResolversParentTypes['NoticiaSemana'] = ResolversParentTypes['NoticiaSemana']> = {
  conteudo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data_publicacao?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  titulo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  agricultor?: Resolver<Maybe<ResolversTypes['Agricultor']>, ParentType, ContextType, RequireFields<QueryAgricultorArgs, 'id'>>;
  agricultores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Agricultor']>>>, ParentType, ContextType>;
  area?: Resolver<Maybe<ResolversTypes['Area']>, ParentType, ContextType, RequireFields<QueryAreaArgs, 'id'>>;
  areas?: Resolver<Maybe<Array<Maybe<ResolversTypes['Area']>>>, ParentType, ContextType>;
  dadosclimatico?: Resolver<Maybe<ResolversTypes['DadosClimaticos']>, ParentType, ContextType, RequireFields<QueryDadosclimaticoArgs, 'id'>>;
  dadosclimaticos?: Resolver<Maybe<Array<Maybe<ResolversTypes['DadosClimaticos']>>>, ParentType, ContextType>;
  noticianasemana?: Resolver<Maybe<ResolversTypes['NoticiaSemana']>, ParentType, ContextType, RequireFields<QueryNoticianasemanaArgs, 'id'>>;
  noticiasemana?: Resolver<Maybe<Array<Maybe<ResolversTypes['NoticiaSemana']>>>, ParentType, ContextType>;
  usuario?: Resolver<Maybe<ResolversTypes['Usuario']>, ParentType, ContextType, RequireFields<QueryUsuarioArgs, 'id'>>;
  usuarios?: Resolver<Maybe<Array<Maybe<ResolversTypes['Usuario']>>>, ParentType, ContextType>;
};

export type UsuarioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Usuario'] = ResolversParentTypes['Usuario']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nome?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  senha?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Agricultor?: AgricultorResolvers<ContextType>;
  Area?: AreaResolvers<ContextType>;
  DadosClimaticos?: DadosClimaticosResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NoticiaSemana?: NoticiaSemanaResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Usuario?: UsuarioResolvers<ContextType>;
};

