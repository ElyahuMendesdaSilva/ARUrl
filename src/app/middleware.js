import { NextResponse } from "next/server";

const publicRoutes = ["/login", "/register"];

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/login";

export function middleware(request) {
    const { pathname } = request.nextUrl;
    return NextResponse.next();
}


export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};