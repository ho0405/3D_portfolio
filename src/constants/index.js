import {
    mobile,
    backend,
    ai,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    sait,
    nomad,
    wavemakers,
    linkedin,
    oracledb,
    vercel,
    python,
    java,
    csharp,
    flutter
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "learn",
      title: "Learned",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "AI Developer",
      icon: ai,
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
      name: "Oracle DB",
      icon: oracledb,
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
      name: "vercel",
      icon: vercel,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "csharp",
      icon: csharp,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "flutter",
      icon: flutter,
    },
  ];
  
  const experiences = [
    {
      title: "Software Development Program",
      company_name: "Southern Alberta Institute of Technology (SAIT)",
      icon: sait, 
      iconBg: "#383E56",
      date: "Sept 2022 - April 2024",
      points: [
        "Engaged in intensive coursework covering Java, Python, and web development fundamentals.",
        "Completed various projects focusing on software development principles and best practices.",
        "Gained a strong understanding of object-oriented programming and data structures.",
        "Collaborated on team projects, enhancing skills in team communication and project management.",
      ],
    },
    {
      title: "LinkedIn Learning Courses",
      company_name: "LinkedIn",
      icon: linkedin, 
      iconBg: "#E6DEDD",
      date: "2022 Dec, 2023 March",
      points: [
        "Completed 'AWS Essential Training for Developers' on LinkedIn Learning, acquiring skills in cloud computing, AWS services, and cloud architecture.",
        "Gained practical knowledge in deploying and managing applications on the AWS platform.",
        "Studied 'GitHub Essential Training', enhancing my understanding of version control, repositories, branches, and collaboration using GitHub.",
        "Applied the learned concepts in personal and academic projects, improving source code management and team collaboration.",
      ],
    },
    {
      title: "Wavemakers Experiential Learning Program",
      company_name: "Capstone Project",
      icon: wavemakers, 
      iconBg: "#383E56", 
      date: "Nov 2023",
      points: [
        "Completed an intensive 8-week experiential learning program focused on developing future-proof skills for the workplace.",
        "Collaborated with team 'YellowWave' to conceptualize and present 'Green-Space Ease', a mobile app designed to make greenspaces more accessible.",
        "Championed the cause of good health and well-being, aiming to assist individuals struggling with mental health issues or disabilities affecting mobility.",
        "Developed the project under the government of Canada's innovative work-integrated learning initiative, acquiring practical experience in teamwork and project management.",
        "The website: https://www.wavemakers.network/",
      ],
    },
    {
      title: "Flutter Development Journey",
      company_name: "Online Learning via Nomad Coders",
      icon: nomad,
      iconBg: "#E6DEDD", 
      date: "Aug 2023 - Present",
      points: [
        "Engaged in a comprehensive Flutter course with Nomad Coders, covering Widget lifecycles, state management, data fetching, navigation, and UI design.",
        "Developed a webtoon application using Flutter, applying practical skills in UI development and local storage integration.",
        "Gained a deep understanding of Flutter's rich set of Widgets and how to use them to create interactive user interfaces.",
        "Learned and implemented advanced Flutter concepts such as managing app state, navigating between screens, and handling asynchronous data with Futures.",
        "Explored efficient coding practices with shortcuts and extensions to streamline development and maintenance of Flutter apps."
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };