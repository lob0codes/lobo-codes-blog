"use client";

import classes from "@/components/auth/LoginForm.module.css";

import * as z from "zod";
import { LoginSchema } from "@/zod_schemas/auth";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/login";
import { useState } from "react";

import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import FormWrapper from "./FormWrapper";

interface LoginResult {
  error: boolean;
  message: string;
}

export default function LoginForm() {
  const [loginStatus, setLoginStatus] = useState<LoginResult | undefined>();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function submitHandler(values: z.infer<typeof LoginSchema>) {
    console.log(values);
    setLoginStatus(await login(values));
  }

  return (
    <FormWrapper>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className={classes.item}>
                <FormLabel className={classes.label}>Email:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Type your email..."
                    type="email"
                    className={classes.input}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className={classes.item}>
                <FormLabel className={classes.label}>Password:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Type your password..."
                    type="password"
                    className={classes.input}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {loginStatus && loginStatus.error && (
            <FormError message={loginStatus.message} />
          )}
          {loginStatus && !loginStatus.error && (
            <FormSuccess message={loginStatus.message} />
          )}
          <Button type="submit" className={classes["submit-button"]}>
            Login
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
}
