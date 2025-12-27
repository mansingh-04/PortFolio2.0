import { CodeBlock } from "../CodeBlock";

export function ContactContent() {
  const code = `const contact = {
  email: "your.email@example.com",
  location: "Your City, Country",
  social: {
    github: "github.com/yourusername",
    linkedin: "linkedin.com/in/yourusername",
    twitter: "twitter.com/yourusername"
  }
};

// ---------------------------------------------------
// Terminal Commands to access links:
// 
// Email:    Type 'open email'
// GitHub:   Type 'open github'
// LinkedIn: Type 'open linkedin'
// Twitter:  Type 'open twitter'
// ---------------------------------------------------

export default contact;`;

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