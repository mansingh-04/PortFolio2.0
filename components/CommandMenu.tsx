import { useEffect, useState } from "react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "./ui/command";
import {
    FileText,
    Code,
    LayoutTemplate,
    Mail,
    Github,
    Linkedin,
    BookOpen,
    Terminal,
    Download
} from "lucide-react";
import { FileType, ViewMode } from "../Application";

interface CommandMenuProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    setActiveFile: (file: FileType) => void;
    setViewMode: (mode: ViewMode) => void;
    viewMode: ViewMode;
    setReaderMode: (mode: boolean) => void;
    readerMode: boolean;
}

export function CommandMenu({
    setActiveFile,
    setViewMode,
    viewMode,
    setReaderMode,
    readerMode
}: CommandMenuProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Navigation">
                    <CommandItem onSelect={() => runCommand(() => setActiveFile("about"))}>
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Go to About Me</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => setActiveFile("projects"))}>
                        <LayoutTemplate className="mr-2 h-4 w-4" />
                        <span>Go to Projects</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => setActiveFile("skills"))}>
                        <Terminal className="mr-2 h-4 w-4" />
                        <span>Go to Skills</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => setActiveFile("contact"))}>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Go to Contact</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="View">
                    <CommandItem onSelect={() => runCommand(() => setViewMode(viewMode === 'code' ? 'live' : 'code'))}>
                        <Code className="mr-2 h-4 w-4" />
                        <span>Toggle Code/Live View</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => setReaderMode(!readerMode))}>
                        <BookOpen className="mr-2 h-4 w-4" />
                        <span>Toggle Reader Mode</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Social">
                    <CommandItem onSelect={() => runCommand(() => window.open('https://github.com/manpreet-singh', '_blank'))}>
                        <Github className="mr-2 h-4 w-4" />
                        <span>GitHub</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => window.open('https://linkedin.com', '_blank'))}>
                        <Linkedin className="mr-2 h-4 w-4" />
                        <span>LinkedIn</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => window.open('/resume.pdf', '_blank'))}>
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download Resume</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
