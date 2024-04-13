import { getPost } from "@/actions/db";
import { getFirstFile } from "@/actions/fs";

import classes from "@/app/[postId]/page.module.css";

export default async function PostDetailsPage({
  params,
}: {
  params: { postId: string };
}) {
  const postId = parseInt(params.postId);
  const post = await getPost(postId);

  const postDate = post?.updatedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const postContent = getFirstFile();

  return (
    <main className={classes.main}>
      <header className={classes.header}>
        <h2>{post?.title}</h2>
        <p className={classes.date}>{postDate}</p>
      </header>
    </main>
  );
}
