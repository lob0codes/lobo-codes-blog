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
        <Link href={"/"}>
          <li className={classes.item}>Home</li>
        </Link>
        <li>
          <User />
        </li>
      </ul>
    </header>
  );
}
