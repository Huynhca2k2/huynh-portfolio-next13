import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import project1 from "@/public/project1.png";
import project2 from "@/public/project2.png";
import project3 from "@/public/project3.png";
import project4 from "@/public/project4.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "The Open University Ho Chi Minh City",
    location: "Go Vap District, Ho Chi Minh City",
    description:
      "I graduated after 3 years of studying. My major: Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Frontend Developer",
    location: "Ho Chi Minh City",
    description:
      "Implement many single projects and many joint projects with the team, using HTML, CSS, JS, and ReactJS technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },

] as const;

export const projectsData = [
  {
    title: "Clone CHplay",
    description:
      "Clone interface web chplay",
    tags: ["React", "Vite", "Tailwind",],
    imageUrl: project1,
  },
  {
    title: "League of Legends script",
    description:
      "Clone interface web selling tool league of legend",
    tags: ["HTML5", "CSS3", "Javascript(ES6+)"],
    imageUrl: project2,
  },
  {
    title: "FullStack -  Ecommer",
    description:
      "Clone interface web ecommer and functions of sale",
    tags: ["React", "Vite", "MongoDB", "Express", "Nodejs"],
    imageUrl: project3,
  },
  {
    title: "Warehouse Management System (WMS)",
    description:
      "It is a website used to manage and oversee daily warehouse operations, from goods entering the warehouse to leaving it.",
    tags: ["React", "Nodejs", "MongoDB", "Tailwind", "RadixUi", "Yup + React-hook-form"],
    imageUrl: project4,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Material UI",
  "Radix UI",
  "MongoDB",
  "MySQL",
  "Python",
  "Java",
  "Github",
  "Docker",
] as const;