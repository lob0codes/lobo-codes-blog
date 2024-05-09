"use server";

import { LoginSchema } from "@/zod_schemas/auth";
import * as z from "zod";

export async function login(values: z.infer<typeof LoginSchema>) {
  const isDataValid = LoginSchema.safeParse(values).success;

  if (!isDataValid) {
    return { error: true, message: "Incorrect Credentials!!!" };
  }

  return { error: false, message: "Login Successfully!!!" };
}
