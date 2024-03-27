import { getAuth } from "@clerk/nextjs/server";
import { useRouter } from 'next/router'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async (ctx) => {
  const { userId } = getAuth(ctx.req);
  if (!userId) {
    // handle user is not signed in.
  
  }
  
  // Load any data your application needs for the page using the userId
  
  return { props:{ userId } };
};

export default function Home(props) {

  console.log(props);
  
 
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-2xl">really cool landing page!</h1>
    </main>
  );
}
