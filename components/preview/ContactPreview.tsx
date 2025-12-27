import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export function ContactPreview() {
    return (
        <div className="p-8 max-w-4xl mx-auto text-[#cccccc] font-sans">
            <h1 className="text-4xl font-bold mb-6 text-[#e0e0e0]">Get in Touch</h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-300">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
            </p>

            <div className="grid gap-4 max-w-lg mb-12">
                <a
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-4 p-4 bg-[#252526] hover:bg-[#2a2d2e] border border-[#3e3e3e] rounded-lg transition-all hover:translate-x-1"
                >
                    <div className="bg-[#3e3e3e] p-2 rounded-full">
                        <Mail className="w-6 h-6 text-[#4ec9b0]" />
                    </div>
                    <div>
                        <h3 className="font-bold text-[#e0e0e0]">Email</h3>
                        <p className="text-[#569cd6]">your.email@example.com</p>
                    </div>
                </a>

                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#252526] hover:bg-[#2a2d2e] border border-[#3e3e3e] rounded-lg transition-all hover:translate-x-1"
                >
                    <div className="bg-[#3e3e3e] p-2 rounded-full">
                        <Github className="w-6 h-6 text-[#4ec9b0]" />
                    </div>
                    <div>
                        <h3 className="font-bold text-[#e0e0e0]">GitHub</h3>
                        <p className="text-[#569cd6]">@yourusername</p>
                    </div>
                </a>

                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#252526] hover:bg-[#2a2d2e] border border-[#3e3e3e] rounded-lg transition-all hover:translate-x-1"
                >
                    <div className="bg-[#3e3e3e] p-2 rounded-full">
                        <Linkedin className="w-6 h-6 text-[#4ec9b0]" />
                    </div>
                    <div>
                        <h3 className="font-bold text-[#e0e0e0]">LinkedIn</h3>
                        <p className="text-[#569cd6]">in/yourusername</p>
                    </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-[#252526] border border-[#3e3e3e] rounded-lg opacity-80">
                    <div className="bg-[#3e3e3e] p-2 rounded-full">
                        <MapPin className="w-6 h-6 text-[#4ec9b0]" />
                    </div>
                    <div>
                        <h3 className="font-bold text-[#e0e0e0]">Location</h3>
                        <p className="text-gray-400">Your City, Country</p>
                    </div>
                </div>
            </div>

            <div className="text-xs text-gray-500 font-mono pt-8 border-t border-[#3e3e3e]">
                ---<br />
                Last updated: 2025-12-25<br />
                Status: Open for work
            </div>
        </div>
    );
}
