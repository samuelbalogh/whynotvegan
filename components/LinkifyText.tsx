import React from 'react';

const LinkifyText = ({ text }: { text: string }) => {
    const linkRegex = /(\[([^\]]+)\]\((https?:\/\/[^\)]+)\))|(https?:\/\/[^\s]+)/g;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    linkRegex.lastIndex = 0;

    while ((match = linkRegex.exec(text)) !== null) {
        const markdownText = match[2];
        const markdownUrl = match[3];
        const standardUrlMatch = match[4];
        const currentIndex = match.index;

        if (currentIndex > lastIndex) {
            elements.push(text.substring(lastIndex, currentIndex));
        }

        if (markdownUrl) {
            if (currentIndex > 0 && text[currentIndex - 1] !== ' ') {
                elements.push('\u00A0'); // Ensure leading non-breaking space
            }
            elements.push(
                <a
                    key={`${lastIndex}-md`}
                    href={markdownUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    {markdownText || markdownUrl}
                </a>
            );
            if (text[currentIndex + match[1].length] !== ' ') {
                elements.push('\u00A0'); // Ensure trailing non-breaking space
            }
            lastIndex = currentIndex + match[1].length;
        } else if (standardUrlMatch) {
            let urlToLink = standardUrlMatch;
            let trailingChars = '';

            const trailingMatch = standardUrlMatch.match(/([.,!?;:]|\)|\))+$/);
            if (trailingMatch) {
                trailingChars = trailingMatch[0];
                urlToLink = standardUrlMatch.substring(0, standardUrlMatch.length - trailingChars.length);
            }

            if (currentIndex > 0 && text[currentIndex - 1] !== ' ') {
                elements.push(' '); // Ensure leading space
            }
            elements.push(
                <a
                    key={`${lastIndex}-url`}
                    href={urlToLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
                >
                    {urlToLink}
                </a>
            );
            if (text[currentIndex + standardUrlMatch.length] !== ' ') {
                elements.push(' '); // Ensure trailing space
            }
            if (trailingChars) {
                elements.push(trailingChars);
            }
            lastIndex = currentIndex + standardUrlMatch.length;
        } else {
            elements.push(match[0]);
            lastIndex = linkRegex.lastIndex;
        }

        if (lastIndex === currentIndex) {
            lastIndex++;
        }
        linkRegex.lastIndex = lastIndex;
    }

    if (lastIndex < text.length) {
        elements.push(text.substring(lastIndex));
    }

    return <>{elements.map((el, i) => <React.Fragment key={i}>{el}</React.Fragment>)}</>;
};

export default LinkifyText;