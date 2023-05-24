/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApollo } from '@/config/graphql';
import { LoginDocument } from '@/hooks/graphql';
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials'

type AuthorizeProps = {
  email: string
  password: string
}

const options = {
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
              mutation: LoginDocument,
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
    session: async ({ session, token: token, user }: Session) => {
      session.user = user
      return await Promise.resolve({ ...session, jwt: token })
    },
    jwt: async ({ token, user }: JWT) => {
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

