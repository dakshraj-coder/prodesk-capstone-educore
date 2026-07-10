"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful!");

      router.push("/dashboard");
    } catch (error) {
      console.error(error);

      if (error instanceof FirebaseError) {
        alert(error.message);
      } else {
        alert("Login Failed");
      }
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-2xl">
        <h1 className="mb-2 text-center text-4xl font-bold text-gray-800">
          EduCore
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Welcome Back
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>

          <div className="pt-4 text-center">
            <p className="text-gray-600">
              Do not have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-blue-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}