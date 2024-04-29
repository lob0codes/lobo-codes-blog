import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { Provider } from "next-auth/providers";

import prisma from "@/lib/prisma";

const providers: Provider[] = [Google, GitHub];

export const providersMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const config = {
  adapter: PrismaAdapter(prisma),
  providers: providers,
  // pages: {
  //   signIn: "/sign-in",
  // },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
