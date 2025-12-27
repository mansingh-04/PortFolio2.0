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
        help: 'Available commands:\n  npm start   - Start development server (Live View)\n  about       - Show information about me\n  skills      - List my technical skills\n  projects    - View my recent projects\n  contact     - Get contact information\n  clear       - Clear terminal\n  github      - Open GitHub profile\n  linkedin    - Open LinkedIn profile\n  cat stats   - View career statistics\n  man ecommerce - View Ecommerce Case Study',
        about: `
User: Manpreet Singh
Location: New Delhi, India
Education:
  Degree: Bachelor of Technology (Artificial intelligence)
  College: Newton School of Technology, Rishihood University
  Year: 2024 - 2028
Bio: Computer Science undergraduate with strong foundations in data structures and algorithms (200+ LeetCode problems solved). Built end-to-end web applications and AI-powered features using Node.js (Express), Python, and JavaScript.

Type 'skills' or 'projects' to learn more.
`,
        skills: 'Frontend: React, TypeScript, Tailwind CSS\nBackend: Node.js, Python, PostgreSQL\nTools: Git, Docker, AWS',
        projects: 'Loading projects...\n1. E-commerce Platform\n2. Task Management System\n3. Real-time Chat Application\nUse the Projects tab for detailed information!',
        contact: 'Email: your.email@example.com\nGitHub: github.com/yourusername\nLinkedIn: linkedin.com/in/yourusername',
        github: 'Opening GitHub profile...',
        linkedin: 'Opening LinkedIn profile...',
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
╔════════════════════════════════════════╗
║             CAREER STATS               ║
╠════════════════════════════════════════╣
║  🚀 Experience:      3+ Years          ║
║  💻 Projects:        20+ Completed     ║
║  🌟 Job Success:     100%              ║
║  🤝 Team Size:       Lead 5+ Devs      ║
║  ⚡ Response Time:   < 2 Hours         ║
╚════════════════════════════════════════╝`;
            setHistory([...history, { command: cmd, output: stats }]);
            return;
        }

        if (trimmedCmd === 'man ecommerce') {
            const caseStudy = `
NAME
    ecommerce - Scalable Full-Stack E-Commerce Platform

SYNOPSIS
    A high-performance solution handling 10k+ concurrent users.

DESCRIPTION
    The Challenge:
        Legacy system crashed during Black Friday. Latency > 5s.

    The Architecture:
        - Frontend: Next.js + Tailwind (CDN Caching)
        - Backend: Node.js Microservices (Dockerized)
        - Database: PostgreSQL + Redis Layer

    The Result:
        - 40% Faster Load Time
        - 99.9% Uptime Achieved
        - 2x Deployment Speed

AUTHOR
    Manpreet Singh`;
            setHistory([...history, { command: cmd, output: caseStudy }]);
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
            const project = trimmedCmd.replace('npm run start ', '');
            switch (project) {
                case 'project1':
                    window.open('https://demo.example.com', '_blank');
                    setHistory([...history, { command: cmd, output: 'Starting development server for Project 1...\nOpening https://demo.example.com' }]);
                    return;
                case 'project3':
                    window.open('https://analytics.example.com', '_blank');
                    setHistory([...history, { command: cmd, output: 'Starting analytics dashboard...\nOpening https://analytics.example.com' }]);
                    return;
                default:
                    setHistory([...history, { command: cmd, output: `Error: Project '${project}' not found or has no live demo.` }]);
                    return;
            }
        }

        if (trimmedCmd.startsWith('open ')) {
            const target = trimmedCmd.replace('open ', '');
            switch (target) {
                case 'github':
                case 'github.com':
                    window.open('https://github.com/yourusername', '_blank');
                    setHistory([...history, { command: cmd, output: 'Opening GitHub profile...' }]);
                    return;
                case 'linkedin':
                    window.open('https://linkedin.com/in/yourusername', '_blank');
                    setHistory([...history, { command: cmd, output: 'Opening LinkedIn profile...' }]);
                    return;
                case 'twitter':
                    window.open('https://twitter.com/yourusername', '_blank');
                    setHistory([...history, { command: cmd, output: 'Opening Twitter profile...' }]);
                    return;
                case 'email':
                    window.location.href = 'mailto:your.email@example.com';
                    setHistory([...history, { command: cmd, output: 'Opening default mail client...' }]);
                    return;
                case 'project1-github':
                    window.open('https://github.com/yourusername/ecommerce', '_blank');
                    setHistory([...history, { command: cmd, output: 'Opening Project 1 repository...' }]);
                    return;
                case 'project2-github':
                    window.open('https://github.com/yourusername/taskmanager', '_blank');
                    setHistory([...history, { command: cmd, output: 'Opening Project 2 repository...' }]);
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
