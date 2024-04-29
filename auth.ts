import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

import prisma from "@/lib/prisma";

export const config = {
  theme: { logo: "/wolf.svg" },
  adapter: PrismaAdapter(prisma),
  providers: [Google, GitHub],
  // pages: {
  //   signIn: "/auth/login",
  // },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
