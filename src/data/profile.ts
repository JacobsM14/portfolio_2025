// The ids below are the keys of their texts in src/i18n/*.json

export const isAvailable = true;

export const technologies = [
  "React",
  "React Native",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "NodeJs",
  "Express",
  "MySQL",
  "C++",
  "Java",
  "Go",
  "API Rest",
  "AI",
  "Docker",
  "Git",
];

export const tools = ["VS Code", "DBeaver", "Postman", "GitHub", "Figma", "Jira"];

export const languages = ["es", "ca", "en"] as const;

export const preferences = [
  "hybrid",
  "remote",
  "frontend",
  "backend",
  "fullstack",
  "junior",
  "partTime",
  "fullTime",
] as const;

export const experiences = [
  { id: "fundraisers", company: "Fundraisers" },
  { id: "infinitum", company: "Infinitum Projects" },
  { id: "sagradaFamilia", company: "Escola Sagrada Familia" },
] as const;

export const studies = [
  { id: "daw", institution: "Jaume Viladoms", years: "2022 - 2024" },
  { id: "smx", institution: "Jaume Viladoms", years: "2020 - 2022" },
] as const;
