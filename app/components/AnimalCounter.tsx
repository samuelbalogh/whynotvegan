'use client';

import { useState, useEffect } from 'react';

interface AnimalCounterProps {
    title: string;
    totalPerYearString: string; // e.g., "~1.5 billion"
}

// Function to parse the string and calculate per second rate
const calculateRatePerSecond = (totalString: string): number => {
    const match = totalString.match(/[\d.]+/); // Extract the first number
    if (!match) return 0;

    let number = parseFloat(match[0]);

    if (totalString.includes('trillion')) {
        number *= 1e12;
    } else if (totalString.includes('billion')) {
        number *= 1e9;
    } else if (totalString.includes('million')) {
        number *= 1e6;
    }

    const secondsPerYear = 365 * 24 * 60 * 60;
    return number / secondsPerYear;
};

export default function AnimalCounter({ title, totalPerYearString }: AnimalCounterProps) {
    const ratePerSecond = calculateRatePerSecond(totalPerYearString);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (ratePerSecond === 0) return;

        const interval = setInterval(() => {
            setCount(prevCount => prevCount + ratePerSecond);
        }, 100); // Update every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, [ratePerSecond]);

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 h-12 flex items-center justify-center">{title}</h3>
            <p className="text-3xl font-bold text-red-700 min-h-[40px]">
                {/* Format to add commas and handle large numbers */}
                {Math.floor(count).toLocaleString()}
            </p>
            <p className="text-xs text-gray-500 mt-1">killed since page load</p>
            <p className="text-xs text-gray-500">({ratePerSecond.toFixed(1)}/sec)</p>
        </div>
    );
}
