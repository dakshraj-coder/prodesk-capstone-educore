import Link from "next/link";
type CourseCardProps = {
    id: number;
    title: string;
    instructor: string;
    duration: string;
};

export default function CourseCard({
    id,
    title,
    instructor,
    duration,
}: CourseCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md border">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-2 text-gray-600">
        Instructor: {instructor}
      </p>

      <p className="mt-1 text-gray-600">
        Duration: {duration}
      </p>

      <Link href={`/courses/${id}`}>
      <button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        View Course
        </button>
        </Link>
    </div>
  );
}