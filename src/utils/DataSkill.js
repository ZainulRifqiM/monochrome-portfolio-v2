import skillIcon from "../assets/skill.png";
import softskillIcon from "../assets/softskill.png";
import toolIcon from "../assets/tool.png";

export const Datasets = [
  {
    id: 1,
    title: "Skills",
    icon: skillIcon,
    skills: [
      { skill: "Front-end: HTML, CSS", percentage: 80 },
      { skill: "Javascript: React JS", percentage: 70 },
      { skill: "UI Design", percentage: 70 },
      { skill: "SQL", percentage: 60 },
      { skill: "Administrative Skill", percentage: 80 },
    ],
  },
  {
    id: 2,
    title: "Soft Skills",
    icon: softskillIcon,
    skills: [
      { skill: "Teamwork and Collaboration", percentage: 80 },
      { skill: "Effective Communication", percentage: 70 },
      { skill: "Problem Solving Abilities", percentage: 80 },
      { skill: "Flexible and Adaptable", percentage: 80 },
      { skill: "Time Management", percentage: 80 },
    ],
  },
  {
    id: 3,
    title: "Tools",
    icon: toolIcon,
    skills: [
      { skill: "Visual Studio Code", percentage: 70 },
      { skill: "Git & Github", percentage: 60 },
      { skill: "Figma", percentage: 70 },
      { skill: "Microsoft Office", percentage: 80 },
      { skill: "Google Workspace", percentage: 80 },
    ],
  },
];
