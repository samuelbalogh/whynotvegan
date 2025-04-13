import Link from 'next/link';

interface CategoryNavProps {
    categories: string[];
    activeCategory?: string;
}

export default function CategoryNav({ categories, activeCategory }: CategoryNavProps) {
    return (
        <div className="flex flex-wrap gap-2 py-4 justify-center">
            {categories.map((category) => (
                <Link
                    key={category}
                    href={`/${category}`}
                    className={`px-4 py-2 rounded-full ${activeCategory === category
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                >
                    {category}
                </Link>
            ))}
        </div>
    );
} 