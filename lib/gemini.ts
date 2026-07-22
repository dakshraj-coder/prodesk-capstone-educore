import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("NEXT_PUBLIC_GEMINI_API_KEY is missing");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function generateCourseDescription(
  courseTitle: string
): Promise<string> {
  const prompt = `
Generate a professional course description for the following course.

Course Title: ${courseTitle}

Requirements:
- 2 to 3 sentences
- Around 80-100 words
- Professional and engaging
- Return only the description
`;

  const result = await model.generateContent(prompt);

  return result.response.text().trim();
}

export async function generateQuiz(
  courseTitle: string
): Promise<string> {
  const prompt = `
You are an experienced university instructor.

Generate exactly 5 multiple-choice questions for the course:

${courseTitle}

Requirements:
- Each question should have 4 options (A, B, C, D)
- Clearly indicate the correct answer.
- Keep the questions suitable for beginners.
- Return plain text only.
`;

  const result = await model.generateContent(prompt);

  return result.response.text().trim();
}