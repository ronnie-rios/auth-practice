import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const requestUrl = new URL(req.url)// generate a new req url;
  const code = requestUrl.searchParams.get('code') //getting code from supabase
  if(code) {
    //create cookieStore
    const cookieStore = cookies();
    //set cookies to our cookie store
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    //exchange the code from searchParmas to use cookies
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(requestUrl.origin) //return the user 
 }