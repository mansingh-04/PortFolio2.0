import React from 'react';
import { X, Server, Zap, CheckCircle } from 'lucide-react';

interface CaseStudyModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
    };
}

export function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-[#30363d] sticky top-0 bg-[#0d1117]/95 backdrop-blur z-10">
                    <div>
                        <div className="text-xs font-mono text-[#58a6ff] mb-1">CASE STUDY</div>
                        <h2 className="text-xl font-bold text-[#e6edf3]">{project.title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-[#21262d] rounded-md transition-colors text-[#8b949e] hover:text-[#e6edf3]"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-8">
                    {/* The Challenge */}
                    <section>
                        <h3 className="flex items-center gap-2 text-[#e6edf3] font-bold text-lg mb-3">
                            <span className="p-1.5 bg-red-500/10 text-red-400 rounded-md">
                                <Zap className="w-4 h-4" />
                            </span>
                            The Challenge
                        </h3>
                        <p className="text-[#8b949e] leading-relaxed">
                            The existing solution struggled with scalability during high-traffic events, leading to
                            page load times exceeding 5 seconds. Users experienced frequent timeouts, and the
                            legacy codebase made adding new features slow and error-prone. The goal was to reduce latency
                            and improve developer velocity.
                        </p>
                    </section>

                    {/* The Architecture */}
                    <section>
                        <h3 className="flex items-center gap-2 text-[#e6edf3] font-bold text-lg mb-3">
                            <span className="p-1.5 bg-blue-500/10 text-blue-400 rounded-md">
                                <Server className="w-4 h-4" />
                            </span>
                            The Architecture
                        </h3>
                        <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md font-mono text-sm text-[#8b949e]">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                <span className="text-[#e6edf3]">Frontend:</span> Next.js + Tailwind (CDN Caching)
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                <span className="text-[#e6edf3]">Backend:</span> Node.js Microservices (Dockerized)
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <span className="text-[#e6edf3]">Database:</span> PostgreSQL + Redis Layer
                            </div>
                        </div>
                    </section>

                    {/* The Results */}
                    <section>
                        <h3 className="flex items-center gap-2 text-[#e6edf3] font-bold text-lg mb-3">
                            <span className="p-1.5 bg-green-500/10 text-green-400 rounded-md">
                                <CheckCircle className="w-4 h-4" />
                            </span>
                            The Result
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-[#161b22] p-3 rounded border border-[#30363d] text-center">
                                <div className="text-2xl font-bold text-green-400">40%</div>
                                <div className="text-xs text-[#8b949e] mt-1">Faster Load Time</div>
                            </div>
                            <div className="bg-[#161b22] p-3 rounded border border-[#30363d] text-center">
                                <div className="text-2xl font-bold text-blue-400">99.9%</div>
                                <div className="text-xs text-[#8b949e] mt-1">Uptime Achieved</div>
                            </div>
                            <div className="bg-[#161b22] p-3 rounded border border-[#30363d] text-center">
                                <div className="text-2xl font-bold text-purple-400">2x</div>
                                <div className="text-xs text-[#8b949e] mt-1">Deployment Speed</div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="p-4 border-t border-[#30363d] bg-[#161b22]/50 flex justify-end">
                    <button
                        onClick={onClose}
                        className="text-sm text-[#58a6ff] hover:underline"
                    >
                        Close Case Study
                    </button>
                </div>
            </div>
        </div>
    );
}
