import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // console.log(request.nextUrl.pathname);
  if (request) {
    // const coolies = request.cookies.get("next-auth.session-token")?.value;
    const isAuthorized =
      request.cookies.get("next-auth.session-token")?.value ||
      request.cookies.get("__Secure-next-auth.session-token")?.value ||
      undefined;

    if (
      !isAuthorized &&
      (request.nextUrl.pathname === process.env.SITE_URL + "/create-blog" ||
        request.nextUrl.pathname === process.env.SITE_URL + "/update-blog")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (request.nextUrl.pathname.startsWith(process.env.SITE_URL + "/api")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/api/:path*"],
// };
