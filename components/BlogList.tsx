import classes from "@/components/BlogList.module.css";
import { cn } from "@/lib/utils";

import { getAllPosts } from "@/actions";
import BlogSummary from "./BlogSummary";
import { Separator } from "./ui/separator";
import Link from "next/link";

export default async function BlogList({ className }: { className?: string }) {
  const blogs = await getAllPosts();

  return (
    <article className={cn(className, classes["blog-list"])}>
      <div className={classes.title}>
        <h2>Blog List</h2>
        <p>Find all the available blogs here:</p>
      </div>
      <ul className={classes.content}>
        {blogs.map((blog, index) => (
          <li key={blog.id} className={classes["list-item"]}>
            <Link href={`/${blog.id}`}>
              <BlogSummary blog={blog} />
            </Link>
            {index !== blogs.length - 1 && (
              <Separator className={classes["separator"]} />
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
