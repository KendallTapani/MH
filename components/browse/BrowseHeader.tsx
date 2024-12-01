'use client'
import { useState } from 'react';

export default function BrowseHeader() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be implemented later with database integration
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow-md p-4 mb-6 rounded-lg">
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search memories..."
            className="w-full p-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-md 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                     dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-blue-500"
          >
            🔍
          </button>
        </div>
      </form>
    </div>
  );
} 