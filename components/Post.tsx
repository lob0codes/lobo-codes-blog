import { getPost } from "@/actions/db";
import classes from "@/components/Post.module.css";

export default async function Post({ id }: { id: number }) {
  const post = await getPost(id);

  const postDate = post?.updatedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  console.log(post?.title);
  console.log("q pasaaaa");

  return (
    <article className={classes.post}>
      <h2>{post?.title}</h2>
      <p className={classes.date}>{postDate}</p>
    </article>
  );
}
