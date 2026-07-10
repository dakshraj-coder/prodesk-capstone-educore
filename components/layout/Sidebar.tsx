import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white shadow-xl">
      <div className="p-6">
        <h2 className="mb-8 text-2xl font-bold tracking-wide text-blue-400">
          Navigation
        </h2>

        <nav className="space-y-3">
          <Link
            href="/dashboard"
            className="flex items-center rounded-lg px-4 py-3 text-base font-medium transition duration-200 hover:bg-slate-800 hover:text-blue-400"
          >
            <span className="mr-3 text-xl">📊</span>
            Dashboard
          </Link>

          <Link
            href="/courses"
            className="flex items-center rounded-lg px-4 py-3 text-base font-medium transition duration-200 hover:bg-slate-800 hover:text-blue-400"
          >
            <span className="mr-3 text-xl">📚</span>
            Courses
          </Link>

          <Link
            href="/profile"
            className="flex items-center rounded-lg px-4 py-3 text-base font-medium transition duration-200 hover:bg-slate-800 hover:text-blue-400"
          >
            <span className="mr-3 text-xl">👤</span>
            Profile
          </Link>

          <Link
            href="/instructor"
            className="flex items-center rounded-lg px-4 py-3 text-base font-medium transition duration-200 hover:bg-slate-800 hover:text-blue-400"
          >
            <span className="mr-3 text-xl">🎓</span>
            Instructor
          </Link>
        </nav>
      </div>
    </aside>
  );
}