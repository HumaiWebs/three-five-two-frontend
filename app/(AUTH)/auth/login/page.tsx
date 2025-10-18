"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { http } from "@/lib/httpClient";
import { useAuth } from "@/store/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const { mutate, status } = useMutation({
    async mutationFn(data: any) {
      return (await http.post("/auth/login", data)).data;
    },
    onSuccess(response) {
      if (response.success) {
        toast.success("Logged in successfully");
        login(response.user);
        router.push(response.user.role ==='buyer'?"/":"/admin");
      } else {
        toast.error(response.message || "Something went wrong");
      }
    },
    onError(error: AxiosError) {
      if (error.response?.status === 401) {
        toast.error("Invalid email or password");
      }
      console.log("Something went wrong" + JSON.stringify(error as any));
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    mutate(data);
  }

  return (
    <main className="w-full min-h-screen flex flex-col gap-4 justify-center items-center">
      <form onSubmit={handleSubmit} className="flex w-[400px] flex-col gap-3">
        <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
        <div className="flex gap-2 flex-col w-full">
          <Label htmlFor="email" className="text-lg">
            Email
          </Label>
          <Input
            type="email"
            className="w-full"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="flex gap-2 flex-col w-full">
          <Label htmlFor="password" className="text-lg">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            className="w-full"
            name="password"
            required
          />
        </div>
        <Button
          disabled={status === "pending"}
          className="disabled:bg-gray-600 cursor-not-allowed"
          type="submit"
        >
          Login
        </Button>
      </form>
    </main>
  );
};

export default LoginPage;
