'use client'
import { useState } from 'react';

export default function MemoryForm() {
  // State for form inputs
  const [memoryOverview, setMemoryOverview] = useState('');
  const [setting, setSetting] = useState('');
  const [info, setInfo] = useState('');
  const [music, setMusic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // We'll handle the submission logic later
    console.log({ memoryOverview, setting, info, music });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      {/* Memory Overview Section */}
      <div className="space-y-2">
        <label htmlFor="memory-overview" className="block text-lg font-medium text-gray-700 dark:text-gray-200">
          Memory Overview
        </label>
        <input
          id="memory-overview"
          type="text"
          value={memoryOverview}
          onChange={(e) => setMemoryOverview(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   dark:bg-gray-700 dark:text-white"
          placeholder="Enter your memory overview..."
        />
      </div>

      {/* Setting Section */}
      <div className="space-y-2">
        <label htmlFor="setting" className="block text-lg font-medium text-gray-700 dark:text-gray-200">
          Setting
        </label>
        <input
          id="setting"
          type="text"
          value={setting}
          onChange={(e) => setSetting(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   dark:bg-gray-700 dark:text-white"
          placeholder="Enter the setting..."
        />
      </div>

      {/* Info Section - Now a textarea */}
      <div className="space-y-2">
        <label htmlFor="info" className="block text-lg font-medium text-gray-700 dark:text-gray-200">
          Info
        </label>
        <textarea
          id="info"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          rows={4}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   dark:bg-gray-700 dark:text-white resize-y min-h-[100px]"
          placeholder="Enter additional information..."
        />
      </div>

      {/* Music Section */}
      <div className="space-y-2">
        <label htmlFor="music" className="block text-lg font-medium text-gray-700 dark:text-gray-200">
          Music
        </label>
        <input
          id="music"
          type="text"
          value={music}
          onChange={(e) => setMusic(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   dark:bg-gray-700 dark:text-white"
          placeholder="Enter type of music..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md
                 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Save Memory
      </button>
    </form>
  );
} 