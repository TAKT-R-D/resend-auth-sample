import { auth, signOut } from "@/server/auth";
import SignIn from "@/app/components/SignIn";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <h1>HOME</h1>
      {session ? (
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button>Sign Out</button>
        </form>
      ) : (
        <SignIn />
      )}
      <div>
        Link to: <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
