import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

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