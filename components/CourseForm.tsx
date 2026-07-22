"use client";

import { useState } from "react";
import { createCourse } from "@/services/courseService";
import {
  generateCourseDescription,
  generateQuiz,
} from "@/lib/gemini";
import { toast } from "sonner";

type Props = {
  onCourseAdded: () => void;
};

export default function CourseForm({ onCourseAdded }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [quiz, setQuiz] = useState("");
  const [quizLoading, setQuizLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await createCourse(title, description, progress);

      setTitle("");
      setDescription("");
      setProgress(0);

      onCourseAdded();

      toast.success("Course added successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add course.");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateDescription = async () => {
    if (!title.trim()) {
      toast.error("Please enter a course title first.");
      return;
    }

    try {
      setAiLoading(true);
      const generatedDescription =
      await generateCourseDescription(title);
      
      setDescription(generatedDescription);
      
      toast.success("Description generated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate description.");
    } finally {
      setAiLoading(false);
    }
  };

  const handleGenerateQuiz = async () => {
    if (!title.trim()) {
      toast.error("Please enter a course title first.");
      return;
    }
    
    try {
      setQuizLoading(true);
      
      const generatedQuiz = await generateQuiz(title);
      
      setQuiz(generatedQuiz);
      
      toast.success("Quiz generated successfully!");
    
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate quiz.");
    } finally {
      setQuizLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg"
    >
      <h2 className="mb-2 text-3xl font-bold text-gray-900">
        📚 Add New Course
      </h2>
      
      <p className="mb-6 text-gray-500">
        Create a course and use AI to generate content instantly.
      </p>

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

      <div className="mb-6 flex flex-wrap gap-3">
        <button
        type="button"
        onClick={handleGenerateDescription}
        disabled={aiLoading}
        className="rounded-lg bg-violet-600 px-5 py-3 text-white font-medium transition hover:bg-violet-700 disabled:bg-gray-400"
        >
          {aiLoading
          ? "Generating..."
          : "✨ Generate Description"}
        </button>
        
        <button
        type="button"
        onClick={handleGenerateQuiz}
        disabled={quizLoading}
        className="rounded-lg bg-green-600 px-5 py-3 text-white font-medium transition hover:bg-green-700 disabled:bg-gray-400"
        >
          {quizLoading
          ? "Generating Quiz..."
          : "📝 Generate Quiz"}
        </button>
      </div>

      <div className="mb-6">
        <label
        htmlFor="progress"
        className="mb-2 block text-sm font-medium text-gray-700"
        >
          Course Progress: {progress}%
        </label>
        <input
        id="progress"
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
        className="w-full"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Adding..." : "Add Course"}
      </button>

      {quiz && (
        <div className="mt-6 rounded-lg border bg-gray-50 p-4">
          <h3 className="mb-3 text-lg font-semibold">
            AI Generated Quiz
          </h3>
          
          <pre className="whitespace-pre-wrap text-sm">
            {quiz}
          </pre>
        </div>
      )}
    </form>
  );
}