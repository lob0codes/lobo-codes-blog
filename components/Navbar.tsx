import classes from "@/components/Navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWolfPackBattalion } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={classes.header}>
      <FontAwesomeIcon icon={faWolfPackBattalion} className={classes.icon} />
      <ul className={classes.navigation}>
        <li>Home</li>
        <li>Login</li>
      </ul>
    </header>
  );
}
