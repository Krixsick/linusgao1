import { useState, useRef, useEffect, type KeyboardEvent } from "react";

type Line = { text: string; color?: string };

const HELP_TEXT: Line[] = [
  { text: "Available commands:", color: "text-yellow-400" },
  { text: "" },
  { text: "  about        - Learn about me" },
  { text: "  skills       - View my tech stack" },
  { text: "  projects     - See what I've built" },
  { text: "  contact      - How to reach me" },
  { text: "  whoami       - Who are you?" },
  { text: "  ls           - List files" },
  { text: "  date         - Show current date" },
  { text: "  clear        - Clear the terminal" },
  { text: "  help         - Show this menu" },
];

const ABOUT_TEXT: Line[] = [
  { text: "┌─────────────────────────────────────┐", color: "text-cyan-400" },
  { text: "│           About Me                  │", color: "text-cyan-400" },
  { text: "├─────────────────────────────────────┤", color: "text-cyan-400" },
  { text: "│  Hey! I'm Linus Gao.               │", color: "text-cyan-400" },
  { text: "│  I love building and creating.      │", color: "text-cyan-400" },
  { text: "│  CS student who's passionate about  │", color: "text-cyan-400" },
  { text: "│  software engineering, open source, │", color: "text-cyan-400" },
  { text: "│  and making cool things.            │", color: "text-cyan-400" },
  { text: "└─────────────────────────────────────┘", color: "text-cyan-400" },
];

const SKILLS_TEXT: Line[] = [
  { text: "Tech Stack:", color: "text-yellow-400" },
  { text: "" },
  { text: "  Languages    → TypeScript, JavaScript, Python, Java" },
  { text: "  Frontend     → React, Tailwind CSS, HTML/CSS" },
  { text: "  Backend      → Node.js, REST APIs" },
  { text: "  Tools        → Git, GitHub, VS Code, CLI" },
  { text: "  Learning     → Machine Learning, Data Science" },
];

const PROJECTS_TEXT: Line[] = [
  { text: "Projects:", color: "text-yellow-400" },
  { text: "" },
  {
    text: "  🌐 Personal Website     React, TypeScript, Tailwind",
    color: "text-green-300",
  },
  { text: "     macOS-inspired portfolio with draggable windows" },
  { text: "" },
  {
    text: "  🤖 Polar Bot            TypeScript, Discord.js",
    color: "text-green-300",
  },
  { text: "     Wynncraft Discord bot for player stats & data" },
  { text: "" },
  {
    text: "  💻 Polar CLI            TypeScript, Node.js",
    color: "text-green-300",
  },
  { text: "     Terminal CLI for automating tasks" },
  { text: "" },
  {
    text: "  📈 Stock Predictor      Python, Pandas, ML",
    color: "text-green-300",
  },
  { text: "     Data-driven stock market prediction tool" },
  { text: "" },
  {
    text: "  🎮 Protagame            JavaScript, Hackathon",
    color: "text-green-300",
  },
  { text: "     Interactive gamified hackathon project" },
  { text: "" },
  { text: '  Type "open finder" to view files →', color: "text-gray-500" },
];

const CONTACT_TEXT: Line[] = [
  { text: "Contact:", color: "text-yellow-400" },
  { text: "" },
  { text: "  📧 Email     → linusgao123@gmail.com", color: "text-blue-400" },
  {
    text: "  🐙 GitHub    → github.com/Krixsick",
    color: "text-blue-400",
  },
  {
    text: "  💼 LinkedIn  → linkedin.com/in/linus-gao-5474b723b",
    color: "text-blue-400",
  },
  { text: "  🐦 Twitter   → x.com/gaolinus", color: "text-blue-400" },
];

const WELCOME: Line[] = [
  { text: "Welcome to Linus's Terminal! 👋", color: "text-cyan-400" },
  { text: 'Type "help" to see available commands.', color: "text-gray-500" },
  { text: "" },
];

function processCommand(cmd: string): Line[] {
  const trimmed = cmd.trim().toLowerCase();

  switch (trimmed) {
    case "help":
      return HELP_TEXT;
    case "about":
      return ABOUT_TEXT;
    case "skills":
      return SKILLS_TEXT;
    case "projects":
      return PROJECTS_TEXT;
    case "contact":
      return CONTACT_TEXT;
    case "whoami":
      return [{ text: "linus-gao" }];
    case "date":
      return [{ text: new Date().toString() }];
    case "ls":
      return [
        { text: "about_me.md   projects.md   resume.pdf", color: "text-blue-300" },
      ];
    case "pwd":
      return [{ text: "/Users/linus/Desktop" }];
    case "echo hello":
      return [{ text: "hello" }];
    case "sudo":
    case "sudo su":
    case "sudo rm -rf /":
      return [{ text: "Nice try 😏", color: "text-red-400" }];
    case "":
      return [];
    default:
      if (trimmed.startsWith("echo ")) {
        return [{ text: trimmed.slice(5) }];
      }
      return [
        { text: `zsh: command not found: ${cmd.trim()}`, color: "text-red-400" },
        {
          text: 'Type "help" for available commands.',
          color: "text-gray-500",
        },
      ];
  }
}

export function TerminalContent() {
  const [lines, setLines] = useState<Line[]>([...WELCOME]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const command = input;
      const trimmed = command.trim().toLowerCase();

      if (trimmed === "clear") {
        setLines([]);
        setInput("");
        setHistory((prev) => [...prev, command]);
        setHistoryIndex(-1);
        return;
      }

      const prompt: Line = {
        text: `~ % ${command}`,
        color: "text-green-400",
      };
      const output = processCommand(command);

      setLines((prev) => [...prev, prompt, ...output]);
      setInput("");
      if (command.trim()) {
        setHistory((prev) => [...prev, command]);
      }
      setHistoryIndex(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const newIndex =
        historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div
      className="bg-[#1a1a2e] w-full h-full p-3 font-mono text-sm text-green-400 overflow-auto cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {lines.map((line, i) => (
        <div
          key={i}
          className={`whitespace-pre-wrap leading-relaxed ${line.color ?? "text-gray-300"}`}
        >
          {line.text || "\u00A0"}
        </div>
      ))}
      <div className="flex items-center">
        <span className="text-purple-400 mr-2 shrink-0">~ %</span>
        <input
          ref={inputRef}
          className="bg-transparent outline-none text-green-400 flex-1 caret-green-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
