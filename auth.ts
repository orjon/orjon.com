import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"

const config: NextAuthConfig = {
    providers: [
      Credentials({
        credentials: {
          username: { label: 'Username', type: 'text' },
          password: { label: 'Password', type: 'password' },
        },
        authorize: async (credentials) => {
          if (
            credentials.username === process.env.ADMIN_USERNAME &&
            credentials.password === process.env.ADMIN_PASSWORD
          ) {
            return { id: '1', name: 'Admin' }
          }
          return null
        },
      }),
    ],
  }
  
  export const { handlers, signIn, signOut, auth } = NextAuth(config)