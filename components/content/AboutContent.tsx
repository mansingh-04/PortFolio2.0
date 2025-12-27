import { CodeBlock } from "../CodeBlock";

export function AboutContent() {
  const code = `import { Developer } from "@/universe";

const me = {
  name: "Manpreet Singh",
  location: "New Delhi, India",
  bio: "Computer Science undergraduate with strong foundations in data structures and algorithms (200+ LeetCode problems solved). " +
       "Built end-to-end web applications and AI-powered features using Node.js (Express), Python, and JavaScript.",
  education: {
    degree: "Bachelor of Technology (Artificial intelligence)",
    college: "Newton School of Technology, Rishihood University",
    year: "2024 - 2028"
  },
  interests: [
    "Web Development",
    "Agentic AI",
    "Machine Learning",
    "System Architecture"
  ]
};

export default me;`;

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
