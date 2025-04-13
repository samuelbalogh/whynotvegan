import Link from 'next/link';
import { getArgumentsByCategory, getAllCategories } from '../../lib/getArguments';

export async function generateStaticParams() {
    const categories = getAllCategories();
    return categories.map((category) => ({
        category
    }));
}

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ category: string }>;
}) {
    const { category } = await params;
    const categoryArgs = getArgumentsByCategory(category);
    const allCategories = getAllCategories();

    return (
        <main className="container mx-auto px-4">
            <div className="mb-8 border-b pb-4 border-gray-200">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 capitalize text-green-800">
                    Category: {category}
                </h1>
                <Link href="/" className="text-sm text-green-700 hover:underline">
                    ← Back to all arguments
                </Link>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-12 py-4 border-y border-gray-200">
                {allCategories.map((cat) => (
                    <Link
                        key={cat}
                        href={`/${cat}`}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors capitalize ${cat === category
                                ? 'bg-green-700 text-white border border-green-700'
                                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
                            }`}
                    >
                        {cat}
                    </Link>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryArgs.map((argument) => (
                    <div key={argument.id} className="border border-gray-200 rounded-lg p-5 transition-shadow hover:shadow-lg bg-white flex flex-col">
                        <h3 className="text-lg font-semibold mb-3 flex items-start">
                            <span className="text-red-500 mr-2.5 pt-1 text-base">❗</span>
                            {argument.claim}
                        </h3>
                        <p className="text-gray-600 mb-4 flex items-start flex-grow text-sm leading-relaxed">
                            <span className="text-green-600 mr-2.5 pt-1 text-base">✅</span>
                            {argument.fact.length > 100
                                ? `${argument.fact.substring(0, 100)}...`
                                : argument.fact}
                        </p>
                        <Link
                            href={`/argument/${argument.id}`}
                            className="text-green-700 hover:text-green-900 font-medium text-sm mt-auto pt-4 border-t border-gray-100 inline-block"
                        >
                            Read more →
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}
