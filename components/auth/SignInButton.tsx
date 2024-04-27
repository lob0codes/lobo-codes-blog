import oAuthSignIn from "@/actions/sign-in";

export default function SignInButton() {
  return (
    <form action={oAuthSignIn}>
      <button type="submit">Sign-In</button>
    </form>
  );
}
