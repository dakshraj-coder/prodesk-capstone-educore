type CoursePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CourseDetails({
  params,
}: CoursePageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold">
        Course Details
      </h1>

      <div className="mt-6 rounded-xl bg-white p-6 shadow-md">
        <h2 className="text-2xl font-semibold">
          Course ID: {id}
        </h2>

        <p className="mt-4">
          Course Title: React Fundamentals
        </p>

        <p className="mt-2">
          Instructor: John Smith
        </p>

        <p className="mt-2">
          Duration: 10 Hours
        </p>

        <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          Start Learning
        </button>
      </div>
    </main>
  );
}