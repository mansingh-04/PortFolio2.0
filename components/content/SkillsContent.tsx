import { CodeBlock } from "../CodeBlock";

export function SkillsContent() {
  const code = `/**
 * Technical Skills & Expertise
 * Organized by category and proficiency level
 */

const skills = {
  frontend: {
    "React": "Expert",
    "TypeScript": "Expert",
    "Next.js": "Advanced",
    "Tailwind CSS": "Expert",
    "Redux": "Advanced"
  },

  backend: {
    "Node.js": "Advanced",
    "Express": "Advanced",
    "Python": "Intermediate",
    "PostgreSQL": "Advanced",
    "MongoDB": "Advanced",
    "GraphQL": "Intermediate"
  },

  devops: {
    "Docker": "Advanced",
    "AWS": "Intermediate",
    "Git": "Expert",
    "CI/CD": "Advanced",
    "Kubernetes": "Intermediate"
  },

  tools: [
    "VS Code",
    "Figma",
    "Postman",
    "Jira",
    "Slack"
  ]
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
