"use server";

import { SignUpSchema } from "@/schemas/auth";
import * as z from "zod";

export async function signUp(values: z.infer<typeof SignUpSchema>) {
  const isDataValid = SignUpSchema.safeParse(values).success;

  if (!isDataValid) {
    return { error: true, message: "Incorrect Credentials!!!" };
  }

  return { error: false, message: "Sign Up Successfully!!!" };
}
