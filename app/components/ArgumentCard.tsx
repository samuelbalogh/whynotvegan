import Link from 'next/link';
import { Argument } from '../../lib/getArguments';

interface ArgumentCardProps {
    argument: Argument;
    showCategoryBadge?: boolean;
    showReadMore?: boolean;
}

export default function ArgumentCard({
    argument,
    showCategoryBadge = true,
    showReadMore = true
}: ArgumentCardProps) {
    return (
        <div className="border rounded-lg p-4 mb-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
                <span className="text-red-500 mr-2">❗</span>
                <Link href={`/argument/${argument.id}`} className="hover:underline text-inherit">
                    {argument.claim}
                </Link>
            </h3>
            <p className="mb-3">
                <span className="text-green-500 mr-2">✅</span>
                {argument.fact.length > 150
                    ? `${argument.fact.substring(0, 150)}...`
                    : argument.fact}
            </p>
            <div className="flex justify-between items-center">
                {showReadMore && (
                    <Link
                        href={`/argument/${argument.id}`}
                        className="text-blue-600 hover:underline text-sm"
                    >
                        Read more
                    </Link>
                )}
                {showCategoryBadge && (
                    <Link
                        href={`/${argument.category}`}
                        className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-700 hover:bg-gray-300"
                    >
                        {argument.category}
                    </Link>
                )}
            </div>
        </div>
    );
} 