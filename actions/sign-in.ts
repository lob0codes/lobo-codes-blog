"use server";

import { signIn } from "@/auth";

export default async function oAuthSignIn() {
  await signIn();
}
