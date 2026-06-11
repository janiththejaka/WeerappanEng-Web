import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";
import { createServerClient } from "@supabase/ssr";

export async function proxy(
  request: NextRequest
) {
  const response =
    await updateSession(request);

  const supabase =
    createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },

          setAll() {},
        },
      }
    );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname =
    request.nextUrl.pathname;

  const isAdminRoute =
    pathname.startsWith("/admin");

  const isLoginRoute =
    pathname === "/admin/login";

  if (
    isAdminRoute &&
    !isLoginRoute &&
    !user
  ) {
    return NextResponse.redirect(
      new URL(
        "/admin/login",
        request.url
      )
    );
  }

  if (
    isLoginRoute &&
    user
  ) {
    return NextResponse.redirect(
      new URL(
        "/admin/dashboard",
        request.url
      )
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
