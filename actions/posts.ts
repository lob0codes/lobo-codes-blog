"use server";

import { promises as fs } from "fs";

import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

export async function getPostContent(contentPath: string) {
  const site_url = "https://lobo-codes-blog.vercel.app";
  const contentFile: string = await fs.readFile(
    `${site_url}${contentPath}`,
    "utf-8"
  );

  const matterResult = matter(contentFile);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  return processedContent.toString();
}
