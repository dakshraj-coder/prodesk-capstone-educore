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
    <div className="mt-8 rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Recent Courses</h2>

      <div className="space-y-4">
        {recentCourses.map((course, index) => (
          <div
            key={index}
            className="rounded-lg border p-4 hover:bg-slate-50"
          >
            <h3 className="font-semibold">{course.title}</h3>
            <p className="text-sm text-gray-600">{course.lesson}</p>
          </div>
        ))}
      </div>
    </div>
  );
}