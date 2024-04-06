import classes from "@/app/page.module.css";
import BlogList from "@/components/BlogList";
import Presentation from "@/components/Presentation";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className={classes.main}>
      <Presentation className={classes.presentation} />;
      <Separator />
      <div className={classes["blog-list-container"]}>
        <BlogList />
      </div>
    </main>
  );
}
