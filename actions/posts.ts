"use server";

import { promises as fs } from "fs";

import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

export async function getPostContent(contentPath: string) {
  // return `${process.cwd}${contentPath}`;

  // const contentFile: string = await fs.readFile(
  //   process.cwd() + "/public" + contentPath,
  //   "utf-8"
  // );

  return process.cwd() + "/public" + contentPath;

  // const contentFile: string = await fs.readFile(
  //   `${process.cwd()}${contentPath}`,
  //   "utf-8"
  // );

  // const matterResult = matter(contentFile);

  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // return processedContent.toString();
}
