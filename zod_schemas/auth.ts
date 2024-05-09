import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export const SignUpSchema = z.object({
  email: z.string().email({
    message: "Email is required.",
  }),
  password: z.string().min(6, {
    message: "Password length must be greater than 6 characters.",
  }),
  name: z.string().min(1, { message: "Name is required." }),
});

export const UserSettingsSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});
