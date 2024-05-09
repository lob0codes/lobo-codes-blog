import classes from "@/app/auth/sign-in/page.module.css";

import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <main className={classes["sign-in-page"]}>
      <SignInForm />
    </main>
  );
}
