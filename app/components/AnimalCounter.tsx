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

// Function to format large numbers with suffixes
const formatNumberWithSuffix = (num: number): string => {
    if (num < 1000) return Math.floor(num).toString();
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    const i = Math.floor(Math.log10(num) / 3);
    const scaledNum = num / Math.pow(1000, i);
    // Use 1 decimal place for K, M, B, T unless it's >= 100
    const decimalPlaces = scaledNum < 100 ? 1 : 0;
    return scaledNum.toFixed(decimalPlaces) + suffixes[i];
};

export default function AnimalCounter({ title, totalPerYearString }: AnimalCounterProps) {
    const ratePerSecond = calculateRatePerSecond(totalPerYearString);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (ratePerSecond === 0) return;

        const interval = setInterval(() => {
            setCount(prevCount => prevCount + ratePerSecond);
        }, 100); // Update every 100ms

        return () => clearInterval(interval); // Cleanup on unmount
    }, [ratePerSecond]);

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm text-center">
            <h3 className="text-sm font-semibold mb-1 text-gray-700 h-8 flex items-center justify-center break-words">{title}</h3>
            <p className="text-xl font-bold text-red-700 min-h-[28px]">
                {formatNumberWithSuffix(count)}
            </p>
            <p className="text-[10px] text-gray-500 leading-tight mt-0.5">killed since load</p>
            <p className="text-[10px] text-gray-500 leading-tight">({Math.round(ratePerSecond / 10)}/sec)</p>
        </div>
    );
}
