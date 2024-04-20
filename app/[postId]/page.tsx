import { getPost } from "@/lib/db";
import { getPostContent } from "@/actions/posts";

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

  // let postContent: string | TrustedHTML = "";
  // if (post?.content) {
  //   postContent = await getPostContent(post?.content);
  // }

  return (
    <main className={classes.main}>
      <header className={classes.header}>
        <h2>{post?.title}</h2>
        <p className={classes.date}>{postDate}</p>
      </header>
      <section className={classes.content}>
        {/* <div dangerouslySetInnerHTML={{ __html: postContent }}></div> */}
        {post ? (
          <>
            <p>{post?.id}</p>
            <p>{post?.title}</p>
            <p>{post?.content}</p>
          </>
        ) : (
          <p>Null</p>
        )}
      </section>
    </main>
  );
}
