import { CodeBlock } from "../CodeBlock";

export function ContactContent() {
  const code = `const contact = {
  email: "manpreet.singh2024@nst.rishihood.edu.in",
  location: "New Delhi, India",

  status: "Open to internships & full-time software engineering opportunities",

  social: {
    github: "https://github.com/mansingh-04",
    linkedin: "https://www.linkedin.com/in/manpreet-singh-9bb415318",
    leetcode: "https://leetcode.com/u/mansingh_04/",
    twitter: null
  }
};

// --------------------------------------------------
// Terminal Commands:
// --------------------------------------------------
// contact           → Show all contact information
// open email        → Open default mail client
// open github       → Open GitHub profile
// open linkedin     → Open LinkedIn profile
// open leetcode     → Open LeetCode profile
// --------------------------------------------------

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