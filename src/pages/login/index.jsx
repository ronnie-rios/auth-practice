"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const router = useRouter();

	const supabase = createClientComponentClient();

	async function signUpHandler() {
		await supabase.auth.signUp({
			email: formData.email,
			password: formData.password,
			//our email verification
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`, //redirect via that route
			},
		});
		router.refresh();
	}

	async function signInHandler() {
		await supabase.auth.signInWithPassword({
			email: formData.email,
			password: formData.password,
		});
		router.refresh();
	}

	function formHandler(e) {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}

	return (
		<div>
			<form onChange={(e) => formHandler(e)}>
				<label className="font-bold border-b-2">Email</label>
				<input type="text" name="email" id="email" />
				<label className="font-bold border-b-2">Password</label>
				<input type="password" name="password" id="password" />
				<button onClick={signUpHandler}>Sign Up</button>
				<button onClick={signInHandler}>Sign In</button>
			</form>
		</div>
	);
}
