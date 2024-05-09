import classes from "@/app/settings/page.module.css";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

import SettingsForm from "@/components/user/SettingsForm";

export default async function SettingsPage() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/settings");
  }

  return (
    <main className={classes.main}>
      <SettingsForm user={user} />;
    </main>
  );
}
