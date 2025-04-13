import Link from 'next/link';
import { getAllArguments, getAllCategories } from '../lib/getArguments';
import LinkifyText from '../components/LinkifyText';

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
                    <div key={argument.id} className="border border-gray-200 rounded-lg p-5 transition-shadow hover:shadow-lg bg-white flex flex-col">
                        <h3 className="text-lg font-semibold mb-3 flex items-start">
                            <span className="text-red-500 mr-2.5 pt-1 text-base">❗</span>
                            {argument.claim}
                        </h3>
                        <p className="text-gray-600 mb-4 flex items-start flex-grow text-sm leading-relaxed">
                            <span className="text-green-600 mr-2.5 pt-1 text-base">✅</span>
                            <LinkifyText text={argument.fact.length > 100
                                ? `${argument.fact.substring(0, 100)}...`
                                : argument.fact} />
                        </p>
                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                            <Link
                                href={`/argument/${argument.id}`}
                                className="text-green-700 hover:text-green-900 font-medium text-sm"
                            >
                                Read more →
                            </Link>
                            <Link
                                href={`/${argument.category}`}
                                className="bg-gray-100 px-2.5 py-1 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors capitalize"
                            >
                                {argument.category}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
} 