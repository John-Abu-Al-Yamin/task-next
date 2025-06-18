import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="z-50 min-h-screen  flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="w-full max-w-md text-center">
        <div className="pt-6">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the
              wrong URL.
            </p>
          </div>

          <div className="space-y-3">
            <button  className="w-full text-white">
              <Link href="/">
                Go Home
              </Link>
            </button>

          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Need help?{" "}
              <Link href="/" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
                Contact support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
