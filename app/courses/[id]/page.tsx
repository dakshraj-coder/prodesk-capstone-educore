import { courses } from "@/data/courses";
import Image from "next/image";

type CoursePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CourseDetails({
  params,
}: CoursePageProps) {
  const { id } = await params;

  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">
          Course Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow-lg">

        <Image
          src={course.image}
          alt={course.title}
          width={900}
          height={400}
          className="mb-6 h-64 w-full rounded-xl object-cover"
        />

        <h1 className="mb-4 text-4xl font-bold">
          {course.title}
        </h1>

        <div className="mb-6 flex gap-4">
          <span className="rounded bg-yellow-100 px-3 py-1">
            ⭐ {course.rating}
          </span>

          <span className="rounded bg-blue-100 px-3 py-1">
            {course.level}
          </span>

          <span className="rounded bg-green-100 px-3 py-1">
            {course.duration}
          </span>
        </div>

        <p className="mb-4">
          <strong>Instructor:</strong> {course.instructor}
        </p>

        <p className="text-gray-700">
          {course.description}
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          Curriculum
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Introduction</li>
          <li>Getting Started</li>
          <li>Components</li>
          <li>Hooks</li>
          <li>Mini Project</li>
          <li>Final Project</li>
        </ul>

        <div className="mt-10">
          <p className="mb-2 font-semibold">
            Progress
          </p>

          <div className="h-3 w-full rounded-full bg-gray-200">
            <div className="h-3 w-[65%] rounded-full bg-blue-600"></div>
          </div>

          <p className="mt-2 text-sm text-gray-600">
            65% Completed
          </p>
        </div>

        <button className="mt-10 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          Start Learning
        </button>

      </div>
    </main>
  );
}