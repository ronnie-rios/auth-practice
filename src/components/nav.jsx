import Link from "next/link";

export default function Nav() {
	return (
		<header>
			<nav className="max-w-2xl p-4 flex flex-row justify-between">
				<Link to="/">
					<a>Home</a>
				</Link>
				<Link to="/secret">
					<a>Secret Link</a>
				</Link>
			</nav>
		</header>
	);
}
