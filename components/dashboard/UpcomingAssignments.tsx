export default function UpcomingAssignments() {
  const assignments = [
    {
      title: "React Hooks Quiz",
      due: "Tomorrow",
    },
    {
      title: "Next.js Project",
      due: "3 Days",
    },
    {
      title: "TypeScript Assignment",
      due: "Friday",
    },
  ];

  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">
        Upcoming Assignments
      </h2>

      <div className="space-y-4">
        {assignments.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border p-4"
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">
              Due: {item.due}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}