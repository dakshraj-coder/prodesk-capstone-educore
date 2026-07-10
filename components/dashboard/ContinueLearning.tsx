export default function ContinueLearning() {
  return (
    <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
      <h2 className="mb-5 text-2xl font-bold text-slate-800">
        Continue Learning
      </h2>

      <div className="rounded-xl border border-slate-200 p-5">
        <h3 className="text-xl font-semibold text-slate-800">
          React Fundamentals
        </h3>

        <p className="mt-2 text-slate-600">
          Progress: <span className="font-semibold">65%</span>
        </p>

        <div className="mt-4 h-3 w-full rounded-full bg-slate-200">
          <div className="h-3 w-[65%] rounded-full bg-blue-600"></div>
        </div>

        <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition duration-300 hover:bg-blue-700">
          Continue Course
        </button>
      </div>
    </div>
  );
}