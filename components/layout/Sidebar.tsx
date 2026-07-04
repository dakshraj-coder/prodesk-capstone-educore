import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-6">
      <h2 className="mb-6 text-xl font-bold">EduCore</h2>

      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:text-blue-400">
          Dashboard
        </Link>

        <Link href="/courses" className="hover:text-blue-400">
          Courses
        </Link>

        <Link href="/profile" className="hover:text-blue-400">
          Profile
        </Link>

        <Link href="/instructor" className="hover:text-blue-400">
          Instructor
        </Link>
      </nav>
    </aside>
  );
}