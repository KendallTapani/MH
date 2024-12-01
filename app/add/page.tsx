import MemoryForm from '@/components/add/MemoryForm';

export default function AddMemoryPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Add New Memory</h1>
        <MemoryForm />
      </div>
    </div>
  );
} 