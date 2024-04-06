import classes from "@/app/testu/page.module.css";
import BlogList from "@/components/BlogList";

export default async function BlogSummaryPage() {
  return (
    <div className={classes["blog-list-container"]}>
      <BlogList />
    </div>
  );
}
