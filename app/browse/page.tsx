import BrowseHeader from '@/components/browse/BrowseHeader';

function EmptyMemoryCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Memory Title Placeholder
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Date placeholder
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="text-gray-600 dark:text-gray-300">
            <span className="font-medium">Setting:</span>
            <span className="ml-2 text-gray-500 dark:text-gray-400">Location placeholder</span>
          </div>
          
          <div className="text-gray-600 dark:text-gray-300">
            <span className="font-medium">Music:</span>
            <span className="ml-2 text-gray-500 dark:text-gray-400">Music type placeholder</span>
          </div>
          
          <div className="text-gray-600 dark:text-gray-300">
            <span className="font-medium">Info:</span>
            <p className="mt-1 text-gray-500 dark:text-gray-400">Additional information placeholder...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Browse Memories</h1>
        <BrowseHeader />
        <div className="max-w-4xl mx-auto">
          <EmptyMemoryCard />
        </div>
      </div>
    </div>
  );
} 