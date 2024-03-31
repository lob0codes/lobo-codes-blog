import classes from "@/components/Presentation.module.css";

export default function Presentation() {
  return (
    <section className={classes.presentation}>
      <div className={classes.content}>
        <h1 className={classes.greetings}>Welcome to lob0codes&apos; blog</h1>
        <p className={classes.description}>
          This is a space to show interesting things about React, Next.JS and
          Python
        </p>
      </div>
    </section>
  );
}
