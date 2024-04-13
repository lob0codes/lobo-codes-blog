"use server";

import { promises as fs } from "fs";

export async function getPythonFile(filePath?: string) {
  const file = await fs.readFile(
    `${process.cwd()}/content/python-basics.md`,
    "utf-8"
  );

  console.log(file);
}

export async function getFirstFile(filePath?: string) {
  const files = await fs.readdir(`${process.cwd()}/content/`, "utf-8");

  console.log(files);
}
