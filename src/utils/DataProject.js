import reactjs from "../assets/reactjs.png";
import tailwind from "../assets/tailwind.png";
import android from "../assets/android.png";
import unity from "../assets/unity.png";
import webhris from "../assets/webhris.png";
import appar from "../assets/appar.jpg";
import webpmr from "../assets/webpmr.png";

export const DataProjects = [
  {
    id: 1,
    title: "Website HRIS PT Osha Technology",
    img: webhris,
    url: "https://drive.google.com/file/d/1f8Xd-5g5oZMXxNJLCkmrtirwJT18i8oK/view?usp=sharing",
    tools: [
      {
        name: "ReactJS",
        icon: reactjs,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
    ],
  },
  {
    id: 2,
    title: "Aplikasi AR : Organ Gerak Hewan dan Manusia",
    img: appar,
    url: "https://drive.google.com/drive/folders/1_5uL7WYdVvL_iHtQaeC1eLTiPDEW0wfa?usp=sharing",
    tools: [
      {
        name: "Android",
        icon: android,
      },
      {
        name: "Unity",
        icon: unity,
      },
    ],
  },
  {
    id: 3,
    title: "Website PMR SMP Muhammadiyah Cipanas",
    img: webpmr,
    url: "https://pmr-smp-muci.netlify.app",
    tools: [
      {
        name: "ReactJS",
        icon: reactjs,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
    ],
  },
];
