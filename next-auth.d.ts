declare module "next-auth" {
  // interface User {  }

  interface Session extends DefaultSession {
    expires: string
    jwt?: string
    session: any
    token: any
    user: any
  }
}
