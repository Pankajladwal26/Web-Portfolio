import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    ibm,
    TravelIndia,
    MindMatrix,
    WebPortfolio,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Front-end Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "AI Using Watson",
      company_name: "IBM",
      icon: ibm,
      iconBg: "#383E56",
      date: "July 2024- August 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Travel India",
      description:
        "Embark on a captivating journey through India's myriad treasures with Travel India as your expert guide.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: TravelIndia,
      source_code_link: "https://pankajladwal26.github.io/Travel-India-Website/",
    },
    {
      name: "Mind Matrix Chatbot",
      description:
        "Empower your online presence with Mind Matrix AI Chatbot: Where intuitive technology meets seamless engagement.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "UI/UX",
          color: "pink-text-gradient",
        },
      ],
      image: MindMatrix,
      source_code_link: "https://github.com/",
    },
    {
      name: "Web Portfolio",
      description:
        "Crafted with React.js to showcase my expertise, projects, and achievements as a software engineer.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: WebPortfolio,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };