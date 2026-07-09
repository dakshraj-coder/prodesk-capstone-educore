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

      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 bg-slate-100 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">
              Student Dashboard
            </h1>

            <button
              onClick={handleLogout}
              className="rounded bg-red-600 px-4 py-2 text-white"
            >
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <StatsCard title="Courses Enrolled" value="12" />
            <StatsCard title="Completed Courses" value="8" />
            <StatsCard title="Certificates" value="5" />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <UpcomingAssignments />
            <Announcements />
          </div>

          <ContinueLearning />
          <RecentCourses />
          <FeaturedCourses />
        </main>
      </div>

      <Footer />
    </>
  );
}