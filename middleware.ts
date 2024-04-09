import { error } from "console";
import { BaseNextResponse } from "next/dist/server/base-http";
import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const authorization = req.headers.get("authorization");
  if (req.nextUrl.pathname.startsWith("api/admin")) {
    // This logic is only applied to /about

    try {
      if (authorization) {
        const token = authorization.split("")[1];

        if (!token) {
          throw new Error("Token inválido");
        }

        return NextResponse.next();
      } else {
        throw new Error("Token não informado");
      }
    } catch (e: any) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
}
