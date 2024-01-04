import nextAuth from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {}, //leave it empty because we use custom login

      async authorize (credentials) {
        const user = { id: '1' }
        return user
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXT_SECRET,
  pages: {
    signIn: '/login'
  }
}

const handler = nextAuth(authOptions)

export { handler as GET, handler as POST }
