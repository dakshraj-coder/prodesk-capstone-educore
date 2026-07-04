export default function ContinueLearning() {
  return (
    <div className="mt-8 rounded-xl border bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Continue Learning
      </h2>

      <div className="rounded-lg border p-4">
        <h3 className="text-lg font-semibold">
          React Fundamentals
        </h3>

        <p className="text-gray-600 mt-2">
          Progress: 65%
        </p>

        <div className="mt-3 h-3 w-full rounded-full bg-gray-200">
          <div className="h-3 w-[65%] rounded-full bg-blue-600"></div>
        </div>

        <button className="mt-5 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          Continue Course
        </button>
      </div>
    </div>
  );
}