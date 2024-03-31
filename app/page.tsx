import classes from "@/app/page.module.css";
import Presentation from "@/components/Presentation";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className={classes.main}>
      <Presentation />;
      <Separator />
    </main>
  );
}
