"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  updateProfile,
  verifyBeforeUpdateEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";

export default function EditProfilePage() {
  const router = useRouter();
  const auth = getAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName ?? "");
        setEmail(user.email ?? "");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSave = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        alert("No user is signed in.");
        return;
      }

      await updateProfile(user, {
        displayName: name,
      });

      if (email !== user.email) {
        await verifyBeforeUpdateEmail(user, email);

        alert(
          "A verification email has been sent to your new email address. Please verify it before the change takes effect."
        );
      }

      alert("Profile updated successfully!");
      router.push("/profile");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/requires-recent-login") {
          alert(
            "Please log in again before changing your email."
          );
        } else {
          alert(error.message);
        }
      } else {
        alert("Something went wrong.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold">
          Edit Profile
        </h1>

        <div className="mb-4">
          <label className="mb-2 block font-medium">
            Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-medium">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Save Changes
          </button>

          <button
            onClick={() => router.back()}
            className="rounded-lg border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}