"use server";

import { signIn } from "@/auth";

export default async function signInToProvider(id: string) {
  await signIn(id, { redirectTo: "/" });
}
