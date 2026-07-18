"use client";

import { useState } from "react";
import { updateCourse } from "@/services/courseService";
import type { Course } from "@/types/course";

type Props = {
  course: Course;
  onUpdated: () => void;
};

export default function EditCourseForm({ course, onUpdated }: Props) {
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);
  const [progress, setProgress] = useState(course.progress);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateCourse(course.id, {
        title,
        description,
        progress,
      });

      alert("Course updated successfully!");
      onUpdated();
    } catch (err) {
      console.error(err);
      alert("Failed to update course.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="rounded-lg border bg-white p-6 shadow"
    >
      <h2 className="mb-4 text-xl font-bold">Edit Course</h2>

      <input
        className="mb-4 w-full rounded border p-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="mb-4 w-full rounded border p-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        min={0}
        max={100}
        className="mb-4 w-full rounded border p-3"
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded bg-green-600 px-5 py-2 text-white hover:bg-green-700"
      >
        {loading ? "Updating..." : "Update Course"}
      </button>
    </form>
  );
}