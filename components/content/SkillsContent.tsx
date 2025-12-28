import { CodeBlock } from "../CodeBlock";

export function SkillsContent() {
  const code = `/**
 * Technical Skills & Expertise
 * Focused on real-world development, AI integration, and scalable systems
 */

const skills = {
  languages: [
    "JavaScript",
    "Python",
  ],

  frontend: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],

  backend: [
    "Node.js",
    "Express.js",
    "Flask (basic)",
  ],

  databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
  ],

  ai_ml: [
    "LangChain",
    "LLM Integration (Gemini API)",
    "Prompt Engineering",
    "ML Model API Integration",
  ],

  tools: [
    "Visual Studio Code",
    "Cursor",
    "Postman",
    "GitHub",
    "Figma",
  ],
};

export default skills;`;

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
