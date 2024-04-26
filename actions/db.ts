"use server";

import prisma from "@/lib/prisma";

export async function getAllPosts() {
  const posts = await prisma.post.findMany();

  return posts;
}

export async function getPost(id: number) {
  const post = await prisma.post.findUnique({ where: { id: id } });
  return post;
}

export async function getPostTags(id: number) {
  const post = await prisma.post.findUnique({
    where: { id: id },
    include: { tags: true },
  });

  const tags = post?.tags;
  return tags;
}

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return user;
  } catch {
    return null;
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
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
    await prisma.user.create({
      data: {
        name,
        email,
      },
    });
  } catch {
    return null;
  }
}
