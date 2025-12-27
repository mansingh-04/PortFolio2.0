import { ViewMode, FileType } from '../Application';
import {
    FolderOpen,
    FileText,
    User,
    Wrench,
    FolderGit2,
    Mail
} from 'lucide-react';

interface FileExplorerProps {
    onFileClick: (file: FileType) => void;
    activeFile: FileType;
    viewMode: ViewMode;
}

export function FileExplorer({ onFileClick, activeFile, viewMode }: FileExplorerProps) {
    const files: { name: FileType; icon: React.ElementType; color: string }[] = [
        { name: 'about', icon: User, color: '#42a5f5' },
        { name: 'skills', icon: Wrench, color: '#66bb6a' },
        { name: 'projects', icon: FolderGit2, color: '#ffa726' },
        { name: 'contact', icon: Mail, color: '#ef5350' },
    ];

    return (
        <div className="w-64 bg-[#252526] border-r border-[#1e1e1e] flex flex-col">
            <div className="p-2 border-b border-[#1e1e1e]">
                <div className="text-xs uppercase tracking-wide text-[#969696] mb-2">Explorer</div>
                <div className="flex items-center gap-1 text-sm">
                    <FolderOpen className="w-4 h-4 text-[#dcb67a]" />
                    <span>portfolio</span>
                </div>
            </div>

            <div className="flex-1 p-2">
                <div className="space-y-0.5">
                    {files.map((file) => {
                        const Icon = file.icon;
                        const isLive = viewMode === 'live';

                        return (
                            <div
                                key={file.name}
                                onClick={() => onFileClick(file.name)}
                                className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-sm ${activeFile === file.name
                                    ? 'bg-[#37373d] text-white'
                                    : 'hover:bg-[#2a2d2e] text-[#cccccc]'
                                    }`}
                            >
                                {isLive ? (
                                    <FileText className="w-4 h-4 text-[#c5c5c5]" />
                                ) : (
                                    <Icon className="w-4 h-4" style={{ color: file.color }} />
                                )}
                                <span>{file.name}{isLive ? '.md' : '.jsx'}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="border-t border-[#1e1e1e] p-2 text-xs text-[#969696]">
                <div className="flex justify-between py-1">
                    <span>Lines: 342</span>
                    <span>UTF-8</span>
                </div>
            </div>
        </div>
    );
}
