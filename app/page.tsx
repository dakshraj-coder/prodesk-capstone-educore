import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          EduCore
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Enterprise Learning Management System
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-3"
          />

          <Link href="/dashboard">
          <button
          type="button"
          className="w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700"
          >
             Login
             </button>
             </Link>
        </form>
      </div>
    </main>
  );
}