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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ISO8601DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

/** Form error */
export type Error = {
  __typename?: 'Error';
  /** Error details */
  details?: Maybe<Scalars['JSON']['output']>;
  /** Field of the error */
  field: Scalars['String']['output'];
  /** Error message */
  message: Scalars['String']['output'];
};

/** Autogenerated return type of ForgotPassword. */
export type ForgotPasswordPayload = {
  __typename?: 'ForgotPasswordPayload';
  errors: Array<Error>;
  success: Scalars['Boolean']['output'];
  valid: Scalars['Boolean']['output'];
};

export type GraphqlAuth = {
  forgotPassword?: Maybe<ForgotPasswordPayload>;
  lockAccount?: Maybe<LockAccountPayload>;
  resetPassword?: Maybe<ResetPasswordPayload>;
  signIn?: Maybe<SignInPayload>;
  signUp?: Maybe<SignUpPayload>;
  unlockAccount?: Maybe<UnlockAccountPayload>;
  updateAccount?: Maybe<UpdateAccountPayload>;
  validateToken?: Maybe<ValidateTokenPayload>;
};


export type GraphqlAuthForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type GraphqlAuthLockAccountArgs = {
  id: Scalars['ID']['input'];
};


export type GraphqlAuthResetPasswordArgs = {
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  resetPasswordToken: Scalars['String']['input'];
};


export type GraphqlAuthSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  rememberMe?: InputMaybe<Scalars['Boolean']['input']>;
};


export type GraphqlAuthSignUpArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type GraphqlAuthUnlockAccountArgs = {
  id: Scalars['ID']['input'];
};


export type GraphqlAuthUpdateAccountArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type ItemOrder = {
  /** The attribute you want to order by. */
  attribute: Scalars['String']['input'];
  /** Set a direction with "asc" or "desc". */
  direction: Scalars['String']['input'];
};

/** Autogenerated return type of LockAccount. */
export type LockAccountPayload = {
  __typename?: 'LockAccountPayload';
  errors: Array<Error>;
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Mutation = GraphqlAuth & {
  __typename?: 'Mutation';
  /** Accepts an invitation for a user */
  acceptInvite?: Maybe<Scalars['Boolean']['output']>;
  /** Creates a Plan */
  createPlan?: Maybe<Plan>;
  /** Deletes an user as an admin. */
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  forgotPassword?: Maybe<ForgotPasswordPayload>;
  /** Invites an user to your account. */
  inviteUser?: Maybe<User>;
  lockAccount?: Maybe<LockAccountPayload>;
  resetPassword?: Maybe<ResetPasswordPayload>;
  signIn?: Maybe<SignInPayload>;
  signUp?: Maybe<SignUpPayload>;
  unlockAccount?: Maybe<UnlockAccountPayload>;
  updateAccount?: Maybe<UpdateAccountPayload>;
  /** Updates an existing user as an admin. */
  updateUser?: Maybe<User>;
  /** Updates the role for an user as an admin. */
  updateUserRole?: Maybe<Scalars['Boolean']['output']>;
  validateToken?: Maybe<ValidateTokenPayload>;
};


export type MutationAcceptInviteArgs = {
  attributes: UserInput;
  invitationToken: Scalars['String']['input'];
};


export type MutationCreatePlanArgs = {
  attributes: PlanInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationInviteUserArgs = {
  attributes: UserInput;
};


export type MutationLockAccountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  resetPasswordToken: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  rememberMe?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSignUpArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUnlockAccountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAccountArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  attributes: UserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserRoleArgs = {
  id: Scalars['ID']['input'];
  role: Scalars['String']['input'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Plan = {
  __typename?: 'Plan';
  createdAt: Scalars['ISO8601DateTime']['output'];
  customerId: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  status: StatusEnum;
  step: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  visa: VisaEnum;
};

/** Attributes to create a brand new Plan for a customer */
export type PlanInput = {
  /** Customer that belongs to the Plan */
  customerId?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Returns the current user */
  me?: Maybe<User>;
  /** Returns the user for a requested id */
  user?: Maybe<User>;
  /** Returns all user for the current user company */
  users: UserConnection;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemOrder>;
};

/** Autogenerated return type of ResetPassword. */
export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  errors: Array<Error>;
  success: Scalars['Boolean']['output'];
};

/** Autogenerated return type of SignIn. */
export type SignInPayload = {
  __typename?: 'SignInPayload';
  errors: Array<Error>;
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

/** Autogenerated return type of SignUp. */
export type SignUpPayload = {
  __typename?: 'SignUpPayload';
  errors: Array<Error>;
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export enum StatusEnum {
  WaitingAdmin = 'waiting_admin',
  WaitingCustomer = 'waiting_customer',
  WaitingSupport = 'waiting_support'
}

/** Autogenerated return type of UnlockAccount. */
export type UnlockAccountPayload = {
  __typename?: 'UnlockAccountPayload';
  errors: Array<Error>;
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

/** Autogenerated return type of UpdateAccount. */
export type UpdateAccountPayload = {
  __typename?: 'UpdateAccountPayload';
  errors: Array<Error>;
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isConfirmed: Scalars['Boolean']['output'];
  isLocked: Scalars['Boolean']['output'];
  jwt?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

export type UserFilter = {
  OR?: InputMaybe<Array<UserFilter>>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

/** Attributes to create a user. */
export type UserInput = {
  /** Email of user */
  email: Scalars['String']['input'];
  /** Firstname of user */
  firstName: Scalars['String']['input'];
  /** Lastname of user */
  lastName: Scalars['String']['input'];
  /** Password of user */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Password confirmation */
  passwordConfirmation?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of ValidateToken. */
export type ValidateTokenPayload = {
  __typename?: 'ValidateTokenPayload';
  errors: Array<Error>;
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
  valid: Scalars['Boolean']['output'];
};

export enum VisaEnum {
  Eta = 'eta',
  GreenCard = 'green_card',
  Tourism = 'tourism'
}

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string } | null };


export const MeDocument = gql`
    query me {
  me {
    id
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;