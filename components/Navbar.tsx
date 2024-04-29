import classes from "@/components/Navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWolfPackBattalion } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import User from "@/components/auth/User";

export default async function Navbar() {
  return (
    <header className={classes.header}>
      <FontAwesomeIcon icon={faWolfPackBattalion} className={classes.icon} />
      <ul className={classes.navigation}>
        <li className={classes.item}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={classes.item}>
          <User />
        </li>
      </ul>
    </header>
  );
}
