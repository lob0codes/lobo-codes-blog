"use server";

import { promises as fs } from "fs";
import path from "path";

import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

export async function getPostContent(contentPath: string) {
  const site_url = "https://lobo-codes-blog.vercel.app/type-script-advanced.md";

  const filePath = path.join(process.cwd(), contentPath);
  const contentFile: string = await fs.readFile(filePath, "utf-8");
  console.log(contentFile);
  const matterResult = matter(contentFile);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  return processedContent.toString();
}
