import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import AnimalCounter from './components/AnimalCounter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Why Not Vegan?',
    description: 'Data-driven facts to common anti-vegan arguments',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gray-50 text-gray-800`}>
                <nav className="bg-green-700 text-white shadow-md">
                    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                        <Link href="/" className="text-xl font-semibold hover:text-green-100 transition-colors">
                            Why Not Vegan?
                        </Link>
                    </div>
                </nav>
                <div className="container mx-auto px-4 pt-4 -mb-4 md:pt-6 md:-mb-6 flex justify-center">
                    <div className="w-full max-w-xs space-y-2">
                        <Link href="/animal-numbers" className="block hover:opacity-90 transition-opacity">
                            <AnimalCounter
                                title="Total Land Animals Killed"
                                totalPerYearString="87.5 billion"
                            />
                        </Link>
                        <div className="grid grid-cols-3 gap-2">
                            <AnimalCounter title="🐷" totalPerYearString="1.5 billion" />
                            <AnimalCounter title="🐄" totalPerYearString="300 million" />
                            <AnimalCounter title="🐔" totalPerYearString="72.5 billion" />
                        </div>
                    </div>
                </div>
                <div className="py-8 md:py-12">
                    {children}
                </div>
                <footer className="bg-gray-100 border-t border-gray-200 py-6 mt-12">
                    <div className="container mx-auto text-center text-xs text-gray-500">
                        <p>© {new Date().getFullYear()} Why Not Vegan - Evidence-based information about veganism</p>
                    </div>
                </footer>
            </body>
        </html>
    );
} 