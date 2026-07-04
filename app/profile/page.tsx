export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-8 text-3xl font-bold">My Profile</h1>

      <div className="max-w-xl rounded-xl border bg-white p-6 shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Dakshraj</h2>
          <p className="text-gray-600">Student</p>
        </div>

        <div className="space-y-3">
          <p><strong>Email:</strong> student@example.com</p>
          <p><strong>Enrolled Courses:</strong> 12</p>
          <p><strong>Completed Courses:</strong> 8</p>
          <p><strong>Certificates:</strong> 5</p>
        </div>

        <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          Edit Profile
        </button>
      </div>
    </main>
  );
}