import classes from "@/components/auth/User.module.css";

import { auth } from "@/auth";
import SignInButton from "@/components/auth/SignInButton";
import UserButton from "@/components/auth/UserButton";

export default async function User() {
  const session = await auth();
  const user = session?.user;

  return <div>{user ? <UserButton user={user} /> : <SignInButton />}</div>;
}
