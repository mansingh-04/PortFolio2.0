import React from 'react';
import { X, Server, Zap, CheckCircle } from 'lucide-react';

export interface ProjectData {
    title: string;
    description: string;
    tech: string[];
    caseStudy?: {
        problem: string;
        features?: string[];
        architecture: {
            frontend: string;
            backend: string;
            database: string;
            ai?: string;
        };
        decisions: string[];
        outcome?: string;
    };
    links?: {
        demo?: string;
        github?: string;
        backend?: string;
    };
    details?: {
        whatItDoes: string[];
        whatIBuilt: string[];
        whyThisProject: string;
    };
}

interface CaseStudyModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: ProjectData;
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
                    {/* The Problem */}
                    {project.caseStudy?.problem && (
                        <section>
                            <h3 className="flex items-center gap-2 text-[#e6edf3] font-bold text-lg mb-3">
                                <span className="p-1.5 bg-red-500/10 text-red-400 rounded-md">
                                    <Zap className="w-4 h-4" />
                                </span>
                                The Problem
                            </h3>
                            <p className="text-[#8b949e] leading-relaxed">
                                {project.caseStudy.problem}
                            </p>
                        </section>
                    )}

                    {/* What the Product Does */}
                    {project.caseStudy?.features && (
                        <section>
                            <h3 className="flex items-center gap-2 text-[#e6edf3] font-bold text-lg mb-3">
                                <span className="p-1.5 bg-purple-500/10 text-purple-400 rounded-md">
                                    <Zap className="w-4 h-4" />
                                </span>
                                What the Product Does
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-[#8b949e] leading-relaxed">
                                {project.caseStudy.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* The Architecture */}
                    {project.caseStudy?.architecture && (
                        <section>
                            <h3 className="flex items-center gap-2 text-[#e6edf3] font-bold text-lg mb-3">
                                <span className="p-1.5 bg-blue-500/10 text-blue-400 rounded-md">
                                    <Server className="w-4 h-4" />
                                </span>
                                The Architecture
                            </h3>
                            <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md font-mono text-sm text-[#8b949e]">
                                <div className="flex items-start gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0"></div>
                                    <div>
                                        <span className="text-[#e6edf3] font-semibold">Frontend:</span> <span className="text-[#8b949e]">{project.caseStudy.architecture.frontend}</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 shrink-0"></div>
                                    <div>
                                        <span className="text-[#e6edf3] font-semibold">Backend:</span> <span className="text-[#8b949e]">{project.caseStudy.architecture.backend}</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div>
                                    <div>
                                        <span className="text-[#e6edf3] font-semibold">Database:</span> <span className="text-[#8b949e]">{project.caseStudy.architecture.database}</span>
                                    </div>
                                </div>
                                {project.caseStudy.architecture.ai && (
                                    <div className="flex items-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                                        <div>
                                            <span className="text-[#e6edf3] font-semibold">AI Integration:</span> <span className="text-[#8b949e]">{project.caseStudy.architecture.ai}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}

                    {/* Key Engineering Decisions */}
                    {project.caseStudy?.decisions && (
                        <section>
                            <h3 className="flex items-center gap-2 text-[#e6edf3] font-bold text-lg mb-3">
                                <span className="p-1.5 bg-green-500/10 text-green-400 rounded-md">
                                    <CheckCircle className="w-4 h-4" />
                                </span>
                                Key Engineering Decisions
                            </h3>
                            <ul className="space-y-3">
                                {project.caseStudy.decisions.map((decision, idx) => (
                                    <li key={idx} className="flex gap-3 text-[#8b949e] bg-[#161b22] p-3 rounded border border-[#30363d]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0"></div>
                                        <span className="text-sm">{decision}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Outcome */}
                    {project.caseStudy?.outcome && (
                        <section className="pt-4 border-t border-[#30363d]">
                            <p className="text-[#c9d1d9] italic border-l-4 border-[#58a6ff] pl-4 py-1">
                                "{project.caseStudy.outcome}"
                            </p>
                        </section>
                    )}
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
