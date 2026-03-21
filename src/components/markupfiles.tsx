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
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-mono"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-black">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-700">{children}</em>
          ),
          hr: () => <hr className="my-4 border-gray-300" />,
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 text-black font-mono">
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed mb-1">{children}</li>
          ),
          code: ({ children }) => (
            <code className="bg-gray-100 text-sm px-1.5 py-0.5 rounded font-mono text-gray-800">
              {children}
            </code>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
