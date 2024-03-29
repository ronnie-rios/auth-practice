import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export function NavButton() {
	const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )

}

export function Nav() {

	return (
		<nav className="max-w-2xl mx-auto p-2">
			<NavButton />
		</nav>
	)
}