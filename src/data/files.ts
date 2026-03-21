import resumePdf from "../assets/personal/Linusgao.pdf";

export type FileItem = {
  id: string;
  name: string;
  folder: "Desktop" | "Downloads";
  type: "md" | "pdf";
  content?: string;
  src?: string;
};

export const files: FileItem[] = [
  {
    id: "about_me",
    name: "about_me.md",
    folder: "Desktop",
    type: "md",
    content: `# 🧑 About Me

## 👋 Hello!

Hey! Linus here! Welcome to my personal website.

I love building and solving problems. I'm passionate about computer science and everything that comes with it.

## 🛠️ What I Do

- **Full-Stack Development** — Building web applications from front to back
- **Problem Solving** — Always looking for elegant solutions
- **Learning** — Constantly exploring new technologies

## 📫 Get In Touch

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

A macOS-inspired personal portfolio website built with React, TypeScript, and Tailwind CSS.

**Tech Stack:** React, TypeScript, TanStack Router, Tailwind CSS, Vite

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
