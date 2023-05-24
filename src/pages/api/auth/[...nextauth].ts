/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApollo } from '@/config/graphql';
import { SignInDocument } from '@/generated/graphql'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

type AuthorizeProps = {
  email: string
  password: string
}

const options: AuthOptions = {
  pages: {
    signIn: '/login'
  },
  providers: [
    Credentials({
      name: 'Sign-in',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as AuthorizeProps

        const client = initializeApollo()
        try {
          const rep = client.mutate(
            {
              mutation: SignInDocument,
              variables: {
                email,
                password,
                rememberMe: true
              }
            },
          )

          const { ...resp } = await rep
          // console.log("after authorize => ", { ...resp })
          const success = resp?.data?.signIn.success
          if (success) {
            const { user } = resp?.data?.signIn
            return user
          } else {
            return null
          }
        } catch (err) {
          console.log({ err })
        }
      }
    })
  ],
  callbacks: {
    session: async ({ session, token: token, user }) => {
      session.user = user
      return await Promise.resolve({ ...session, jwt: token })
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token = { ...user, jwt: (user as any).jwt }
      }

      // console.log('token => ', token)
      return await Promise.resolve(token)
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
export default Auth

