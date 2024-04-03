import classes from "@/components/BlogSummary.module.css";
import BlogTag from "./BlogTag";

export default function BlogSummary({ title }: { title: string }) {
  return (
    <article className={classes["blog-summary"]}>
      <section className={classes.main}>
        <p className={classes.description}>{title}</p>
        <p className={classes["creation-date"]}>Created on 14/05/2024</p>
      </section>
      <section className={classes.footer}>
        <BlogTag title="Python" />
      </section>
    </article>
  );
}
