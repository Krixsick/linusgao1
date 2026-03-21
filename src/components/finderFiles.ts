import type { FileItem } from "../types/files";
import resumePdf from "../assets/personal/Linusgao.pdf";
export const files: FileItem[] = [
  {
    id: "about_me",
    name: "about_me.md",
    folder: "Desktop",
    type: "md",
    content: `# About Me

Hey! Linus here! Welcome to my personal website. I love building and creating :) dm if you want to connect or work on something cool



  Email (linusgao123@gmail.com)

  Github (https://github.com/Krixsick)

  LinkedIn (https://www.linkedin.com/in/linus-gao-5474b723b/)

  Twitter (https://x.com/gaolinus)

Feel free to reach out if you'd like to connect!
`,
  },
  {
    id: "projects",
    name: "projects.md",
    folder: "Desktop",
    type: "md",
    content: `# 📂 Projects

## 🌐 Personal Website

A macOS-inspired personal portfolio website built with ReactJS, TypeScript, and Tailwind CSS.

**Tech Stack:** ReactJS, TypeScript, TanStack Router, Tailwind CSS, Vite

---

## 🚀 More Coming Soon

Stay tuned for more projects!
`,
  },
  {
    id: "resume",
    name: "resume.pdf",
    folder: "Desktop",
    type: "pdf",
    src: resumePdf,
  },
];
