import React, { useState, useEffect } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { motion } from 'framer-motion';

interface CodeBlockProps {
    code: string;
    language: string;
    className?: string;
    showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
    code,
    language,
    className = '',
    showLineNumbers = true
}) => {
    const [displayedCode, setDisplayedCode] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedCode(code.slice(0, index + 1));
            index++;
            if (index > code.length) {
                clearInterval(intervalId);
            }
        }, 10); // Adjust speed here

        return () => clearInterval(intervalId);
    }, [code]);

    return (
        <div className={`rounded-md overflow-hidden ${className}`}>
            <Highlight
                theme={themes.vsDark}
                code={displayedCode}
                language={language}
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={`${className} p-4 overflow-auto text-sm font-mono leading-relaxed bg-transparent!`} style={{ ...style, backgroundColor: 'transparent' }}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })} className="table-row">
                                {showLineNumbers && (
                                    <span className="table-cell text-right pr-4 text-gray-500 select-none opacity-50">
                                        {i + 1}
                                    </span>
                                )}
                                <span className="table-cell">
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token, key })} />
                                    ))}
                                </span>
                            </div>
                        ))}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-2 h-5 bg-blue-400 ml-1 align-middle"
                        />
                    </pre>
                )}
            </Highlight>
        </div>
    );
};
