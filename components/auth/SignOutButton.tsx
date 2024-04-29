import oAuthSignOut from "@/actions/sign-out";

export default function SignOutButton() {
  return (
    <form action={oAuthSignOut}>
      <button type="submit">Sign-Out</button>
    </form>
  );
}
