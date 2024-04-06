"use server";

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export async function getAllPosts() {
  const posts = await db.post.findMany();
  return posts;
}

export async function getPost(id: number) {
  const post = await db.post.findUnique({ where: { id: id } });
  return post;
}
