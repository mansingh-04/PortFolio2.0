import { useState, useEffect } from 'react';

export function AboutPreview() {
    const [typedText, setTypedText] = useState("");
    const fullText = "Hi, I'm Manpreet Singh 👋";
    const [terminalLines, setTerminalLines] = useState<string[]>([]);

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setTypedText(prev => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const lines = [
            { text: "> initializing profile...", delay: 800 },
            { text: "> loading modules: [react, node, aws, ai]...", delay: 1500 },
            { text: "> accessing stats...", delay: 2400 },
            { text: "SUCCESS: 3+ Years Experience found", delay: 3000 },
            { text: "SUCCESS: 20+ High Impact Projects loaded", delay: 3800 },
            { text: "SUCCESS: 100% Job Success Rate verified", delay: 4600 },
            { text: "> readiness: MAXIMUM", delay: 5400 }
        ];

        const timeouts: NodeJS.Timeout[] = [];

        lines.forEach(line => {
            const timeout = setTimeout(() => {
                setTerminalLines(prev => [...prev, line.text]);
            }, line.delay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
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
                                "I build things for the web."
                            </p>
                        </div>

                        {/* Interactive Terminal for HR Scanning */}
                        <div className="bg-[#0d1117] border border-[#30363d] rounded-md p-4 my-6 font-mono text-sm shadow-inner min-h-[160px]">
                            <div className="flex gap-1.5 mb-3 border-b border-[#21262d] pb-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                                <span className="ml-2 text-xs text-[#8b949e] opacity-50">bash — 80x24</span>
                            </div>
                            <div className="space-y-1">
                                {terminalLines.map((line, i) => {
                                    let colorClass = "text-[#8b949e]";
                                    if (line.includes("Experience")) colorClass = "text-green-400";
                                    if (line.includes("Projects")) colorClass = "text-blue-400";
                                    if (line.includes("Job Success")) colorClass = "text-yellow-400";
                                    if (line.includes("readiness")) colorClass = "text-purple-400 font-bold";

                                    return (
                                        <div key={i} className={`${colorClass} animate-in fade-in slide-in-from-left-2 duration-300`}>
                                            {line}
                                        </div>
                                    );
                                })}
                                <div className="animate-cursor-blink w-2 h-4 bg-[#8b949e] inline-block align-middle ml-1"></div>
                            </div>
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
                            <button className="relative overflow-hidden group bg-[#1f6feb] text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-lg border border-[rgba(240,246,252,0.1)] hover:scale-105 hover:shadow-blue-900/50">
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#30363d] text-[#e6edf3]">About Me</h2>
                    <p className="leading-7 mb-4">
                        Computer Science undergraduate with strong foundations in data structures and algorithms (200+ LeetCode problems solved).
                        Built end-to-end web applications and AI-powered features using Node.js (Express), Python, and JavaScript.
                    </p>
                    <p className="leading-7">
                        When I'm not coding, you can find me exploring new technologies, contributing to open source, or gaming.
                    </p>
                </section>

                <section className="pt-4">
                    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#30363d] text-[#e6edf3]">Education</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-[#e6edf3]">Bachelor of Technology (Artificial intelligence)</h3>
                        <div className="text-[#8b949e] mb-2">Newton School of Technology, Rishihood University</div>
                        <div className="text-sm text-[#8b949e] font-mono">2024 - 2028</div>
                    </div>
                </section>

                <section className="pt-4">
                    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#30363d] text-[#e6edf3]">Interests</h2>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#58a6ff]">
                        <li className="hover:translate-x-1 transition-transform cursor-default">Agentic AI & Machine Learning</li>
                        <li className="hover:translate-x-1 transition-transform cursor-default">Web Development</li>
                        <li className="hover:translate-x-1 transition-transform cursor-default">System Architecture</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
