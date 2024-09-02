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
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Govt.science college - matale",
    company_name: "2016-2020",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2016 - October 2020",
    points: [
      "9 A's for 2017 Ordinary Level 2017.",
      "Participation Olympiad All island Exam in 2017.",
      "Pass the A/L Exam with ABB, Z = 1.5 (Combined Maths - A, Physics - B, Chemistry - B).",
      "Member of U19 School Cricket team.",
      "Member of School Western Band."
    ],
  },
  {
    title: "Freelancer in Fiver",
    company_name: "Freelancer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "I will do a clean professional flyer design",
      "I will do UX UI design for your web app, website and dashboard.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I will design professional business flyers and business cards",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "B.Sc.(Hons) in Information Technology and management",
    company_name: "University of Moratuwa",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Present",
    points: [
      "Reading degree in 3rd year.",
      "Automated Plant Box - Role: IOT Developer, Full Stack Developer",
      "Fruits, Vegetables, and Grains Management and Delivery System - Role: Full Stack Developer",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fruits, Vegetables, and Grains Management and Delivery System",
    description:
      "For our second-year software project, my team and I developed a delivery system tailored for a store specializing in fruits, vegetables, and grains. The project included creating a mobile app for customers and a web app for store administrators. I worked on both frontend and backend development, implementing features such as user and admin registration, secure login with JWT token-based authentication, user profile management, and an efficient order management system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "springboot",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Automated Plant Box",
    description:
      "First year hardware project for university. An embedded system project to automate and encourage indoor planting, automating watering, fertilizing, simulating sunlight, controlling humidity and temperature. Through a web application, users can view the real-time stats in the box such as water level, temperature, humidity and control the light system. Used React, Arduino, Proteus, Blender and Firebase.",
    tags: [
      {
        name: "ardino",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lakpawra Project",
    description:
      "I developed a dynamic and responsive website for an using Node.js and React. The website aims to effectively communicate the organization's mission, showcase ongoing projects, and encourage donations and volunteer sign-ups. Leveraging the power of Node.js for the backend and React for the frontend, the site provides a seamless user experience with fast loading times, easy navigation, and a visually appealing interface. The website also includes secure authentication, interactive forms, and a CMS for managing content updates.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };