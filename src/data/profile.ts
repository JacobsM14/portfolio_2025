// The ids below are the keys of their texts in src/i18n/*.json

export const isAvailable = true;

export const technologies = [
  "React",
  "Node.js",
  "Express",
  "MySQL",
  "TypeScript",
  "Tailwind CSS",
  "Docker",
  "Git",
  "JavaScript",
  "HTML",
  "CSS",
  "C++",
  "Java",
];

export const tools = ["VS Code", "Postman", "GitHub", "Figma", "Jira"];

export const languages = ["es", "ca", "en"] as const;

export const preferences = [
  "hybrid",
  "remote",
  "frontend",
  "junior",
  "partTime",
  "fullTime",
] as const;

export const experiences = [
  { id: "sagradaFamilia", company: "Escola Sagrada Familia" },
  { id: "infinitum", company: "Infinitum Projects" },
  { id: "fundraisers", company: "Fundraisers" },
] as const;

export const studies = [
  { id: "smx", institution: "Jaume Viladoms", years: "2020 - 2022" },
  { id: "daw", institution: "Jaume Viladoms", years: "2022 - 2024" },
] as const;
