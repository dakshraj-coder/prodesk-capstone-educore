"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { getCourses, deleteCourse } from "@/services/courseService";
import type { Course } from "@/types/course";
import { updateCourse } from "@/services/courseService";

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import StatsCard from "@/components/dashboard/StatsCard";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import RecentCourses from "@/components/dashboard/RecentCourses";
import UpcomingAssignments from "@/components/dashboard/UpcomingAssignments";
import Announcements from "@/components/dashboard/Announcements";
import FeaturedCourses from "@/components/dashboard/FeaturedCourses";
import CourseForm from "@/components/CourseForm";
import CourseProgressChart from "@/components/dashboard/CourseProgressChart";

export default function Dashboard() {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editProgress, setEditProgress] = useState(0);

  const totalCourses = courses.length;
  const completedCourses = courses.filter(
    (course) => course.progress === 100
  ).length;

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this course?"
    );
    
    if (!confirmed) return;
    await deleteCourse(id);
    const data = await getCourses();
    setCourses(data);
  };

  const handleEdit = (course: Course) => {
    setEditingId(course.id);
    setEditTitle(course.title);
    setEditDescription(course.description);
    setEditProgress(course.progress);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.replace("/login");
        return;
      }

      const data = await getCourses();
      setCourses(data);
    });

    return () => unsubscribe();
  }, [router]);

  const handleSave = async () => {
    if (!editingId) return;
    
    await updateCourse(editingId, {
      title: editTitle,
      description: editDescription,
      progress: editProgress,
    });
    const data = await getCourses();
    setCourses(data);
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
    setEditProgress(0);
    
    alert("Course updated successfully!");
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
            <StatsCard
            title="Courses Enrolled"
            value={totalCourses.toString()}
            />
            
            <StatsCard
            title="Completed Courses"
            value={completedCourses.toString()}
            />
            <StatsCard
            title="Certificates"
            value={completedCourses.toString()}
            />
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

          {/* Add Course */}
          <section className="mt-10">
            <CourseForm
              onCourseAdded={async () => {
                const data = await getCourses();
                setCourses(data);
              }}
            />
          </section>

          {/* My Courses */}
          <section className="mt-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-800">
              My Courses
            </h2>

            <section className="mt-10">
              <CourseProgressChart courses={courses} />
            </section>

            {courses.length === 0 ? (
              <div className="rounded-xl bg-white p-6 shadow">
                <p className="text-gray-500">No courses found.</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-xl"
                  >
                    {editingId === course.id ? (
                      <>
                       <input
                         type="text"
                         value={editTitle}
                         onChange={(e) => setEditTitle(e.target.value)}
                         className="mb-3 w-full rounded border p-2"
                        />

                        <textarea
                          value={editDescription}
                          onChange={(e) => setEditDescription(e.target.value)}
                          className="mb-3 w-full rounded border p-2"
                        />

                        <input
                          type="number"
                          min={0}
                          max={100}
                          value={editProgress}
                          onChange={(e) => setEditProgress(Number(e.target.value))}
                          className="mb-3 w-full rounded border p-2"
                        />
                      </>
                      ) : (

                      <>
                        <h3 className="mb-2 text-xl font-bold text-slate-800">
                          {course.title}
                        </h3>

                        <p className="mb-4 text-gray-600">
                          {course.description}
                        </p>

                        <div className="mb-2 flex justify-between">
                         <span className="font-medium">Progress</span>
                         <span>{course.progress}%</span>
                        </div>

                        <div className="h-3 w-full rounded-full bg-gray-200">
                         <div
                           className="h-3 rounded-full bg-blue-600"
                           style={{ width: `${course.progress}%` }}
                          />
                        </div>
                     </>
                    )}

                    <div className="mt-5 flex gap-3">
                      {editingId === course.id ? (
                        <button
                        onClick={handleSave}
                        className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                        >
                          Save
                        </button>
                        ) : (
                        <button
                        onClick={() => handleEdit(course)}
                        className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                      )}
                      
                      <button
                      onClick={() => handleDelete(course.id)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                      >
                        Delete
                        </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}