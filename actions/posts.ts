"use server";

import { promises as fs } from "fs";

import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

export async function getPostContent(contentPath: string) {
  const contentFile: string = await fs.readFile(
    `${process.cwd()}${contentPath}`,
    "utf-8"
  );

  // return contentFile;

  // const matterResult = matter(contentFile);

  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // return processedContent.toString();
}
