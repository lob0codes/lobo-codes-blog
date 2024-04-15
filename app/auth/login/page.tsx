import LoginForm from "@/components/auth/LoginForm";
import classes from "@/app/auth/login/page.module.css";

export default function LogInPage() {
  return (
    <main className={classes.main}>
      <LoginForm />
    </main>
  );
}
