export default function Announcements() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">
        Announcements
      </h2>

      <ul className="space-y-3">
        <li>📢 New React course added.</li>
        <li>📢 Assignment deadline extended.</li>
        <li>📢 Live webinar on Friday.</li>
      </ul>
    </div>
  );
}