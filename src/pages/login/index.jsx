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
        emailRedirectTo: `${location.origin}/auth/callback` //redirect via that route
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

	return <div>index</div>;
}
