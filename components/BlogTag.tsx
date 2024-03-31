import classes from "@/components/BlogTag.module.css";

export default function BlogTag({ title }: { title: string }) {
  return (
    <article className={classes.tag}>
      <div className={classes.title}>{title}</div>
    </article>
  );
}
