import { getAllPosts } from "@/actions";
import classes from "@/app/testu/page.module.css";
import BlogSummary from "@/components/BlogSummary";
import { Separator } from "@/components/ui/separator";

export default async function BlogSummaryPage() {
  const blogs = await getAllPosts();
  console.log(blogs[0].title);
  return (
    <>
      {blogs.map((blog) => {
        return <BlogSummary key={blog.id} title={blog.title} />;
      })}
    </>
  );
}
