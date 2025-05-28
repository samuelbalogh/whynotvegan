import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArgumentById, getAllArguments } from '../../../lib/getArguments';
import React from 'react';
import LinkifyText from '../../../components/LinkifyText';

export async function generateStaticParams() {
    const allArgs = getAllArguments();
    return allArgs.map((argument) => ({
        id: argument.id,
    }));
}

export default async function ArgumentPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const argument = getArgumentById(id);

    if (!argument) {
        notFound();
    }

    // Format the fact with bullet points if it contains multiple sentences or newlines
    const formattedfact = argument.fact
        .split(/\.\s+|\n/) // Split by period+space or newline
        .map(sentence => sentence.trim())
        .filter(sentence => sentence.length > 0)
        .map(sentence => sentence.endsWith('.') ? sentence : sentence + '.');

    return (
        <main className="container mx-auto px-4 py-8 max-w-3xl">
            <div className="mb-6 pb-4 border-b border-gray-200">
                <Link
                    href={`/`}
                    className="text-sm text-green-700 hover:underline capitalize mb-2 inline-block"
                >
                    ← Back to all arguments
                </Link>
                <h1 className="text-2xl md:text-3xl font-bold flex items-start text-gray-800">
                    <span className="text-red-500 mr-3 pt-1 text-xl md:text-2xl">❗</span>
                    {argument.claim}
                </h1>
            </div>

            {/* fact Section */}
            <div className="mb-10 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center text-green-800">
                    <span className="text-green-600 mr-3 text-xl md:text-2xl">✅</span>
                    Facts:
                </h2>
                <div className="prose prose-sm sm:prose-base max-w-none pl-10 text-gray-700">
                    {formattedfact.length > 1 ? (
                        <ul className="list-disc space-y-1">
                            {formattedfact.map((point, index) => (
                                <li key={index}><LinkifyText text={point.charAt(0).toUpperCase() + point.slice(1)} /></li>
                            ))}
                        </ul>
                    ) : (
                        <p><LinkifyText text={argument.fact.charAt(0).toUpperCase() + argument.fact.slice(1)} /></p>
                    )}
                </div>
            </div>

            {/* Citations Section */}
            {argument.citations.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center text-blue-800">
                        <span className="mr-3 text-xl md:text-2xl">📚</span>
                        Citations
                    </h2>
                    <ul className="pl-10 space-y-2 list-decimal list-inside text-sm">
                        {argument.citations.map((citation, index) => (
                            <li key={index} className="text-blue-700 break-words">
                                <a
                                    href={citation.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline hover:text-blue-900 transition-colors"
                                >
                                    {citation.title.length > 80
                                        ? `${citation.title.slice(0, 77)}...`
                                        : citation.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
}
