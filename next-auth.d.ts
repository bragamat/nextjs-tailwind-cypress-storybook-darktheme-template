declare module "next-auth" {
  // interface User {  }

  interface Session extends DefaultSession {
    expires: string
    jwt?: string
  }
}
