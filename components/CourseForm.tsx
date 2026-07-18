"use client";

import { useState } from "react";
import { createCourse } from "@/services/courseService";

type Props = {
  onCourseAdded: () => void;
};

export default function CourseForm({ onCourseAdded }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await createCourse(title, description, progress);

      setTitle("");
      setDescription("");
      setProgress(0);

      onCourseAdded();

      alert("Course added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add course.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-lg bg-white p-6 shadow"
    >
      <h2 className="mb-4 text-2xl font-bold">Add Course</h2>

      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 w-full rounded border p-3"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-4 w-full rounded border p-3"
      />

      <input
        type="number"
        min={0}
        max={100}
        placeholder="Progress"
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
        className="mb-4 w-full rounded border p-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Adding..." : "Add Course"}
      </button>
    </form>
  );
}