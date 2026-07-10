type StatsCardProps = {
  title: string;
  value: string;
};

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">
        {title}
      </h3>

      <p className="mt-4 text-4xl font-bold text-slate-800">
        {value}
      </p>
    </div>
  );
}