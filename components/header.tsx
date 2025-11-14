"use client";

import Link from "next/link";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800">GymTracker</h1>
      <nav>
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
