
import BankingImg from './assets/Banking.png'
import ChartBotImg from './assets/ChartBot.png'
import GoogleImg from './assets/Google.png'
import UniversityImg from './assets/University.png'


export const profile = {
  name: "Aniket Neje",
  title: "Software Engineer  • React.js Developer",
  location: "Bengaluru, India",
  email: "aniketneje@gmail.com",
  phone: "+91 9035456598",
  bio : `React.js Developer with 2+ years of experience creating fast, responsive, and user-focused web applications. Skilled in React, Redux, JavaScript, and Tailwind, currently building secure UIs in the banking sector.`,
  about : `I’m a React.js Developer with experience building secure, responsive, and user-friendly web applications in the banking sector. I specialize in React, Redux, JavaScript, and Tailwind CSS. I enjoy solving problems, creating smooth user interfaces, and delivering high-quality features that enhance user experience and performance.`,
  socials: [
    { name: "GitHub", url: "https://github.com/nejeaniket" },
    { name: "LinkedIn", url: "https://linkedin.com/in/aniket-neje" },
    // { name: "Twitter", url: "https://twitter.com/your-handle" },
  ],
  skills: [
    "React.js (Router,RestFul API,React Forms)",
    "JavaScript",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java",
    "Typescript",
    "Tailwind CSS",
    "Redux",
    "Next.js",
    "Git/GitHub",
    "Data Stractures & Algorithms (DSA)",
    "CI/CD",
    "Jest",
    "UI/UX",
    "HTML5",
    "CSS3",
    "npm",
  ],
  experience: [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Tecspeak IT Solutions Pvt.Ltd",
      period: "2023 - Present",
      desc: "Front-end React.js Developer in the banking sector with experience building secure, scalable, and user-focused interfaces. Worked on transaction flows, dashboard modules, authentication, and performance optimization. Skilled in React, Redux, JavaScript, and Tailwind, with strong attention to detail, clean coding, and compliance with security and banking standards. Additionally, contributed to improving UI accessibility, enhancing customer experience, integrating APIs, and collaborating with backend teams to deliver reliable financial features. Hands-on experience working with real-time data, form validations, error handling, and strict testing processes to ensure accuracy and smooth functionality across critical banking operations.",
    }
  ],
  projects: [
  { 
    id: 1, 
    title: 'Banking Dashboard', 
    desc: 'A secure, responsive banking dashboard enabling users to track balances, view transactions, analyze spending, and manage transfers. Designed for clarity, performance, and seamless financial monitoring with a modern, user-friendly interface.', 
    tech: ['React','Redux Toolkit','Chart.js',"Axios/Fetch API", "JWT Authentication"], 
    image: BankingImg, 
    github: 'https://github.com/nejeaniket/Banking-Dashboard.git', 
    live: 'https://bankingdas.netlify.app/'
  },
  { 
    id: 2, 
    title: 'Google Homepage Clone', 
    desc: 'A clean, responsive Google Homepage Clone built with React, Tailwind, and JavaScript, featuring a functional search bar, modern UI, smooth interactions, and pixel-perfect design closely matching Google’s minimal layout.', 
    tech: ['React','Redux Toolkit','Tailwind CSS',"Axios/Fetch API", "JavaScript(ES6+)"], 
    image: GoogleImg, 
    github: 'https://github.com/nejeaniket', 
    live: 'https://shiny-bienenstitch-9e1dac.netlify.app/'
  },

  { 
    id: 3, 
    title: 'University Website', 
    desc: 'A modern, responsive University Website showcasing courses, departments, admissions, campus life, and events. Built with clean UI, smooth navigation, and optimized layouts to deliver an informative, engaging experience for students and visitors.', 
    tech: ['React','Redux Toolkit','Tailwind CSS',"Axios/Fetch API", "JavaScript(ES6+)","Jest"], 
    image: UniversityImg, 
    github: 'https://github.com/nejeaniket/Educity.git', 
    live: 'https://gentle-biscotti-b5afc0.netlify.app/'
  },
  { 
    id: 4, 
    title: 'ChatBot (Gemini Clone)', 
    desc: 'A responsive Gemini-style AI chatbot built with React, Redux, and Tailwind, offering real-time answers, chat history, smooth UI, and intelligent interactions powered by API integration for fast, accurate responses, delivering an intuitive and engaging conversational experience.', 
    tech: ['React','Redux Toolkit','Tailwind CSS',"Axios/Fetch API", "JavaScript(ES6+)","Jest"], 
    image: ChartBotImg, 
    github: 'https://github.com/nejeaniket/Google-Gemini.git', 
    live: 'https://voluble-moonbeam-26520a.netlify.app/'
  },
]

};
