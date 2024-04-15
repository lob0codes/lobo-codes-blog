"use client";

import classes from "@/components/auth/LoginForm.module.css";
import { FaKey } from "react-icons/fa6";

import * as z from "zod";
import { LoginSchema } from "@/schemas/auth";

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

export default function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function submitHandler(values: z.infer<typeof LoginSchema>) {
    console.log(values);
  }

  return (
    <article className={classes["login-form"]}>
      <header className={classes.header}>
        <FaKey className={classes.icon} />
        <h2>Auth</h2>
      </header>
      <main className={classes.main}>
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
            <Button type="submit" className={classes["submit-button"]}>
              Login
            </Button>
          </form>
        </Form>
      </main>
    </article>
  );
}