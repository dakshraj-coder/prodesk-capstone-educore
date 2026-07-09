"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <h1 className="text-3xl font-extrabold">EduCore</h1>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="rounded-lg border border-white px-5 py-2 hover:bg-white hover:text-indigo-700 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-white px-5 py-2 font-semibold text-indigo-700 hover:bg-gray-200 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-8 py-24 text-center">
        <h2 className="text-6xl font-extrabold leading-tight">
          Learn Smarter.
          <br />
          Build Your Future.
        </h2>

        <p className="mt-8 max-w-3xl text-xl text-blue-100">
          EduCore is an AI-powered Learning Management System that helps
          students learn, practice, track progress, and earn certificates.
        </p>

        <div className="mt-10 flex gap-6">
          <Link
            href="/register"
            className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-indigo-700 shadow-lg hover:scale-105 transition"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-white px-8 py-4 text-lg hover:bg-white hover:text-indigo-700 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-7xl gap-8 px-8 pb-24 md:grid-cols-3">

        <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
          <div className="text-5xl">📚</div>
          <h3 className="mt-4 text-2xl font-bold">
            Interactive Courses
          </h3>
          <p className="mt-3 text-blue-100">
            Learn through structured courses with engaging content.
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
          <div className="text-5xl">🤖</div>
          <h3 className="mt-4 text-2xl font-bold">
            AI Learning Assistant
          </h3>
          <p className="mt-3 text-blue-100">
            Receive personalized AI guidance and instant feedback.
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
          <div className="text-5xl">🏆</div>
          <h3 className="mt-4 text-2xl font-bold">
            Certificates
          </h3>
          <p className="mt-3 text-blue-100">
            Complete courses and earn certificates to showcase your skills.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 py-6 text-center text-blue-100">
        © 2026 EduCore • AI Powered Learning Platform
      </footer>
    </main>
  );
}