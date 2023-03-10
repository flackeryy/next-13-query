import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|undefined|.*\\.).*)',
    ]
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    return NextResponse.next()
}
