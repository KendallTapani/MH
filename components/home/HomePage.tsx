'use client'
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="w-full bg-white dark:bg-gray-800 shadow-md p-6 mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          Memory Record
        </h1>
      </header>

      {/* Main content with buttons */}
      <div className="flex flex-col md:flex-row flex-1 gap-8 p-8">
        {/* Add Memory Button - Left Side */}
        <Link href="/add" className="flex-1">
          <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex items-center justify-center cursor-pointer group">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                Add Memory
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Create a new memory record
              </p>
            </div>
          </div>
        </Link>

        {/* Browse Memories Button - Right Side */}
        <Link href="/browse" className="flex-1">
          <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex items-center justify-center cursor-pointer group">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-500 dark:text-green-400 mb-4 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors">
                Browse Memories
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                View and search your memories
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Manage Memories Button */}
      <div className="px-12 py-6">
        <Link href="/manage">
          <button className="h-10 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 
                         text-gray-700 dark:text-gray-300 rounded-md shadow-sm 
                         hover:shadow transition-all duration-200 text-sm font-medium
                         border border-gray-300 dark:border-gray-700">
            Manage Memories
          </button>
        </Link>
      </div>
    </div>
  );
} 