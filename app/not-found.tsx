import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-lg mb-6">
        Sorry, the content you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
      >
        Return to Homepage
      </Link>
    </div>
  );
} 