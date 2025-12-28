export function SkillsPreview() {
    const skills = {
        "Programming Languages": [
            { name: "JavaScript", badge: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
            { name: "Python", badge: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" }
        ],
        "Backend Development": [
            { name: "Node.js", badge: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" },
            { name: "Express.js", badge: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" },
            { name: "Flask (Basic)", badge: "https://img.shields.io/badge/Flask_(Basic)-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" }
        ],
        "Frontend Development": [
            { name: "React", badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
            { name: "TypeScript", badge: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" },
            { name: "Tailwind CSS", badge: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" },
            { name: "HTML & CSS", badge: "https://img.shields.io/badge/HTML5%20%26%20CSS3-E34F26?style=for-the-badge&logo=html5&logoColor=white" }
        ],
        "Databases": [
            { name: "PostgreSQL", badge: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" },
            { name: "MySQL", badge: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" },
            { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" }
        ],
        "Tools & Environment": [
            { name: "VS Code", badge: "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" },
            { name: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
            { name: "GitHub", badge: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" },
            { name: "Figma", badge: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" }
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


        </div>
    );
}
