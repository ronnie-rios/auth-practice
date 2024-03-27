import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Nav() {
	const { user, isLoaded } = useUser();

	return (
		<header>
			<nav className="max-w-2xl border-y-2 mx-auto p-4 flex flex-row justify-between">
				<Link href="/">Home</Link>
				{isLoaded && user && 
          (
            <>
            <Link href="/secret">Secret Link</Link>
            <UserButton afterSignOutUrl="/" />
            </>
          )
        }
			</nav>
		</header>
	);
}
