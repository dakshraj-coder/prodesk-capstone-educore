import Image from "next/image";
import Link from "next/link";

type CourseCardProps = {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  image: string;
};

export default function CourseCard({
  id,
  title,
  instructor,
  duration,
  image,
}: CourseCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Image
        src={image}
        alt={title}
        width={400}
        height={220}
        className="h-48 w-full object-cover"
      />

      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-800">
          {title}
        </h2>

        <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          Frontend
        </span>

        <p className="mt-3 text-yellow-500">
          ⭐⭐⭐⭐⭐ 4.8
        </p>

        <p className="mt-4 text-slate-600">
          <span className="font-semibold">Instructor:</span>{" "}
          {instructor}
        </p>

        <p className="mt-2 text-slate-600">
          <span className="font-semibold">Duration:</span>{" "}
          {duration}
        </p>

        <Link
          href={`/courses/${id}`}
          className="mt-6 block rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white transition duration-300 hover:bg-blue-700"
        >
          View Course
        </Link>
      </div>
    </div>
  );
}