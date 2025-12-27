import { FileType, ViewMode } from '../Application';
import { AboutContent } from './content/AboutContent';
import { SkillsContent } from './content/SkillsContent';
import { ProjectsContent } from './content/ProjectsContent';
import { ContactContent } from './content/ContactContent';
import { AboutPreview } from './preview/AboutPreview';
import { ProjectsPreview } from './preview/ProjectsPreview';
import { SkillsPreview } from './preview/SkillsPreview';
import { ContactPreview } from './preview/ContactPreview';

interface EditorPaneProps {
    activeFile: FileType;
    openTabs: FileType[];
    viewMode: ViewMode;
}

export function EditorPane({ activeFile, openTabs, viewMode }: EditorPaneProps) {
    const getContentComponent = (file: FileType) => {
        // Live Mode (Markdown Preview)
        if (viewMode === 'live') {
            switch (file) {
                case 'about': return <AboutPreview />;
                case 'skills': return <SkillsPreview />;
                case 'projects': return <ProjectsPreview />;
                case 'contact': return <ContactPreview />;
                default: return <AboutPreview />;
            }
        }

        // Code Mode (VS Code Editor)
        switch (file) {
            case 'about': return <AboutContent />;
            case 'skills': return <SkillsContent />;
            case 'projects': return <ProjectsContent />;
            case 'contact': return <ContactContent />;
            default: return null;
        }
    };

    return (
        <div className={`h-full bg-[#1e1e1e] flex text-sm overflow-auto font-mono ${viewMode === 'live' ? 'items-start' : ''}`}>
            {/* Line Numbers - Only in Code Mode */}
            {viewMode === 'code' && (
                <div className="w-12 flex-shrink-0 flex flex-col items-end pr-3 pt-4 text-[#858585] select-none text-xs leading-relaxed opacity-50 font-mono bg-[#1e1e1e]">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>
            )}

            {/* Content */}
            <div className={`flex-1 ${viewMode === 'code' ? 'p-4 pl-0' : 'p-0 bg-[#0d1117]'}`}>
                {openTabs.map((tab) => (
                    <div
                        key={tab}
                        style={{ display: activeFile === tab ? 'block' : 'none' }}
                        className="h-full"
                    >
                        {getContentComponent(tab)}
                    </div>
                ))}
            </div>
        </div>
    );
}
