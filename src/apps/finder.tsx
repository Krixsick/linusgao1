const sidebarItems = [
  { icon: "🖥️", label: "Desktop" },
  { icon: "📁", label: "Documents" },
  { icon: "⬇️", label: "Downloads" },
  { icon: "🎵", label: "Music" },
  { icon: "🖼️", label: "Pictures" },
];

const files = [
  { icon: "📄", name: "README.md", date: "Mar 19, 2026" },
  { icon: "📁", name: "Projects", date: "Mar 18, 2026" },
  { icon: "📁", name: "Photos", date: "Mar 15, 2026" },
  { icon: "📄", name: "notes.txt", date: "Mar 10, 2026" },
  { icon: "📁", name: "Music", date: "Feb 28, 2026" },
];

export function FinderContent() {
  return (
    <div className="flex h-full bg-white">
      {/* Sidebar */}
      <div className="w-[180px] bg-[#f0f0f0] border-r border-gray-200 p-2 pt-3 flex-shrink-0">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1">
          Favorites
        </p>
        {sidebarItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 px-2 py-1 rounded-md text-sm text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* File list */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-200">
              <th className="font-medium py-1 px-3">Name</th>
              <th className="font-medium py-1 px-3">Date Modified</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr
                key={file.name}
                className="hover:bg-blue-50 cursor-pointer border-b border-gray-100"
              >
                <td className="py-1.5 px-3 flex items-center gap-2">
                  <span>{file.icon}</span>
                  <span className="text-gray-800">{file.name}</span>
                </td>
                <td className="py-1.5 px-3 text-gray-500">{file.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
