import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

const isProtectedRoutes = createRouteMatcher([
  "/dashboard(.*)",
  "/payment(.*)",
]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  if (isProtectedRoutes(req)) {
    auth.protect();
  }
  // const origin = req.headers.get('origin') ?? ''
  // const isAllowedOrigin = allowedOrigins.includes(origin)

  // // Handle preflight requests
  // if (req.method === 'OPTIONS') {
  //   const preflightHeaders = {
  //     ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
  //     ...corsOptions,
  //   }
  //   return NextResponse.json({}, { headers: preflightHeaders })
  // }

  // // Handle protected routes
  // if (isProtectedRoutes(req)) {
  //   auth().protect()
  // }

  // // Handle simple requests
  // const response = NextResponse.next()

  // if (isAllowedOrigin) {
  //   response.headers.set('Access-Control-Allow-Origin', origin)
  // }

  // Object.entries(corsOptions).forEach(([key, value]) => {
  //   response.headers.set(key, value)
  // })

  // return response
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
