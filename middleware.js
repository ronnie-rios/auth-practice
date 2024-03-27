import { createMiddlewareClient} from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

//middlware func to run on every req and res from our server
export async function middleware(req) {
  const res = NextResponse.next(); //runs the next response
  const supabase = createMiddlewareClient({ req, res });
  //prevents our session from expiring
  await supabase.auth.getSession();
  //this allows the response to get the session and stay active on server components. 
  return res; //will update our active session and cookie
}