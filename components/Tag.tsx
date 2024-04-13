import classes from "@/components/Tag.module.css";

export default function BlogTag({ name }: { name: string }) {
  return (
    <article className={classes.tag}>
      <div className={classes.name}>{name}</div>
    </article>
  );
}
