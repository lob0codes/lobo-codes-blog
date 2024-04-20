import SignUpForm from "@/components/auth/SignUpForm";
import classes from "@/app/auth/sign-up/page.module.css";
import FormWrapper from "@/components/auth/FormWrapper";

export default function SignUpPage() {
  return (
    <main className={classes.main}>
      <SignUpForm />
    </main>
  );
}
