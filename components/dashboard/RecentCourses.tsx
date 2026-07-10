export default function RecentCourses() {
  const recentCourses = [
    {
      title: "React Fundamentals",
      lesson: "Lesson 8 - React Hooks",
    },
    {
      title: "Next.js Masterclass",
      lesson: "Lesson 4 - App Router",
    },
    {
      title: "TypeScript Essentials",
      lesson: "Lesson 2 - Interfaces",
    },
  ];

  return (
    <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
      <h2 className="mb-5 text-2xl font-bold text-slate-800">
        Recent Courses
      </h2>

      <div className="space-y-4">
        {recentCourses.map((course, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 p-4 transition duration-300 hover:bg-slate-50 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-800">
              {course.title}
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              {course.lesson}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}