import Image from "next/image";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res)
  return {
    props: session
  }
}

export default  function Home({ user }) {

  console.log(user);
	return (
		<main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
			<h1>hello {user.name}</h1>
		</main>
	);
}
