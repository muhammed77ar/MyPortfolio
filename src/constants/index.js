import {
    javascript,
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
    Ui,
    fullStack,
    back_end,
    front_end,
    fullstack2,
    frontend,
    pngegg2,
    quickBricoleHeroImage,
    fashionStoreImage,
    MovieWebImage,
    project3,
    project4,
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
    {
      id : "technologies",
      title : "Technologies"
    },
    {
      id : "projects",
      title : "Projects"
    },

  ];
  
  const services = [
    {
      title: "Web Application Development",
      icon: fullStack,
    },
    {
      title: "Front-End Development",
      icon: front_end,
    },
    {
      title: "Back-End Development",
      icon: back_end,
    },
    {
      title: "User Interface Design",
      icon: Ui,
    },
  ];
  
  const technologies1 = [
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
  ];

  const technologies2 = [
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
  ]
  
  const experiences = [
    {
      title: "Front-end Developer",
      icon: frontend,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js, JavaScript, HTML, CSS, and related technologies",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility for a seamless user experience.",
        "Optimizing web performance by improving load times and ensuring efficient code execution.",
        "Participating in code reviews and providing constructive feedback to maintain high code standards.",
        "Testing and debugging to identify and fix issues, ensuring a smooth and reliable front-end experience."
      ],
    },
    {
      title: "Back-end Developer",
      icon: pngegg2,
      iconBg: "#E6DEDD",
      points: [
        "Developing and maintaining server-side logic and databases using PHP, Laravel and other technologies.",
        "Collaborating with teams including frontend developers, designers, and product managers to build high-quality products.",
        "Creating and managing APIs to ensure seamless data exchange between server and client.",
        "Ensuring database performance and integrity with efficient data models and optimized queries.",
        "Participating in code reviews and providing feedback to maintain high code quality.",
        "Conducting testing and debugging to ensure reliable backend functionality."
      ],
    },
    {
      title: "Full stack Developer",
      icon: fullstack2,
      iconBg: "#E6DEDD",
      points: [
        "Developing and maintaining both front-end and back-end of web applications using technologies like React.js, PHP, Laravel and MySQL/MongoDB.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to build integrated and high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility on the front-end, while also managing server-side logic and database interactions.",
        "Creating and managing APIs to facilitate smooth communication between the client and server.",
        "Optimizing application performance by improving both front-end and back-end efficiency, ensuring fast load times and reliable functionality.",
        "Participating in code reviews and providing feedback to ensure high code quality and adherence to best practices.",
        "Testing and debugging across both front-end and back-end to ensure a smooth and error-free application.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Wander Morocco",
      description:
      "WanderMorocco is a platform where you can explore destinations, share travel stories, and get tips from other travelers about the best places in Morocco.",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "laravel",
          color: "text-red-500",
        },
        {
          name: "tailwindcss",
          color: "text-blue-500",
        },
      ],
      image: project3,
      source_code_link: "https://github.com/muhammed77ar/WanderMorocco-Blog",
      hasDemo: true,
      demoLink: "https://www.linkedin.com/posts/mohamed-bchir-a50a1b313_react-laravel-vite-activity-7240656345559924736-0WnR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE-1CRwB0TIXYtSZcpjXbT-rvhNJTC4maLc",
    },
    {
      name: "Thoughts",
      description:
      "An e-commerce platform where you can browse, purchase, and review books across various genres, offering a seamless shopping experience for book lovers.",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "laravel",
          color: "text-red-500",
        },
        {
          name: "tailwindcss",
          color: "text-blue-500",
        },
      ],
      image: project4,
      source_code_link: "https://github.com/muhammed77ar/BooksStore",
      hasDemo: true,
      demoLink: "https://www.linkedin.com/posts/mohamed-bchir-a50a1b313_fullstackdeveloper-react-laravel-activity-7277616181174296577-JExQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE-1CRwB0TIXYtSZcpjXbT-rvhNJTC4maLc",
    },
    {
      name: "Quick Bricole",
      description:
      "The platform where you can search for professionals such as carpenters, mechanics, electricians and other service providers. ",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "laravel",
          color: "text-red-500",
        },
        {
          name: "styled components",
          color: "text-yellow-500",
        },
      ],
      image: quickBricoleHeroImage,
      source_code_link: "https://github.com/muhammed77ar/QuickBricole_Project",
      hasDemo: false,
    },
    {
      name: "Fashion Store",
      description:
        "A website where you can explore the latest fashion trends, shop high-quality clothing, accessories, and footwear for men and women.",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "strapi",
          color: "text-violet-500",
        },
        {
          name: "styled components",
          color: "text-yellow-500",
        },
      ],
      image: fashionStoreImage,
      source_code_link: "https://github.com/muhammed77ar/E-COMMERCE-WEBSITE",
      hasDemo: false,
    },
    {
      name: "Movie Web App",
      description:
        "A movie web app to browse and view detailed information about movies and series, including synopses, cast, and ratings.",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "restapi",
          color: "text-green-700",
        },
        {
          name: "styled components",
          color: "text-yellow-500",
        },
      ],
      image: MovieWebImage,
      source_code_link: "https://github.com/muhammed77ar/movie-app",
      hasDemo: true,
      demoLink: "https://movie-night1.pages.dev/",
    },
  ];
  
  export { services, technologies1, technologies2, experiences, projects };