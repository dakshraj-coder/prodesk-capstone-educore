"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-between px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-xl font-bold text-white">
            E
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800">EduCore</h1>
            <p className="text-xs text-slate-500">
              AI Learning Platform
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden w-96 md:block">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-2 focus:border-blue-500 focus:bg-white focus:outline-none"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <button className="text-slate-600 transition hover:text-blue-600">
            🔔
          </button>

          <Link
          href="/profile"
          className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
              T
            </div>
            
            <div>
              <p className="text-sm font-semibold">My Account</p>
              <p className="text-xs text-slate-500">View Profile</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}