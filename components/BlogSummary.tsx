import classes from "@/components/BlogSummary.module.css";
import BlogTag from "./BlogTag";
import { Post } from "@prisma/client";
import { getPostTags } from "@/actions";

export default async function BlogSummary({ blog }: { blog: Post }) {
  const tags = await getPostTags(blog.id);

  const blogDate = blog.updatedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <article className={classes["blog-summary"]}>
      <section className={classes.main}>
        <p className={classes.description}>{blog.title}</p>
        <p className={classes["creation-date"]}>{blogDate}</p>
      </section>
      <section className={classes.footer}>
        {tags && tags.map((tag) => <BlogTag key={tag.id} name={tag.name} />)}
      </section>
    </article>
  );
}
