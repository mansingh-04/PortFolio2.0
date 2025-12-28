import { CodeBlock } from "../CodeBlock";

export function AboutContent() {
  const code = `import { Developer } from "@/universe";

const me = {
  name: "Manpreet Singh",
  location: "New Delhi, India",
  bio: "Computer Science undergraduate focused on building production-style web applications and AI-powered systems. Experienced in designing end-to-end features, integrating external APIs, and making pragmatic engineering trade-offs in real-world projects.",
  education: {
    degree: "Bachelor of Technology (Artificial Intelligence)",
    college: "Newton School of Technology, Rishihood University",
    year: "2024 - 2028"
  },
  interests: [
    "System Architecture",
    "Web Development",
    "Agentic AI",
    "Machine Learning"
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
