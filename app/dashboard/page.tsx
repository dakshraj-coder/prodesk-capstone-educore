import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import StatsCard from "@/components/dashboard/StatsCard";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import RecentCourses from "@/components/dashboard/RecentCourses";
import UpcomingAssignments from "@/components/dashboard/UpcomingAssignments";
import Announcements from "@/components/dashboard/Announcements";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 bg-slate-100 p-6">
          <h1 className="mb-6 text-3xl font-bold">
            Student Dashboard
          </h1>

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
        </main>
      </div>

      <Footer />
    </>
  );
}