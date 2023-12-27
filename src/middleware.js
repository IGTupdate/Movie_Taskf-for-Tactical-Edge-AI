import axios from 'axios';
import { NextResponse } from 'next/server'


export async function middleware(request) {

    const response = await fetch("http://localhost:3000/api/auth/verify", {
        method: "GET",
        credentials: 'include',
    });
    const data = await response.json();

    if (!data?.success) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return null
}


export const config = {
    matcher: [
        '/',
        '/movie/:path*',
    ]
}