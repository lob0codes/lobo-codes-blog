"use client";

import classes from "@/components/user/SettingsForm.module.css";

import * as z from "zod";
import { UserSettingsSchema } from "@/zod_schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import { User } from "next-auth";

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
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormSuccess from "../auth/FormSuccess";
import FormError from "../auth/FormError";
import updateUserData from "@/actions/update-user-data";

interface SettingsChangeResult {
  error: boolean;
  message: string;
}

export default function SettingsForm({ user }: { user: User }) {
  const [settingsChangeStatus, setSettingsChangeStatus] = useState<
    SettingsChangeResult | undefined
  >();

  const form = useForm<z.infer<typeof UserSettingsSchema>>({
    resolver: zodResolver(UserSettingsSchema),
    defaultValues: {
      name: user.name || "",
    },
  });

  function submitHandler(values: z.infer<typeof UserSettingsSchema>) {
    const fields = UserSettingsSchema.safeParse(values);

    if (!fields.success) {
      setSettingsChangeStatus({
        error: true,
        message: "Invalid fields!!!",
      });
    } else {
      try {
        updateUserData(fields.data.name);
        setSettingsChangeStatus({
          error: false,
          message: "Name updated correctly!!!",
        });
      } catch (error) {
        if (error instanceof Error) {
          setSettingsChangeStatus({ error: true, message: error.message });
        }
      }
    }
  }

  return (
    <article className={classes["settings-form"]}>
      <header className={classes.header}>
        <h2>Settings</h2>
      </header>
      <main>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className={classes.form}
          >
            <section className={classes["form-content"]}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className={classes.item}>
                    <FormLabel className={classes.label}>
                      Type new name:
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="text" className={classes.input} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {settingsChangeStatus && settingsChangeStatus.error && (
                <FormError message={settingsChangeStatus.message} />
              )}
              {settingsChangeStatus && !settingsChangeStatus.error && (
                <FormSuccess message={settingsChangeStatus.message} />
              )}
              <Button type="submit" className={classes["submit-button"]}>
                Submit
              </Button>
            </section>
          </form>
        </Form>
      </main>
    </article>
  );
}
