"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { Course } from "@/types/course";

type Props = {
  courses: Course[];
};

export default function CourseProgressChart({ courses }: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Course Progress
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={courses}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="progress" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}