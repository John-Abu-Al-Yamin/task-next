"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="w-full max-w-md text-center space-y-6">
        <div>
          <h1 className="text-7xl font-extrabold text-gray-300 dark:text-gray-700">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition duration-200 shadow"
          >
            <Home size={18} />
            Go to Home
          </Link>
        </div>

        <div className="border-t pt-4 border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need help?{" "}
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 underline"
            >
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
