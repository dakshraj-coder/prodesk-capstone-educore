import CourseCard from "@/components/dashboard/CourseCard";

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "John Smith",
      duration: "10 Hours",
    },
    {
      id: 2,
      title: "Next.js Masterclass",
      instructor: "Sarah Johnson",
      duration: "12 Hours",
    },
    {
      id: 3,
      title: "TypeScript Essentials",
      instructor: "David Lee",
      duration: "8 Hours",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Course Catalog
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          instructor={course.instructor}
          duration={course.duration}
          />
        ))}
      </div>
    </main>
  );
}