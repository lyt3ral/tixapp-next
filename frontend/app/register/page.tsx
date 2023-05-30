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
  confirmPassword: z.string().refine(
    (value, data) => {
      return value === data.password;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  ),
  name: z.string().refine((value) => {
    const regex = /^[a-zA-Z0-9]+$/; // Only allow alphabets and numbers
    return regex.test(value);
  }, "Invalid name"),
  city: z.string().refine((value) => {
    const regex = /^[a-zA-Z]+$/; // Only allow alphabets
    return regex.test(value);
  }, "Invalid city"),
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
    fetch("http://localhost:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        name: values.name,
        city: values.city,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful response
          console.log("Register successful");
        } else {
          // Handle error response
          console.error("Register failed");
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
          alt="Register"
          width={800}
          height={100}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center px-20">
        <h1 className="text-4xl font-semibold pb-1">Register</h1>
        <div className="pt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        {...field}
                        className="bg-secondary text-secondary-foreground"
                      />
                    </FormControl>
                    {/* <FormDescription>This is your name.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Confirm Password"
                        {...field}
                        className="bg-secondary text-secondary-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="City"
                        {...field}
                        className="bg-secondary text-secondary-foreground"
                      />
                    </FormControl>
                    {/* <FormDescription>This is your name.</FormDescription> */}
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
