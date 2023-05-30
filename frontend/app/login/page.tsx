"use client";

import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const schema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z.string().min(8, {
    message: "Please enter a password of at least 8 characters",
  }),
});

function LoginForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    // Submit the values to the backend api
    // This will be type-safe and validated
    // console.log(values);
    fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful response
          console.log("Login successful");
        } else {
          // Handle error response
          console.error("Login failed");
        }
      })
      .catch((error) => {
        // Handle network or other errors
        console.error("An error occurred", error);
      });
  }

  return (
    <div className="flex border-solid border-black items-center">
      <div className="rounded-sm">
        <Image
          src="/static/images/login.jpg"
          alt="Login"
          width={800}
          height={100}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center px-20">
        <h1 className="text-4xl font-semibold pb-4">Login</h1>
        <div className="pt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="bg-secondary text-secondary-foreground"
                      />
                    </FormControl>
                    {/* <FormDescription>This is your email.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        {...field}
                        className="bg-secondary text-secondary-foreground"
                      />
                    </FormControl>
                    {/* <FormDescription>This is your password.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
