import Markdown from "react-markdown";
import type { MarkdownViewerProps } from "../types/files";
export function MarkUpFiles({ content }: MarkdownViewerProps) {
  return (
    <div className="bg-white w-full h-full p-6 overflow-auto prose prose-sm max-w-none">
      <Markdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl text-black font-mono font-bold mb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl mt-6 mb-3 text-black font-mono">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold mt-4 mb-2 text-black font-mono">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="leading-relaxed mb-4 text-black font-mono">
              {children}
            </p>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
