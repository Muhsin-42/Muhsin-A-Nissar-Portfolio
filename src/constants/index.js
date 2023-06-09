import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  firebase,
  git,
  figma,
  docker,
  meta,
  smartCrystalLogo,
  brototype,
  shopify,
  binge,
  smartCrystal,
  watchClub,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "SASS ",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Freelance Web Developer",
    company_name: "Smart Crystal Facility Management india",
    icon: smartCrystalLogo,
    iconBg: "#fff",
    date: "April 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Develop, Deployed and handover the project before the deadline.",
    ],
  },
  {
    title: "MERN Stack Development Intern",
    company_name: "Brototype",
    icon: brototype,
    iconBg: "black",
    date: "Sept 2023 - April 2023",
    points: [
      "Gained hands-on experience in developing full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Receiving regular feedback and guidance from working professionals in the tech industry.",
      "Completing weekly tasks and projects that challenge and enhance your skills and knowledge. ",
      "Successfully completed two major projects along with several minor projects.",
    ],
  }
];


const projects = [
  {
    name: "Binge",
    description: "Web-based platform that connects movie lovers with a rich database of films and a dynamic social network. Features: Fast loading, Smooth animation, Follow & Chat, Real-time Notification, Email Confirmation, Rating, Review, Post, Wishlist.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "text-green-500",
      },
      {
        name: "express",
        color: "text-red-500",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: binge,
    source_code_link: "https://github.com/Muhsin-42/BingeIt",
    live_link: "https://binge-chat.netlify.app"
  },
  {
    name: "Smart Crystal Facility Management",
    description:
      "Web-based platform for a cleaning service agency. Implemented features such as  customer feedback, quality guarantee, customized service, eco-friendly products, lazy loading, image uploading, and rating system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: smartCrystal,
    source_code_link: "https://github.com/Muhsin-42/SystemCrystal",
    live_link: "https://smart-crystal-facility-management-india.com/"
  },
  {
    name: "Watch Club",
    description:
      "Website which allows users to buy watches from a wide range of products. Has a customized admin panel to handle products, orders, sales reports, etc. Image zooming, Discounts and coupons, OTP verification, and Payment options are also available.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "ejs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: watchClub,
    source_code_link: "https://github.com/Muhsin-42/WatchClub",
    live_link: "https://watch-club.onrender.com/"
  },
];

export { services, technologies, experiences, projects };
