import NextAuth from "next-auth";
import authConfig from "@/server/auth.config";
import { NextRequest } from "next/server";

const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req: NextRequest) {
  const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");
  const authenticate = await auth();
  const isLoggedIn = !!authenticate?.user;
  if (isOnDashboard) {
    if (!isLoggedIn) return Response.redirect(new URL("/", req.nextUrl));
  }
});

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
