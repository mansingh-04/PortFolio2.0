import { useState } from 'react';
import { ExternalLink, Github, BookOpen } from "lucide-react";
import { CaseStudyModal } from "../CaseStudyModal";

interface Project {
    title: string;
    description: string;
    tags: string[];
    links: {
        demo?: string;
        github?: string;
    };
}

export function ProjectsPreview() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with real-time inventory management, stripe integration, and a custom admin dashboard.",
            tags: ["React", "Node.js", "PostgreSQL", "Redis"],
            links: {
                demo: "https://demo.example.com",
                github: "https://github.com/yourusername/ecommerce"
            }
        },
        {
            title: "Task Management System",
            description: "Real-time collaborative task manager allowing teams to organize, track, and manage their work efficiently.",
            tags: ["React", "Socket.io", "MongoDB"],
            links: {
                github: "https://github.com/yourusername/taskmanager"
            }
        },
        {
            title: "Analytics Dashboard",
            description: "High-performance data visualization dashboard processing large datasets with D3.js and Python.",
            tags: ["D3.js", "Python", "FastAPI"],
            links: {
                demo: "https://analytics.example.com"
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
                            <button
                                onClick={() => setSelectedProject(project)}
                                className="text-xs border border-[#30363d] text-[#8b949e] hover:text-[#58a6ff] hover:border-[#58a6ff] px-2 py-1 rounded transition-colors flex items-center gap-1"
                            >
                                <BookOpen className="w-3 h-3" />
                                Case Study
                            </button>
                        </div>

                        <p className="text-[#8b949e] mb-4 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-[#0d1117] rounded text-xs text-[#7ee787] font-mono border border-[#30363d]">
                                    `{tag}`
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-2 border-t border-[#30363d] mt-4">
                            {project.links.demo && (
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
                            {project.links.github && (
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
