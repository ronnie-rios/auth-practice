
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
		<div className="p-10 bg-gray">
			<form className="border rounded-s p-2 flex flex-col max-w-2xl mx-auto" onChange={formHandler}>
				<label className="font-bold border-b-2">Email</label>
				<input type="text" name="email" id="email" />
				<label className="font-bold border-b-2">Password</label>
				<input type="password" name="password" id="password" />
				<button className="p-2 my-2 rounded-sm text-white bg-teal-600 hover:bg-teal-700" onClick={signUpHandler}>
					Sign Up
				</button>
				<button className="p-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700" onClick={signInHandler}>
					Sign In
				</button>
			</form>
		</div>
	);
}
