import oAuthSignIn from "@/actions/sign-in";
import { signIn } from "@/auth";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button>Sign-In</button>
    </form>
  );
}
