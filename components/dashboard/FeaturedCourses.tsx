import CourseCard from "./CourseCard";

export default function FeaturedCourses() {
  const featuredCourses = [
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "John Smith",
      duration: "10 Hours",
      image: "/images/react-course.png",
    },
    {
      id: 2,
      title: "Next.js Masterclass",
      instructor: "Sarah Johnson",
      duration: "12 Hours",
      image: "/images/nextjs-course.png",
    },
    {
      id: 3,
      title: "TypeScript Essentials",
      instructor: "David Lee",
      duration: "8 Hours",
      image: "/images/typescript-course.png",
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="mb-6 text-3xl font-bold text-slate-800">
        Featured Courses
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {featuredCourses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            instructor={course.instructor}
            duration={course.duration}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
}