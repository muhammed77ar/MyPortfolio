import {
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
    carrent,
    jobit,
    tripguide,
    threejs,
    Ui,
    fullStack,
    back_end,
    front_end,
    fullstack2,
    frontend,
    pngegg2,
    quickBricoleHeroImage,
    fashionStoreImage,
    MovieWebImage
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
    }
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
  ];

  const technologies2 = [
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
      source_code_link: "https://github.com/",
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
    },
  ];
  
  export { services, technologies1, technologies2, experiences, testimonials, projects };