import { CodeBlock } from "../CodeBlock";

export function ProjectsContent() {
    const code = `const projects = [
        {
            id: 'project1',
            name: 'E-Commerce Platform',
            description: 'Full-stack platform with real-time inventory',
            tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
            // -------------------------------------------------------------
            // Live Demo: Type 'npm run start project1' in terminal to open
            // GitHub: Type 'open project1-github' in terminal to open
            // -------------------------------------------------------------
            links: {
                github: 'github.com/yourusername/ecommerce',
                live: 'demo.example.com'
            },
            architecture: {
                frontend: "React + Redux Toolkit",
                backend: "Express + JWT Auth",
                database: "PostgreSQL + Redis Caching",
                payment: "Stripe Webhooks"
            }
        },
        {
            id: 'project2',
            name: 'Task Management System',
            description: 'Real-time collaborative task manager',
            tech: ['React', 'Socket.io', 'MongoDB', 'Express'],
            // -------------------------------------------------------------
            // GitHub: Type 'open project2-github' in terminal to open
            // -------------------------------------------------------------
            links: {
                github: 'github.com/yourusername/taskmanager'
            },
            architecture: {
                realtime: "Socket.io Events",
                data: "MongoDB Clusters",
                collaboration: "Optimistic UI Updates"
            }
        },
        {
            id: 'project3',
            name: 'Analytics Dashboard',
            description: 'High-performance data visualization',
            tech: ['React', 'D3.js', 'Python', 'FastAPI', 'TimescaleDB'],
            // -------------------------------------------------------------
            // Live Demo: Type 'npm run start project3' in terminal to open
            // -------------------------------------------------------------
            links: {
                live: 'analytics.example.com'
            },
            architecture: {
                pipeline: "Python Workers",
                api: "FastAPI Async Endpoints",
                visualization: "D3.js + WebGL"
            }
        }
    ];

    export default projects;`;

    return (
        <div className="p-4">
            <CodeBlock
                code={code}
                language="typescript"
                showLineNumbers={false}
            />
        </div>
    );
}
