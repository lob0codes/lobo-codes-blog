import classes from "@/components/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={classes.header}>
      <ul className={classes.navigation}>
        <li>Home</li>
        <li>Login</li>
      </ul>
    </header>
  );
}
