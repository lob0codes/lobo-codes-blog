"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { SignUpSchema } from "@/schemas/auth";
import { createUser, getUserByEmail } from "./db";

export async function signUp(values: z.infer<typeof SignUpSchema>) {
  const fields = SignUpSchema.safeParse(values);

  if (!fields.success) {
    return { error: true, message: "Invalid fields!!!" };
  }

  const { email, password, name } = fields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await getUserByEmail(email);

  if (user) {
    return { error: true, message: "Email already in use!" };
  }

  await createUser(name, email, hashedPassword);

  return { error: false, message: "User created!!!" };
}
