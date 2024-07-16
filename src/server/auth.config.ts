import type { NextAuthConfig } from "next-auth";

export default {
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  callbacks: {
    async session({ session, token }) {
      session.userId = token.sub ?? "";
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 3 * 60 * 60,
  },
  providers: [],
} satisfies NextAuthConfig;
