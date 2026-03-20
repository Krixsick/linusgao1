import { useState, type KeyboardEvent } from "react";

export function TerminalContent() {
  const [lines, setLines] = useState<string[]>([
    "Last login: Thu Mar 19 10:00:00 on ttys000",
  ]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const command = input.trim();
      const newLines = [...lines, `~ % ${command}`];

      // Simple fake responses
      if (command === "clear") {
        setLines([]);
      } else if (command === "whoami") {
        newLines.push("guest");
        setLines(newLines);
      } else if (command === "date") {
        newLines.push(new Date().toString());
        setLines(newLines);
      } else if (command === "ls") {
        newLines.push("Desktop  Documents  Downloads  Music  Pictures");
        setLines(newLines);
      } else if (command === "help") {
        newLines.push("Available commands: whoami, date, ls, clear, help");
        setLines(newLines);
      } else if (command) {
        newLines.push(`zsh: command not found: ${command}`);
        setLines(newLines);
      } else {
        setLines(newLines);
      }

      setInput("");
    }
  };

  return (
    <div className="bg-[#1e1e1e] w-full h-full p-3 font-mono text-sm text-green-400 overflow-auto">
      {lines.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap leading-relaxed">
          {line}
        </div>
      ))}
      <div className="flex items-center">
        <span className="text-blue-400 mr-2">~ %</span>
        <input
          className="bg-transparent outline-none text-green-400 flex-1 caret-green-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          spellCheck={false}
        />
      </div>
    </div>
  );
}
