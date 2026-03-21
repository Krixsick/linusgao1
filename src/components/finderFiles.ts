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
A macOS-inspired personal portfolio website built with ReactJS, TypeScript, and Tailwind CSS. It features a fully functional window management system, draggable components, and a custom Markdown viewer.
**Links:** [GitHub](https://github.com/Krixsick)

---

## 🤖 Polar Bot (Wynncraft Discord Bot)
A custom Discord bot built specifically for the Wynncraft MMORPG community. It interfaces with APIs to fetch player stats, track data, and provide helpful utility commands directly within Discord servers, making data easily accessible for players.
**Links:** [GitHub Repo](https://github.com/Krixsick/discord-1)

---

## 💻 Polar CLI
A powerful Command Line Interface (CLI) tool built for the terminal. This tool allows users to execute commands, automate tasks, and fetch data quickly without ever having to leave their developer environment.
**Links:** [GitHub Repo](https://github.com/Krixsick/polar-cli-2)

---

## 📈 Stock Predictor
A data-driven stock market prediction tool. This project analyzes historical market data and trends to forecast potential future stock movements, showcasing skills in data processing, algorithms, and analytical programming.
**Links:** [GitHub Repo](https://github.com/Krixsick/stock-predictor-1)

---

## 🎮 Protagame
An interactive, gamified experience built for a hackathon. Protagame combines creative game design with solid programming logic to create an engaging user experience. 
**Links:** [GitHub Repo](https://github.com/Krixsick/protagame2) | [Devpost Submission](https://devpost.com/software/protagme)
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
