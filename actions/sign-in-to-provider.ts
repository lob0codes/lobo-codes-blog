"use server";

import { signIn } from "@/auth";

export default async function signInToProvider(id: string) {
  console.log(id);
  await signIn(id, { redirectTo: "/" });
}
