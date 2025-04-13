'use client';

import { useState } from 'react';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto my-6">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search arguments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 rounded-full border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600"
                >
                    🔍
                </button>
            </div>
        </form>
    );
} 