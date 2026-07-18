import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

import type { Course } from "@/types/course";

import { db, auth } from "@/lib/firebase";

// Create Course
export const createCourse = async (
  title: string,
  description: string,
  progress: number
) => {
  return await addDoc(collection(db, "courses"), {
    title,
    description,
    progress,
    uid: auth.currentUser?.uid,
    createdAt: serverTimestamp(),
  });
};

// Get Current User Courses
export const getCourses = async () => {
  const user = auth.currentUser;

  if (!user) {
    return [];
  }

  const q = query(
    collection(db, "courses"),
    where("uid", "==", user.uid)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Course, "id">),
  }));
};

// Update Course
export const updateCourse = async (
  id: string,
  data: {
    title: string;
    description: string;
    progress: number;
  }
) => {
  await updateDoc(doc(db, "courses", id), data);
};

// Delete Course
export const deleteCourse = async (id: string) => {
  await deleteDoc(doc(db, "courses", id));
};