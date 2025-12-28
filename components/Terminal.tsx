import { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';

interface TerminalProps {
    activeFile: string;
    openTabs: string[];
    setViewMode: (mode: 'code' | 'live') => void;
    setReaderMode: (mode: boolean) => void;
}

export function Terminal({ activeFile, openTabs, setViewMode, setReaderMode }: TerminalProps) {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<{ command: string; output: string }[]>([
        {
            command: '',
            output: 'Welcome to Portfolio Terminal v1.0.0\nType "help" for available commands.',
        },
    ]);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const commands: Record<string, string> = {
        help: 'Available commands:\n  npm start             - Start development server (Live View)\n  npm run start <app> - Open project demo (e.g., drplant, movieverse)\n  man <app>           - View project manual (e.g., drplant)\n  about               - Show information about me\n  skills              - List my technical skills\n  projects            - List available projects\n  contact             - Get contact information\n  clear               - Clear terminal\n  cat stats           - View career statistics',
        about: `
User: Manpreet Singh
Location: New Delhi, India
Education:
  Degree: Bachelor of Technology (Artificial Intelligence)
  College: Newton School of Technology, Rishihood University
  Year: 2024 - 2028
Bio: Artificial Intelligence undergraduate and Full Stack Developer. Passionate about building scalable applications and exploring AI integration. Always learning and building.
`,
        skills: 'Frontend: React, Next.js, TypeScript, Tailwind CSS\nBackend: Node.js, Express, Python, PostgreSQL, Firebase\nTools: Git, GitHub, VS Code, Postman\nAI/ML: LangChain, Gemini API',
        projects: 'Available Projects:\n1. DrPlant (dr-plant)\n   - AI-Powered Plant Health Analyzer\n   - Stack: Node.js, PostgreSQL, React, LangChain\n\n2. MovieVerse (movieverse)\n   - Movie Discovery & Trivia Platform\n   - Stack: Next.js, Firebase, TMDB API\n\nType "man <project_name>" for details.',
        contact: 'Email: manpreet.singh2024@nst.rishihood.edu.in\nGitHub: github.com/mansingh-04\nLinkedIn: linkedin.com/in/manpreet-singh-9bb415318\nLeetCode: leetcode.com/u/mansingh_04/\nLocation: New Delhi, India',
        clear: 'CLEAR',
    };

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        if (trimmedCmd === '') return;

        if (trimmedCmd === 'clear') {
            setHistory([]);
            return;
        }

        if (trimmedCmd === 'npm start' || trimmedCmd === 'npm run dev') {
            if (openTabs.length > 0) {
                setHistory([...history, { command: cmd, output: `Starting development server for ${activeFile}...\nSwitching to Live View...` }]);

                // Small delay for effect
                setTimeout(() => {
                    setViewMode('live');
                    setReaderMode(true);
                }, 800);
                return;
            } else {
                setHistory([...history, { command: cmd, output: '\x1b[31mError: No active file found.\x1b[0m\nPlease open a file to start the development server.' }]);
                return;
            }
        }

        if (trimmedCmd === 'cat stats') {
            const stats = `
MANPREET'S STATS ║
╠══════════════════════════════════════════════════════╣
║ 🎓 Education  : B.Tech (Artificial Intelligence)     ║
║ 🏫 Institute  : Newton School of Technology (NST)    ║
║ 🧠 DSA        : 200+ LeetCode problems solved        ║
║ 💻 Core Stack : Node.js, React (TS), PostgreSQL      ║
║ 🤖 AI Work    : LangChain, Gemini API, ML APIs       ║
║ 🛠️ Projects   : DrPlant, MovieVerse + others        ║
║ 📍 Location   : New Delhi, India                     ║
║ 🚀 Status     : Open to internships & full-time      ║
╚══════════════════════════════════════════════════════╝`;
            setHistory([...history, { command: cmd, output: stats }]);
            return;
        }

        if (trimmedCmd === 'man drplant' || trimmedCmd === 'man dr-plant') {
            const caseStudy = `
NAME
    DrPlant — AI-Powered Plant Health Analyzer

PROBLEM
    Plant owners lack an easy way to identify diseases, track health changes, 
    and receive actionable care guidance over time.

SOLUTION
    • Image-based plant disease detection using an external ML model
    • Context-aware care recommendations using Gemini via LangChain
    • Visual history tracking to monitor plant health over time

SYSTEM DESIGN
    Frontend:   React (TypeScript) with responsive UI and image upload flow
    Backend:    Node.js + Express for API orchestration and caching
    Database:   PostgreSQL for metadata, logs, and analysis history
    AI:         External ML API + Gemini (via LangChain)

ENGINEERING DECISIONS
    • Cached analysis results to prevent redundant AI calls and reduce cost
    • Limited stored analysis history to last 5 entries per plant
    • Separated raw ML detection from AI-generated care guidance
    • Injected user care logs into AI prompts for personalized recommendations

Running...
    Type 'npm run start drplant' to see the live demo.`;
            setHistory([...history, { command: cmd, output: caseStudy }]);
            return;
        }

        if (trimmedCmd === 'man movieverse') {
            const info = `
NAME
    movieverse — Movie Discovery & Trivia Platform

SYNOPSIS
    Frontend-focused web application built with Next.js for discovering movies,
    engaging users through trivia, and managing personal watchlists.

DESCRIPTION
    MovieVerse was built to practice real-world API integration, frontend state
    management, and authenticated user flows.

FEATURES
    • Search and explore movies using the TMDB API
    • Browse movies by genre with dynamic recommendations
    • Play a timed movie trivia game
    • Maintain a personal watchlist with authentication

TECH STACK
    • Next.js, React, Tailwind CSS
    • Firebase Authentication & Firestore
    • TMDB API

SCOPE
    This project intentionally focuses on frontend architecture, UX,
    and third-party API integration rather than complex backend systems.

Running...
    Type 'npm run start movieverse' to see the live demo.`;
            setHistory([...history, { command: cmd, output: info }]);
            return;
        }

        if (trimmedCmd === 'download resume' || trimmedCmd === 'open resume') {
            // Simulate download
            setHistory([...history, { command: cmd, output: 'Downloading resume.pdf... [100%]' }]);
            // In a real app we would trigger a link click here
            return;
        }


        // Link handling
        if (trimmedCmd.startsWith('npm run start ')) {
            const project = trimmedCmd.replace('npm run start ', '').trim();
            switch (project) {
                case 'drplant':
                case 'dr-plant':
                    window.open('https://dr-plant-one.vercel.app/', '_blank');
                    setHistory([...history, { command: cmd, output: 'Starting DrPlant production build...\nOpening https://dr-plant-one.vercel.app/' }]);
                    return;
                case 'movieverse':
                    window.open('https://capstone-sem2.vercel.app/', '_blank');
                    setHistory([...history, { command: cmd, output: 'Starting MovieVerse...\nOpening https://capstone-sem2.vercel.app/' }]);
                    return;
                default:
                    setHistory([...history, { command: cmd, output: `Error: Project '${project}' not found.\nTry 'drplant' or 'movieverse'.` }]);
                    return;
            }
        }

        if (trimmedCmd.startsWith('open ')) {
            const target = trimmedCmd.replace('open ', '').trim();
            switch (target) {
                case 'github':
                case 'github.com':
                    window.open('https://github.com/mansingh-04', '_blank');
                    setHistory([...history, { command: cmd, output: 'Opening GitHub profile...' }]);
                    return;
                case 'linkedin':
                    window.open('https://www.linkedin.com/in/manpreet-singh-9bb415318/', '_blank');
                    setHistory([...history, { command: cmd, output: 'Opening LinkedIn profile...' }]);
                    return;
                case 'leetcode':
                    window.open('https://leetcode.com/u/mansingh_04/', '_blank');
                    setHistory([...history, { command: cmd, output: 'Opening LeetCode profile...' }]);
                    return;
                case 'email':
                    window.location.href = 'mailto:manpreet.singh2024@nst.rishihood.edu.in';
                    setHistory([...history, { command: cmd, output: 'Opening default mail client...' }]);
                    return;
                default:
                    setHistory([...history, { command: cmd, output: `Error: Link '${target}' not found.` }]);
                    return;
            }
        }

        const output = commands[trimmedCmd] || `Command not found: ${cmd}\nType "help" for available commands.`;

        setHistory([...history, { command: cmd, output }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
        setInput('');
    };

    const [height, setHeight] = useState(250);
    const [isResizing, setIsResizing] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizing) return;
            // Calculate new height based on mouse position from bottom of screen or relative delta
            // Since Terminal is at bottom, height = totalHeight - mouseY
            // But easier: newHeight = height - dy. 
            // Let's use simpler absolute math relative to window bottom.
            const newHeight = window.innerHeight - e.clientY - 24; // 24px for status bar height
            if (newHeight > 50 && newHeight < window.innerHeight - 100) {
                setHeight(newHeight);
            }
        };

        const handleMouseUp = () => {
            setIsResizing(false);
            document.body.style.cursor = 'default';
        };

        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.body.style.cursor = 'ns-resize';
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing]);

    if (isCollapsed) {
        return (
            <div className="h-9 bg-[#1e1e1e] border-t border-[#3e3e3e] flex items-center justify-between px-4 cursor-pointer hover:bg-[#2d2d2d]" onClick={() => setIsCollapsed(false)}>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-[#ccccc]">
                    <span>Terminal</span>
                </div>
                <ChevronUp className="w-3.5 h-3.5 rotate-180 text-gray-400" />
            </div>
        );
    }

    return (
        <div
            className="bg-[#1e1e1e] border-t border-[#3e3e3e] flex flex-col"
            style={{ height: `${height}px`, transition: isResizing ? 'none' : 'height 0.1s ease-out' }}
        >
            {/* Resize Handle */}
            <div
                className="h-1 bg-transparent hover:bg-[#007fd4] cursor-ns-resize absolute w-full -mt-0.5 z-10"
                onMouseDown={(e) => {
                    e.preventDefault();
                    setIsResizing(true);
                }}
            />

            {/* Terminal Header Tabs */}
            <div className="h-9 min-h-[36px] bg-[#1e1e1e] flex items-center justify-between px-3 border-b border-[#252526] select-none">
                <div className="flex items-center gap-4 text-xs font-medium">
                    <div className="cursor-pointer text-[#969696] hover:text-[#e7e7e7]">PROBLEMS</div>
                    <div className="cursor-pointer text-[#969696] hover:text-[#e7e7e7]">OUTPUT</div>
                    <div className="cursor-pointer text-[#969696] hover:text-[#e7e7e7]">DEBUG CONSOLE</div>
                    <div className="cursor-pointer text-white border-b border-orange-400 pb-0.5 mt-0.5">TERMINAL</div>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => setIsCollapsed(true)} className="hover:bg-[#3e3e3e] rounded p-1 text-gray-400 hover:text-white">
                        <ChevronUp className="w-4 h-4" />
                    </button>
                    <button onClick={() => setIsCollapsed(true)} className="hover:bg-[#3e3e3e] rounded p-1 text-gray-400 hover:text-white">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-auto p-3 font-mono text-sm" style={{ fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace" }}>
                {history.map((item, idx) => (
                    <div key={idx} className="mb-1 leading-relaxed">
                        {item.command && (
                            <div className="flex gap-2">
                                <span className="text-white font-bold select-none">➜</span>
                                <span className="text-[#3b8eea] select-none font-bold">~</span>
                                <span className="text-[#cccccc]">{item.command}</span>
                            </div>
                        )}
                        <div className="text-[#cccccc] whitespace-pre-line pl-0">{item.output}</div>
                    </div>
                ))}

                <form onSubmit={handleSubmit} className="flex gap-2 mt-1">
                    <span className="text-white font-bold select-none">➜</span>
                    <span className="text-[#3b8eea] select-none font-bold">~</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-[#cccccc]"
                        autoFocus
                    />
                </form>
                <div ref={bottomRef} />
            </div>
        </div>
    );
}
