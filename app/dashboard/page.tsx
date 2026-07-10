"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import StatsCard from "@/components/dashboard/StatsCard";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import RecentCourses from "@/components/dashboard/RecentCourses";
import UpcomingAssignments from "@/components/dashboard/UpcomingAssignments";
import Announcements from "@/components/dashboard/Announcements";
import FeaturedCourses from "@/components/dashboard/FeaturedCourses";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-slate-100">
        <Sidebar />

        <main className="flex-1 p-10">
          {/* Header */}
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-800">
                Student Dashboard
              </h1>

              <p className="mt-2 text-slate-500">
                Welcome back! Continue your learning journey.
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <StatsCard title="Courses Enrolled" value="12" />
            <StatsCard title="Completed Courses" value="8" />
            <StatsCard title="Certificates" value="5" />
          </div>

          {/* Assignments & Announcements */}
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <UpcomingAssignments />
            <Announcements />
          </div>

          {/* Continue Learning */}
          <section className="mt-10">
            <ContinueLearning />
          </section>

          {/* Recent Courses */}
          <section className="mt-10">
            <RecentCourses />
          </section>

          {/* Featured Courses */}
          <section className="mt-10">
            <FeaturedCourses />
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}