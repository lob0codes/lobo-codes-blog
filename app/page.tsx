import Image from "next/image";
import classes from "@/app/page.module.css";
import Presentation from "@/components/Presentation";

export default function Home() {
  return (
    <main className={classes.main}>
      <Presentation />;
    </main>
  );
}
