import argumentsData from '../data/arguments.json';

export interface Citation {
    title: string;
    url: string;
}

export interface Argument {
    id: string;
    category: string;
    claim: string;
    fact: string;
    citations: Citation[];
}

export function getAllArguments(): Argument[] {
    return argumentsData as Argument[];
}

export function getArgumentsByCategory(category: string): Argument[] {
    const allArguments = getAllArguments();
    return allArguments.filter(argument => argument.category === category);
}

export function getArgumentById(id: string): Argument | undefined {
    const allArguments = getAllArguments();
    return allArguments.find(argument => argument.id === id);
}

export function getAllCategories(): string[] {
    const allArguments = getAllArguments();
    const categories = allArguments.map(argument => argument.category);
    return Array.from(new Set(categories));
}
