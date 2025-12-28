import { useState } from 'react';
import { ExternalLink, Github, BookOpen } from "lucide-react";
import { CaseStudyModal } from "../CaseStudyModal";

import { ProjectData as Project } from "../CaseStudyModal";

export function ProjectsPreview() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

    const projects: Project[] = [
        {
            title: "DrPlant — AI-Powered Plant Health Analyzer",
            description: "AI-integrated full-stack application for plant disease detection, health tracking, and personalized care recommendations.",
            tech: ["Node.js", "PostgreSQL", "React", "LangChain", "Gemini API"],
            links: {
                demo: "https://dr-plant-one.vercel.app/",
                github: "https://github.com/mansingh-04/Dr.Plant",
                backend: "https://github.com/mansingh-04/drPLantBackend"
            },
            caseStudy: {
                problem: "Plant owners often lack an easy way to identify plant diseases, track plant health over time, and receive actionable care guidance. Re-analyzing the same plant images repeatedly using external AI APIs is inefficient, costly, and does not account for historical plant care context.",
                features: [
                    "Allows users to upload plant images to detect plant species and potential diseases using an external ML model",
                    "Provides AI-generated care recommendations based on detected issues and user-logged care activities",
                    "Maintains a visual history of plant health changes over time",
                    "Enables users to track multiple plants, logs, and personalized profiles in a single dashboard"
                ],
                architecture: {
                    frontend: "React (TypeScript) with light/dark mode, responsive UI, and image upload flow",
                    backend: "Node.js + Express handling API orchestration, caching logic, and business rules",
                    database: "PostgreSQL storing plant metadata, analysis results, care logs, and user profiles",
                    ai: "External ML API for plant type and disease detection\nGemini API (via LangChain) for generating contextual care recommendations"
                },
                decisions: [
                    "Prevented redundant AI calls by returning cached analysis results when the same plant image is re-analyzed, reducing unnecessary API usage and cost",
                    "Stored plant images as base64 in the database for simplicity, while enforcing a limit of the last 5 analysis records per plant to manage storage growth",
                    "Separated analysis history and care tips timelines to clearly distinguish raw AI detection results from AI-generated guidance",
                    "Integrated user-provided care logs into AI prompts to generate more context-aware and personalized recommendations",
                    "Implemented profile personalization with user image uploads and persistent preferences"
                ],
                outcome: "Enabled users to monitor plant health changes over time and receive actionable, context-aware care recommendations by combining AI analysis with historical plant data and user behavior."
            }
        },
        {
            title: "MovieVerse — Movie Discovery & Trivia Platform",
            description: "Frontend-focused web application for discovering movies, exploring trivia, and managing a personal watchlist using real-world APIs.",
            tech: ["Next.js", "React", "TMDB API", "Firebase Auth", "Firestore"],
            links: {
                demo: "https://capstone-sem2.vercel.app/",
                github: "https://github.com/mansingh-04/Capstone-Sem2"
            },
            details: {
                whatItDoes: [
                    "Allows users to search movies and view detailed metadata such as release year, ratings, and genres",
                    "Provides genre-based movie recommendations",
                    "Includes a movie trivia game with multiple difficulty levels and timed questions",
                    "Enables authenticated users to maintain a personal watchlist"
                ],
                whatIBuilt: [
                    "Implemented the complete frontend using Next.js and React",
                    "Integrated TMDB API for movie search, discovery, and recommendations",
                    "Added Firebase Authentication for secure user login and session handling",
                    "Stored user-specific watchlist data using Firestore",
                    "Built reusable UI components with a focus on clean UX and responsiveness"
                ],
                whyThisProject: "This project demonstrates frontend engineering skills, API integration, and the ability to build complete, user-facing features in a production-style application."
            }
        }
    ];

    return (
        <div className="p-8 max-w-4xl mx-auto text-[#c9d1d9] font-sans bg-[#0d1117] min-h-full">
            <h1 className="text-4xl font-bold mb-2 text-[#e6edf3]">Projects</h1>
            <p className="text-[#8b949e] mb-8 border-b border-[#30363d] pb-4">
                Here are some of the projects I've worked on recently.
            </p>

            <div className="space-y-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-[#161b22] p-6 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-all group hover:shadow-lg hover:-translate-y-1 duration-300">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold mb-2 text-[#58a6ff] flex items-center gap-2">
                                ## {project.title}
                            </h3>
                            {project.caseStudy && (
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="text-xs border border-[#30363d] text-[#8b949e] hover:text-[#58a6ff] hover:border-[#58a6ff] px-2 py-1 rounded transition-colors flex items-center gap-1"
                                >
                                    <BookOpen className="w-3 h-3" />
                                    Case Study
                                </button>
                            )}
                            {project.details && (
                                <button
                                    onClick={() => setExpandedProjectId(expandedProjectId === project.title ? null : project.title)}
                                    className="text-xs border border-[#30363d] text-[#8b949e] hover:text-[#58a6ff] hover:border-[#58a6ff] px-2 py-1 rounded transition-colors flex items-center gap-1"
                                >
                                    <BookOpen className="w-3 h-3" />
                                    {expandedProjectId === project.title ? 'Hide Details' : 'View Details'}
                                </button>
                            )}
                        </div>

                        <p className="text-[#8b949e] mb-4 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-[#0d1117] rounded text-xs text-[#7ee787] font-mono border border-[#30363d]">
                                    `{tag}`
                                </span>
                            ))}
                        </div>

                        {/* Expanded Details Section */}
                        {expandedProjectId === project.title && project.details && (
                            <div className="mt-6 space-y-6 border-t border-[#30363d] pt-6 animate-in slide-in-from-top-2 duration-200">
                                <div>
                                    <h4 className="text-[#e6edf3] font-bold mb-2 flex items-center gap-2">
                                        <span className="text-[#7ee787]">➜</span> What it does
                                    </h4>
                                    <ul className="list-disc list-inside space-y-1 text-[#8b949e] text-sm ml-2">
                                        {project.details.whatItDoes.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[#e6edf3] font-bold mb-2 flex items-center gap-2">
                                        <span className="text-[#7ee787]">➜</span> What I built
                                    </h4>
                                    <ul className="list-disc list-inside space-y-1 text-[#8b949e] text-sm ml-2">
                                        {project.details.whatIBuilt.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[#e6edf3] font-bold mb-2 flex items-center gap-2">
                                        <span className="text-[#7ee787]">➜</span> Why this project
                                    </h4>
                                    <p className="text-[#8b949e] text-sm leading-relaxed">
                                        {project.details.whyThisProject}
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="flex gap-4 pt-2 border-t border-[#30363d] mt-4">
                            {project.links?.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-[#79c0ff] hover:text-[#58a6ff] hover:underline"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </a>
                            )}
                            {project.links?.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-[#79c0ff] hover:text-[#58a6ff] hover:underline"
                                >
                                    <Github className="w-4 h-4" />
                                    View Source
                                </a>
                            )}
                            {project.links?.backend && (
                                <a
                                    href={project.links.backend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-[#79c0ff] hover:text-[#58a6ff] hover:underline"
                                >
                                    <Github className="w-4 h-4" />
                                    Backend
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Case Study Modal */}
            {selectedProject && (
                <CaseStudyModal
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    project={selectedProject}
                />
            )}
        </div>
    );
}
