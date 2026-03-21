import { useState } from "react";
import { files } from "../data/files";
import { useWindows } from "../hooks/windowHelper";

export function FinderContent() {
  const { openWindow } = useWindows();
  const [selectedFolder, setSelectedFolder] = useState<string>("Desktop");

  const folders = ["Desktop", "Downloads"];
  const folderFiles = files.filter((f) => f.folder === selectedFolder);

  return (
    <div className="w-full h-full flex">
      {/* Left Sidebar */}
      <div className="flex flex-col p-2 bg-[#e8e8e8] w-[20%] h-full border-r border-gray-300">
        <p className="font-mono text-light opacity-60 text-black text-[clamp(8px,2vw,10px)] mb-1">
          Favorites
        </p>
        {folders.map((folder) => (
          <button
            onClick={() => setSelectedFolder(folder)}
            key={folder}
            className={`p-1 rounded-md w-full text-left font-mono text-black text-[clamp(8px,2vw,14px)] cursor-pointer transition-colors active:bg-white/60 flex items-center gap-1.5 ${
              selectedFolder === folder ? "bg-black/10" : ""
            }`}
          >
            <span className="text-sm">
              {folder === "Desktop" ? "🖥️" : "⬇️"}
            </span>
            {folder}
          </button>
        ))}
      </div>

      {/* Right Content — File Grid */}
      <div className="bg-white w-[80%] h-full p-4 overflow-auto">
        {folderFiles.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            This folder is empty
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {folderFiles.map((file) => (
              <button
                key={file.id}
                onClick={() => openWindow(file.id)}
                className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group"
              >
                {/* File Icon */}
                <div className="w-16 h-20 bg-white border border-gray-200 rounded-md shadow-sm flex flex-col items-center justify-center group-hover:shadow-md transition-shadow relative">
                  {/* Folded corner */}
                  <div className="absolute top-0 right-0 w-4 h-4 bg-gray-100 border-l border-b border-gray-200 rounded-bl-sm" />
                  <span className="text-2xl mt-1">
                    {file.type === "md" ? "📝" : "📄"}
                  </span>
                  <span className="text-[9px] text-gray-400 mt-0.5 uppercase font-mono">
                    {file.type}
                  </span>
                </div>
                {/* File Name */}
                <span className="text-xs text-center text-gray-700 leading-tight max-w-[80px] truncate">
                  {file.name}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
