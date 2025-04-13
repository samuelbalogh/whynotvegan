import { getAllArguments, getArgumentsByCategory, getArgumentById, getAllCategories } from '../lib/getArguments';
import fs from 'fs';
import path from 'path';

// Mock the fs module
jest.mock('fs', () => ({
    readFileSync: jest.fn(),
}));

describe('Argument utility functions', () => {
    const mockArguments = [
        {
            id: 'test-1',
            category: 'health',
            claim: 'Test claim 1',
            fact: 'Test fact 1',
            citations: []
        },
        {
            id: 'test-2',
            category: 'ethics',
            claim: 'Test claim 2',
            fact: 'Test fact 2',
            citations: []
        },
        {
            id: 'test-3',
            category: 'health',
            claim: 'Test claim 3',
            fact: 'Test fact 3',
            citations: []
        }
    ];

    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();

        // Setup the mock implementation
        (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify(mockArguments));
    });

    test('getAllArguments returns all arguments', () => {
        const args = getAllArguments();
        expect(args).toHaveLength(3);
        expect(args[0].id).toBe('test-1');
        expect(fs.readFileSync).toHaveBeenCalledTimes(1);
    });

    test('getArgumentsByCategory returns arguments with matching category', () => {
        const healthArgs = getArgumentsByCategory('health');
        expect(healthArgs).toHaveLength(2);
        expect(healthArgs[0].id).toBe('test-1');
        expect(healthArgs[1].id).toBe('test-3');
    });

    test('getArgumentById returns the correct argument', () => {
        const arg = getArgumentById('test-2');
        expect(arg).toBeDefined();
        expect(arg?.category).toBe('ethics');
    });

    test('getAllCategories returns unique categories', () => {
        const categories = getAllCategories();
        expect(categories).toHaveLength(2);
        expect(categories).toContain('health');
        expect(categories).toContain('ethics');
    });

    test('getArgumentById returns undefined for non-existent ID', () => {
        const arg = getArgumentById('non-existent');
        expect(arg).toBeUndefined();
    });
}); 