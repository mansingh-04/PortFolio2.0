export function SkillsPreview() {
    const skills = {
        "Frontend": [
            { name: "React", badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
            { name: "TypeScript", badge: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" },
            { name: "Tailwind CSS", badge: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" },
            { name: "Next.js", badge: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" },
            { name: "Redux", badge: "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" }
        ],
        "Backend": [
            { name: "Node.js", badge: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" },
            { name: "Express.js", badge: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" },
            { name: "Python", badge: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
            { name: "FastAPI", badge: "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" },
            { name: "PostgreSQL", badge: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" }
        ],
        "DevOps": [
            { name: "Docker", badge: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" },
            { name: "AWS", badge: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" },
            { name: "Git", badge: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" },
            { name: "Linux", badge: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" }
        ],
        "Tools": [
            { name: "VS Code", badge: "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" },
            { name: "Figma", badge: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" },
            { name: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" }
        ]
    };

    return (
        <div className="p-8 max-w-4xl mx-auto text-[#c9d1d9] font-sans bg-[#0d1117] min-h-full">
            <h1 className="text-4xl font-bold mb-8 text-[#e6edf3] border-b border-[#30363d] pb-4">Technical Skills</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="space-y-4">
                        <h3 className="text-xl font-bold text-[#e6edf3] flex items-center gap-2 border-b border-[#30363d] pb-2">
                            <span className="text-[#58a6ff]">###</span> {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map(skill => (
                                <img
                                    key={skill.name}
                                    src={skill.badge}
                                    alt={skill.name}
                                    className="h-7 hover:opacity-90 transition-opacity cursor-pointer shadow-sm rounded-sm"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-4 bg-[#161b22] border-l-4 border-[#d2a8ff] rounded-r">
                <h4 className="font-bold text-[#d2a8ff] mb-2">Note</h4>
                <p className="text-sm text-[#8b949e]">
                    Always learning and exploring new technologies. Currently diving deep into Rust and WebAssembly.
                </p>
            </div>
        </div>
    );
}
