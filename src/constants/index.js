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
    threejs,
    sait,
    nomad,
    wavemakers,
    linkedin,
    oracledb,
    python,
    java,
    flutter,
    proplan,
    greenspace,
    portfolio,
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
      name: "figma",
      icon: figma,
    },
    
    {
      name: "python",
      icon: python,
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
  
  const expertise = [
    {
      expertise:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      expertise:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      expertise:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pro Plan (Task manager)",
      description:
        "Pro Plan is a cutting-edge web application developed using React as part of the SAIT web development project. This powerful tool empowers teams to enhance collaboration, streamline task management, and visualize project progress effortlessly.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vercel",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
      ],
      image: proplan,
      website: "https://cprg-306-final-project.vercel.app/",
      source_code_link: "https://github.com/Sergei137/cprg-306-Final-Project",
    },
    {
      name: "3D Portfolio",
      description:
        "Step into a new dimension with the 3D Personal Portfolio – a groundbreaking showcase of skills and achievements crafted with three.js, Vite, and Tailwind CSS. This portfolio isn't just a static display; it's a dynamic and immersive experience designed to captivate visitors and provide an unparalleled insight into your creative journey.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "vite.js",
          color: "orange-text-gradient",
        }
      ],
      image: portfolio,
      source_code_link: "https://github.com/ho0405/3D_portfolio",
    },
    {
      name: "Green Space Ease",
      description:
        "Embark on a transformative journey with 'Green Space Ease', a visionary mobile app conceptualized and presented during an 8-week experiential learning program under the esteemed Wavemakers initiative. As part of team 'YellowWave,' we delved into the planning phase, laying the groundwork for an app designed to enhance accessibility to greenspaces.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: greenspace,
      source_code_link: "https://github.com/ho0405/greenspace/",
    },
    
  ];
  
  export { services, technologies, experiences, expertise, projects };