import { useState, useEffect } from 'react';

interface AboutPreviewProps {
    onNavigate?: (file: 'contact') => void;
}

export function AboutPreview({ onNavigate }: AboutPreviewProps) {
    const [typedText, setTypedText] = useState("");
    const fullText = "Manpreet Singh";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="p-8 max-w-4xl mx-auto text-[#c9d1d9] font-sans selection:bg-[#264f78] bg-[#0d1117] min-h-full">
            {/* File Header mimicking Github Readme / VS Code Preview */}
            <div className="pb-8 border-b border-[#30363d] mb-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-4 text-[#e6edf3] pb-2 min-h-[48px]">
                            {typedText}<span className="animate-cursor-blink">|</span>
                        </h1>
                        <div className="bg-[#161b22] border-l-4 border-[#58a6ff] p-4 my-4 rounded-r">
                            <p className="italic text-[#8b949e]">
                                Computer Science Undergraduate | Aspiring Software Engineer (Backend & AI)
                            </p>
                        </div>



                        {/* CTA Buttons */}
                        <div className="flex gap-4 mt-2">
                            <button className="relative overflow-hidden group bg-[#238636] text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-lg border border-[rgba(240,246,252,0.1)] hover:scale-105 hover:shadow-green-900/50">
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download Resume
                                </div>
                            </button>
                            <button
                                onClick={() => onNavigate?.('contact')}
                                className="relative overflow-hidden group bg-[#1f6feb] text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-lg border border-[rgba(240,246,252,0.1)] hover:scale-105 hover:shadow-blue-900/50"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {/* Intro Bio */}
                <p className="leading-7 mb-8 text-[#c9d1d9] border-b border-[#30363d] pb-8">
                    Computer Science undergraduate with strong foundations in data structures and algorithms (200+ LeetCode problems solved), and hands-on experience building backend systems and AI-powered web applications using Node.js and Python.
                </p>

                {/* Highlights */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#30363d] text-[#e6edf3]">Highlights</h2>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#58a6ff]">
                        <li className="hover:translate-x-1 transition-transform cursor-default">
                            Solved <strong className="text-[#e6edf3]">200+ LeetCode</strong> problems with a strong focus on DSA fundamentals
                        </li>
                        <li className="hover:translate-x-1 transition-transform cursor-default">
                            Built end-to-end web applications using <strong className="text-[#e6edf3]">Node.js (Express)</strong>, <strong className="text-[#e6edf3]">React</strong>, and <strong className="text-[#e6edf3]">PostgreSQL</strong>
                        </li>
                        <li className="hover:translate-x-1 transition-transform cursor-default">
                            Integrated AI-powered features using <strong className="text-[#e6edf3]">LangChain</strong> and LLM APIs
                        </li>
                        <li className="hover:translate-x-1 transition-transform cursor-default">
                            Experience working across the full stack with a backend-first approach
                        </li>
                    </ul>
                </section>

                {/* About Me */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#30363d] text-[#e6edf3]">About Me</h2>
                    <p className="leading-7">
                        I am a Computer Science undergraduate pursuing a B.Tech in Artificial Intelligence. I enjoy working on backend systems, solving algorithmic problems, and building practical AI-driven applications. I focus on writing clean, maintainable code and understanding systems end-to-end.
                    </p>
                </section>

                {/* Education */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#30363d] text-[#e6edf3]">Education</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-[#e6edf3]">Bachelor of Technology (Artificial Intelligence)</h3>
                        <div className="text-[#8b949e] mb-1">Newton School of Technology, Rishihood University</div>
                        <div className="text-sm text-[#8b949e] font-mono">2024 – 2028</div>
                    </div>
                </section>

                {/* Technical Interests */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#30363d] text-[#e6edf3]">Technical Interests</h2>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#58a6ff]">
                        <li className="hover:translate-x-1 transition-transform cursor-default">Agentic AI & Applied Machine Learning</li>
                        <li className="hover:translate-x-1 transition-transform cursor-default">Backend & System Design</li>
                        <li className="hover:translate-x-1 transition-transform cursor-default">Web Application Architecture</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
