import Link from 'next/link';
import { getAllArguments, getAllCategories } from '../lib/getArguments';
import ArgumentCard from './components/ArgumentCard';

export default function Home() {
    const allArguments = getAllArguments();
    const categories = getAllCategories();

    return (
        <main className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">Why Not Vegan?</h1>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Explore evidence-based facts to common anti-vegan arguments.</p>

            {/* Category Navigation */}
            <div className="flex flex-wrap gap-2 justify-center mb-12 py-4 border-y border-gray-200">
                {categories.map((category) => (
                    <Link
                        key={category}
                        href={`/${category}`}
                        className="px-4 py-1.5 rounded-full text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-colors capitalize"
                    >
                        {category}
                    </Link>
                ))}
            </div>

            {/* Argument Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allArguments.map((argument) => (
                    <ArgumentCard key={argument.id} argument={argument} />
                ))}
            </div>
        </main>
    );
} 