import { useState, useEffect, useCallback } from 'react';
import { FileExplorer } from './components/FileExplorer';
import { EditorPane } from './components/EditorPane';
import { Terminal } from './components/Terminal';
import {
  Files,
  Search,
  GitGraph,
  AppWindow,
  Settings,
  UserCircle,
  GitBranch,
  XCircle,
  AlertTriangle,
  Check,
  BookOpen
} from 'lucide-react';
import { CommandMenu } from './components/CommandMenu';

export type FileType = 'about' | 'skills' | 'projects' | 'contact';

export interface ProjectData {
  name: string;
  description: string;
  tech: string[];
  architecture: string;
  flow: string[];
}

export type ViewMode = 'code' | 'live';

const FILE_ORDER: FileType[] = ['about', 'skills', 'projects', 'contact'];

function App() {
  const [activeFile, setActiveFile] = useState<FileType>('about');
  const [openTabs, setOpenTabs] = useState<FileType[]>(['about']);
  const [sidebarVisible] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('live');

  // Functional update for openTabs to avoid dependency on it
  const handleFileClick = useCallback((file: FileType) => {
    setOpenTabs((prev) => {
      if (!prev.includes(file)) {
        return [...prev, file];
      }
      return prev;
    });
    setActiveFile(file);
  }, []);

  const handleCloseTab = (file: FileType) => {
    const newTabs = openTabs.filter(tab => tab !== file);
    setOpenTabs(newTabs);
    if (activeFile === file && newTabs.length > 0) {
      setActiveFile(newTabs[newTabs.length - 1]);
    }
  };



  /* Reader Mode State */
  const [readerMode, setReaderMode] = useState(false);







  const handleNext = useCallback(() => {
    const currentIndex = FILE_ORDER.indexOf(activeFile);
    if (currentIndex < FILE_ORDER.length - 1) {
      handleFileClick(FILE_ORDER[currentIndex + 1]);
    }
  }, [activeFile, handleFileClick]);

  const handlePrev = useCallback(() => {
    const currentIndex = FILE_ORDER.indexOf(activeFile);
    if (currentIndex > 0) {
      handleFileClick(FILE_ORDER[currentIndex - 1]);
    }
  }, [activeFile, handleFileClick]);

  /* Keyboard Navigation for Reader Mode */
  useEffect(() => {
    if (!readerMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setReaderMode(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [readerMode, handleNext, handlePrev]);


  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-[#cccccc] overflow-hidden font-sans">
      <CommandMenu
        setActiveFile={setActiveFile}
        setViewMode={setViewMode}
        viewMode={viewMode}
        setReaderMode={setReaderMode}
        readerMode={readerMode}
      />

      {/* Top Bar - Title Bar */}
      {!readerMode && (
        <div className="h-10 bg-[#323233] border-b border-[#1e1e1e] flex items-center justify-between px-4 relative select-none">

          {/* Left: Window Controls + Title */}
          <div className="flex items-center gap-4 flex-1">
            <div className="flex gap-2 group">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] group-hover:bg-[#ff5f57] border border-transparent group-hover:border-[#e0443e] flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">×</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e] group-hover:bg-[#febc2e] border border-transparent group-hover:border-[#dba530] flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">−</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-[#28c840] group-hover:bg-[#28c840] border border-transparent group-hover:border-[#1aab29] flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">+</span>
              </div>
            </div>
            <span className="text-xs text-[#969696] font-medium hidden sm:block">
              manpreet-singh — {viewMode === 'code' ? 'Visual Studio Code' : 'README.md — Preview'}
            </span>
          </div>

          {/* Right: View Mode Toggle */}
          <div className="flex items-center gap-2 mr-2">
            {/* Reader Mode Button - Only verify visible in Live Mode */}
            {viewMode === 'live' && (
              <button
                onClick={() => setReaderMode(true)}
                className="p-1 hover:bg-[#4a4a4a] rounded-md text-[#969696] hover:text-white transition-colors"
                title="Enter Reader Mode"
              >
                <BookOpen className="w-4 h-4" />
              </button>
            )}
            <div className="bg-[#1e1e1e] rounded-md p-0.5 border border-[#3e3e3e] flex text-xs font-medium">
              <button
                onClick={() => setViewMode('code')}
                className={`px-3 py-1 rounded-sm transition-all ${viewMode === 'code' ? 'bg-[#007fd4] text-white shadow-sm' : 'text-[#969696] hover:text-[#cccccc]'}`}
              >
                Code View
              </button>
              <button
                onClick={() => setViewMode('live')}
                className={`px-3 py-1 rounded-sm transition-all ${viewMode === 'live' ? 'bg-[#007fd4] text-white shadow-sm' : 'text-[#969696] hover:text-[#cccccc]'}`}
              >
                Live View
              </button>
            </div>
          </div>
        </div>
      )}

      {readerMode && (
        <div className="h-10 bg-[#0d1117] flex items-center justify-between px-4 fixed top-0 w-full z-50 pointer-events-none">
          <div className="pointer-events-auto">
            {/* Left side empty for balance or future controls */}
          </div>
          <button
            onClick={() => setReaderMode(false)}
            className="pointer-events-auto px-3 py-1 bg-[#238636] text-white rounded-md text-xs font-medium hover:bg-[#2ea043] transition-colors flex items-center gap-2 shadow-lg"
          >
            <BookOpen className="w-3 h-3" />
            Exit Reader Mode
          </button>
        </div>
      )}

      {/* Main Layout */}
      <div className={`flex flex-1 overflow-hidden ${readerMode ? 'bg-[#0d1117] justify-center relative pt-14' : ''}`}>

        {/* Reader Mode Navigation - Left */}
        {readerMode && FILE_ORDER.indexOf(activeFile) > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-8 top-1/2 -translate-y-1/2 p-4 text-[#8b949e] hover:text-white hover:bg-[#161b22] rounded-full transition-all"
            title="Previous Page"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
        )}

        {/* Reader Mode Navigation - Right */}
        {readerMode && FILE_ORDER.indexOf(activeFile) < FILE_ORDER.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-8 top-1/2 -translate-y-1/2 p-4 text-[#8b949e] hover:text-white hover:bg-[#161b22] rounded-full transition-all"
            title="Next Page"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        )}

        {/* Activity Bar - Hide in Reader Mode */}
        {!readerMode && (
          <div className="w-12 bg-[#333333] flex flex-col items-center py-2 justify-between border-r border-[#252526]">
            <div className="flex flex-col gap-6">
              <div className={`cursor-pointer pl-3 pr-3.5 ${viewMode === 'code' ? 'border-l-2 border-white' : 'opacity-60 hover:opacity-100'}`}>
                <Files className="w-6 h-6 text-white" />
              </div>
              <div className="cursor-pointer opacity-60 hover:opacity-100 px-3.5">
                <Search className="w-6 h-6" />
              </div>
              <div className="cursor-pointer opacity-60 hover:opacity-100 px-3.5">
                <GitGraph className="w-6 h-6" />
              </div>
              {viewMode === 'live' && (
                <div className="cursor-pointer border-l-2 border-white pl-3 pr-3.5">
                  <AppWindow className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-6 mb-2">
              <div className="cursor-pointer opacity-60 hover:opacity-100 px-3.5">
                <UserCircle className="w-6 h-6" />
              </div>
              <div className="cursor-pointer opacity-60 hover:opacity-100 px-3.5">
                <Settings className="w-6 h-6" />
              </div>
            </div>
          </div>
        )}

        {/* Sidebar (File Explorer) - Hide in Reader Mode */}
        {!readerMode && sidebarVisible && (
          <FileExplorer
            onFileClick={handleFileClick}
            activeFile={activeFile}
            viewMode={viewMode}
          />
        )}

        {/* Editor Area */}
        <div className={`flex flex-col min-w-0 ${readerMode ? 'w-full max-w-4xl h-full' : 'flex-1 bg-[#1e1e1e]'}`}>
          {/* Tabs Group - Hide in Reader Mode */}
          {!readerMode && openTabs.length > 0 ? (
            <div className="h-9 bg-[#252526] flex overflow-x-auto no-scrollbar">
              {openTabs.map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveFile(tab)}
                  className={`group min-w-[120px] max-w-[200px] h-full px-3 flex items-center gap-2 text-sm cursor-pointer border-r border-[#1e1e1e] select-none ${activeFile === tab
                    ? 'bg-[#1e1e1e] text-white border-t-2 border-t-[#007fd4]'
                    : 'bg-[#2d2d2d] text-[#969696] hover:bg-[#2a2a2a]'
                    }`}
                >
                  <span className={`text-xs ${viewMode === 'live' ? 'text-gray-400' :
                    tab === 'about' ? 'text-blue-400' :
                      tab === 'skills' ? 'text-yellow-400' :
                        tab === 'projects' ? 'text-orange-400' : 'text-green-400'
                    }`}>
                    {viewMode === 'live' ? 'MD' : 'JSX'}
                  </span>
                  <span className="truncate flex-1">
                    {tab}{viewMode === 'live' ? '.md' : '.jsx'}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCloseTab(tab);
                    }}
                    className={`rounded-md p-0.5 opacity-0 group-hover:opacity-100 hover:bg-[#4a4a4a] ${activeFile === tab ? 'opacity-100' : ''}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          ) : !readerMode && (
            <div className="h-9 bg-[#252526]"></div>
          )}

          {/* Editor Content */}
          <div className="flex-1 overflow-hidden relative">
            {openTabs.length > 0 ? (
              <EditorPane
                activeFile={activeFile}
                openTabs={openTabs}
                viewMode={viewMode}
                onNavigate={setActiveFile}
              />
            ) : !readerMode && (
              <div className="h-full w-full flex flex-col items-center justify-center text-[#3b3b3b]">
                <div className="w-24 h-24 mb-4 opacity-20">
                  <Files className="w-full h-full" />
                </div>
                <p className="text-sm">Select a file to view its content</p>
              </div>
            )}
          </div>

          {/* Terminal - Only in Code View and NOT Reader Mode */}
          {viewMode === 'code' && !readerMode && (
            <Terminal
              activeFile={activeFile}
              openTabs={openTabs}
              setViewMode={setViewMode}
              setReaderMode={setReaderMode}
            />
          )}
        </div>
      </div>

      {/* Status Bar - Hide in Reader Mode */}
      {!readerMode && (
        <div className="h-6 bg-[#007fd4] flex items-center justify-between px-3 text-[11px] text-white select-none z-50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer hover:bg-white/20 px-1 rounded-sm">
              <GitBranch className="w-3 h-3" />
              <span>main*</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:bg-white/20 px-1 rounded-sm">
              <XCircle className="w-3 h-3" />
              <span>0</span>
              <AlertTriangle className="w-3 h-3 ml-1" />
              <span>0</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-white/20 px-1 rounded-sm">
              <span>{viewMode === 'live' ? 'Markdown Preview' : 'JavaScript React'}</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-white/20 px-1 rounded-sm">
              <Check className="w-3 h-3" />
              <span>Prettier</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
