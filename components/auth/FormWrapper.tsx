"use client";

import classes from "@/components/auth/FormWrapper.module.css";
import { FaKey } from "react-icons/fa6";

export default function FormWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className={classes["form"]}>
      <header className={classes.header}>
        <FaKey className={classes.icon} />
        <h2>Auth</h2>
      </header>
      <main className={classes.main}>{children}</main>
    </article>
  );
}
