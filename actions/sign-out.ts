"use server";

import { signOut } from "@/auth";

export default async function oAuthSignOut() {
  await signOut();
}
