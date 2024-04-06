import { getPost } from "@/actions";

export default async function BlogDetailsPage({
  params,
}: {
  params: { blogId: string };
}) {
  const blogId = parseInt(params.blogId);
  const post = await getPost(blogId);
  return (
    <main>
      <h2>{post?.title}</h2>
    </main>
  );
}
