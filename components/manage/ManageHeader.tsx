'use client'
import { useState } from 'react';

export default function ManageHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Will be implemented with database integration
    console.log('Managing memory:', searchQuery);
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow-md p-4 mb-6 rounded-lg">
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            placeholder="Which memory do you want to manage?"
            className="w-full p-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-md 
                     focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                     dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-purple-500"
          >
            🔍
          </button>
        </div>
      </form>
    </div>
  );
}