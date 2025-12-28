import { CodeBlock } from "../CodeBlock";

export function ProjectsContent() {
  const code = `const projects = [
  {
    id: 'drplant',
    name: 'DrPlant — AI-Powered Plant Health Analyzer',
    description:
      'Full-stack AI application for plant disease detection, health tracking, and personalized care recommendations.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'LangChain', 'Gemini API'],
    links: {
      live: 'https://dr-plant-one.vercel.app',
      frontend: 'https://github.com/mansingh-04/Dr.Plant',
      backend: 'https://github.com/mansingh-04/drPLantBackend'
    },
    commands: {
      live: 'npm run start drplant',
      caseStudy: 'man drplant'
    },
    hasCaseStudy: true
  },

  {
    id: 'movieverse',
    name: 'MovieVerse — Movie Discovery & Trivia Platform',
    description:
      'Frontend-focused platform for discovering movies, exploring trivia, and managing personal watchlists.',
    tech: ['Next.js', 'React', 'TMDB API', 'Firebase Auth', 'Firestore'],
    links: {
      live: 'https://capstone-sem2.vercel.app',
      frontend: 'https://github.com/mansingh-04/Capstone-Sem2'
    },
    commands: {
      live: 'npm run start movieverse',
      manual: 'man movieverse'
    },
    hasCaseStudy: false
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
