import { RiTailwindCssLine } from "react-icons/ri";

export const projects = [
  {
    id: 1,
    title: "Bakery Shop",
    description:
      "This is a bakery application designed using a Figma template. The app uses React for component-based architecture, Tailwind CSS.",
    technologies: [
    
      { name: "Tailwind", url: "tailwind.svg" },
      { name: "React", url: "react.svg" },
      { name: "Figma", url: "figma.svg" },
    ],
    image: "bakery.png",
    link: "https://cc-bakery.netlify.app/",
  },
  {
    id: 2,
    title: "Totor Recipes",
    description:
      "It allows users to search for specific recipes, explore unique dishes, and view detailed information, including ingredients and preparation steps.",
    technologies: [
      { name: "Tailwind", url: "tailwind.svg" },
      { name: "React", url: "react.svg" },
      { name: "Zustand", url: "zustand.svg" },

    ],
    image: "recipe.png",
    link: "https://tjrecipes.netlify.app/",
  },
  {
    id: 3,
    title: "Patients Admin",
    description:
      "In this application, you can manage patients through a form and, depending on their status, edit or delete their record. ",
    technologies: [
      { name: "Tailwind", url: "tailwind.svg" },
      { name: "React", url: "react.svg" },
      { name: "Zustand", url: "zustand.svg" },
    ],
    image: "patients.png",
    link: "https://patientszustandtta.netlify.app/",
  },
];




