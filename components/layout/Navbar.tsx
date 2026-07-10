import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm">
      <Link href="/" className="text-3xl font-bold text-blue-600">
        EduCore
      </Link>

      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-sm font-semibold text-slate-800">
            Student Portal
          </p>
          <p className="text-xs text-slate-500">
            AI Powered Learning
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
          D
        </div>
      </div>
    </nav>
  );
}