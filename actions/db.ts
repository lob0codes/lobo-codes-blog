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

export async function getPostTags(id: number) {
  const post = await db.post.findUnique({
    where: { id: id },
    include: { tags: true },
  });

  const tags = post?.tags;
  return tags;
}

export async function getUserByEmail(email: string) {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });

    return user;
  } catch {
    return null;
  }
}

export async function getUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });

    return user;
  } catch {
    return null;
  }
}

export async function createUser(
  name: string,
  email: string,
  hashedPassword: string
) {
  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch {
    return null;
  }
}
