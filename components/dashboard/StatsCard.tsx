type StatsCardProps = {
  title: string;
  value: string;
};

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      <h3 className="text-sm text-gray-600">{title}</h3>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}