// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        name: "Mohamed Bchir",
        logoAlt: "Logo",
        email: "mohamedbchir70@gmail.com",
        home: "Home",
        about: "About",
        work: "Work",
        technologies: "Technologies",
        projects: "Projects",
        contact: "Contact",
      },

      // Hero
      hero: {
        greeting: "Hello, I'm",
        description:
          "I'm a Full-Stack Developer design and create websites and applications for various platforms",
        downloadResume: "Download Resume",
        resumePath: "../MohamedBchir_Resume_EN.pdf",
      },

      about: {
        introduction: "Introduction",
        overview: "Overview",
        description:
          "I am a passionate Full Stack Developer dedicated to creating innovative solutions that address real-world problems. Through rigorous training and self-learning in web development, I have mastered programming languages and frameworks such as React.js, JavaScript, HTML, CSS, Tailwind, Bootstrap, and Laravel. Additionally, I have extensive experience with MongoDB and MySQL for database design and management. My expertise encompasses the full spectrum of website creation, from frontend design to backend development, enabling me to deliver comprehensive and robust web applications",
        imageAlt: "Developer background",
      },
      experienceTitle: {
        subtitle: "What I have done so far",
        title: "Career Highlights",
      },
      experience: {
        subtitle: "What I have done so far",
        title: "Career Highlights",
        frontend_dev: {
          title: "Front-end Developer",
          company: "Tech Corp", // Replace with actual company name if applicable
          points: [
            "Developing and maintaining web applications using React.js, JavaScript, HTML, CSS, and related technologies",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility for a seamless user experience.",
            "Optimizing web performance by improving load times and ensuring efficient code execution.",
            "Participating in code reviews and providing constructive feedback to maintain high code standards.",
            "Testing and debugging to identify and fix issues, ensuring a smooth and reliable front-end experience.",
          ],
        },
        backend_dev: {
          title: "Back-end Developer",
          company: "Tech Corp",
          points: [
            "Developing and maintaining server-side logic and databases using PHP, Laravel and other technologies.",
            "Collaborating with teams including frontend developers, designers, and product managers to build high-quality products.",
            "Creating and managing APIs to ensure seamless data exchange between server and client.",
            "Ensuring database performance and integrity with efficient data models and optimized queries.",
            "Participating in code reviews and providing feedback to maintain high code quality.",
            "Conducting testing and debugging to ensure reliable backend functionality.",
          ],
        },
        fullstack_dev: {
          title: "Full Stack Developer",
          company: "Tech Corp",
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
      },
      tech: {
        title: "Technologies",
      },
      works: {
        "subtitle": "My work",
        "title": "Some Of My Projects",
        "description": "Here are some standout projects that exemplify my skills and experience. Each project includes a concise description along with links to code repositories and live demos. These examples highlight my ability to tackle complex problems, seamlessly work with various technologies, and efficiently manage projects from start to finish."
      },
      "projects": {
        "repoButton": "Repo",
        "demoButton": "Demo",
        "tags": {
          "react": "react",
          "laravel": "laravel",
          "tailwindcss": "tailwindcss",
          "styled components": "styled components",
          "strapi": "strapi",
          "restapi": "restapi"
        },
        "Wander Morocco": {
          "title": "Wander Morocco",
          "description": "WanderMorocco is a platform where you can explore destinations, share travel stories, and get tips from other travelers about the best places in Morocco."
        },
        "Thoughts": {
          "title": "Thoughts",
          "description": "An e-commerce platform where you can browse, purchase, and review books across various genres, offering a seamless shopping experience for book lovers."
        },
        "Quick Bricole": {
          "title": "Quick Bricole",
          "description": "The platform where you can search for professionals such as carpenters, mechanics, electricians and other service providers."
        },
        "Fashion Store": {
          "title": "Fashion Store",
          "description": "A website where you can explore the latest fashion trends, shop high-quality clothing, accessories, and footwear for men and women."
        },
        "Movie Web App": {
          "title": "Movie Web App",
          "description": "A movie web app to browse and view detailed information about movies and series, including synopses, cast, and ratings."
        }
      },
      "contact": {
        "subtitle": "Get in touch",
        "title": "Contact",
        "nameLabel": "Your Name",
        "namePlaceholder": "Enter your name here",
        "emailLabel": "Your Email",
        "emailPlaceholder": "Enter your email here",
        "messageLabel": "Your Message",
        "messagePlaceholder": "Enter your message here",
        "sending": "Sending...",
        "sendButton": "Send",
        "successTitle": "Thank you",
        "successText": "I will get back to you as soon as possible.",
        "errorTitle": "Oops...",
        "errorText": "Something went wrong!"
      }
    },
  },
  de: {
    translation: {
      navbar: {
        name: "Mohamed Bchir",
        logoAlt: "Logo",
        email: "mohamedbchir70@gmail.com",
        home: "Startseite",
        about: "Über mich",
        work: "Praktische Erfahrung",
        technologies: "Technologien",
        projects: "Projekte",
        contact: "Kontakt",
      },

      // Hero
      hero: {
        greeting: "Hallo, ich bin",
        description:
          "Ich bin ein Full-Stack-Entwickler, der Websites und Anwendungen für verschiedene Plattformen entwirft und erstellt",
        downloadResume: "Lebenslauf herunterladen",
        resumePath: "../MohamedBchir_Resume_DE.pdf",
      },
      about: {
        introduction: "Einführung",
        overview: "Übersicht",
        description:
          "Ich bin ein leidenschaftlicher Full-Stack-Entwickler, der sich darauf konzentriert, innovative Lösungen zu schaffen, die reale Probleme lösen. Durch intensives Training und Selbststudium in der Webentwicklung habe ich Programmiersprachen und Frameworks wie React.js, JavaScript, HTML, CSS, Tailwind, Bootstrap und Laravel gemeistert. Darüber hinaus verfüge ich über umfangreiche Erfahrung mit MongoDB und MySQL für Datenbankdesign und -management. Meine Expertise umfasst das gesamte Spektrum der Website-Erstellung, vom Frontend-Design bis zur Backend-Entwicklung, was es mir ermöglicht, umfassende und robuste Webanwendungen zu liefern",
        imageAlt: "Entwickler-Hintergrund",
      },
      experienceTitle: {
        subtitle: "Was ich bisher gemacht habe",
        title: "Karriere-Highlights",
      },
      experience: {
        subtitle: "Was ich bisher gemacht habe",
        title: "Karriere-Highlights",
        frontend_dev: {
          title: "Frontend-Entwickler",
          company: "Tech Corp",
          points: [
            "Entwicklung und Wartung von Webanwendungen mit React.js, JavaScript, HTML, CSS und verwandten Technologien.",
            "Zusammenarbeit mit interdisziplinären Teams, einschließlich Designern, Produktmanagern und anderen Entwicklern, um hochwertige Produkte zu schaffen.",
            "Umsetzung responsiven Designs und Sicherstellung der Browser-Kompatibilität für eine nahtlose Benutzererfahrung.",
            "Optimierung der Web-Performance durch Verbesserung der Ladezeiten und effiziente Codeausführung.",
            "Teilnahme an Code-Reviews und Bereitstellung konstruktiven Feedbacks zur Aufrechterhaltung hoher Codestandards.",
            "Testen und Debuggen zur Identifizierung und Behebung von Problemen, um eine reibungslose und zuverlässige Frontend-Erfahrung zu gewährleisten.",
          ],
        },
        backend_dev: {
          title: "Backend-Entwickler",
          company: "Tech Corp",
          points: [
            "Entwicklung und Wartung von serverseitiger Logik und Datenbanken mit PHP, Laravel und anderen Technologien.",
            "Zusammenarbeit mit Teams, einschließlich Frontend-Entwicklern, Designern und Produktmanagern, um hochwertige Produkte zu entwickeln.",
            "Erstellung und Verwaltung von APIs zur Gewährleistung eines nahtlosen Datenaustauschs zwischen Server und Client.",
            "Sicherstellung der Datenbankleistung und -integrität mit effizienten Datenmodellen und optimierten Abfragen.",
            "Teilnahme an Code-Reviews und Bereitstellung von Feedback zur Aufrechterhaltung hoher Codequalität.",
            "Durchführung von Tests und Debugging zur Sicherstellung einer zuverlässigen Backend-Funktionalität.",
          ],
        },
        fullstack_dev: {
          title: "Full-Stack-Entwickler",
          company: "Tech Corp",
          points: [
            "Entwicklung und Wartung sowohl des Frontend- als auch des Backend-Bereichs von Webanwendungen mit Technologien wie React.js, PHP, Laravel und MySQL/MongoDB.",
            "Zusammenarbeit mit interdisziplinären Teams, einschließlich Designern, Produktmanagern und anderen Entwicklern, um integrierte und hochwertige Produkte zu entwickeln.",
            "Umsetzung responsiven Designs und Sicherstellung der Browser-Kompatibilität im Frontend sowie Verwaltung der serverseitigen Logik und Datenbankinteraktionen.",
            "Erstellung und Verwaltung von APIs zur Erleichterung einer reibungslosen Kommunikation zwischen Client und Server.",
            "Optimierung der Anwendungsleistung durch Verbesserung der Effizienz sowohl im Frontend als auch im Backend, um schnelle Ladezeiten und zuverlässige Funktionalität zu gewährleisten.",
            "Teilnahme an Code-Reviews und Bereitstellung von Feedback zur Sicherstellung hoher Codequalität und Einhaltung bewährter Praktiken.",
            "Testen und Debuggen sowohl im Frontend als auch im Backend, um eine reibungslose und fehlerfreie Anwendung zu gewährleisten.",
          ],
        },
      },
      tech: {
        title: "Technologien",
      },
      works: {
        "subtitle": "Meine Arbeit",
        "title": "Einige meiner Projekte",
        "description": "Hier sind einige herausragende Projekte, die meine Fähigkeiten und Erfahrungen verdeutlichen. Jedes Projekt enthält eine kurze Beschreibung sowie Links zu Code-Repositories und Live-Demos. Diese Beispiele zeigen meine Fähigkeit, komplexe Probleme anzugehen, nahtlos mit verschiedenen Technologien zu arbeiten und Projekte von Anfang bis Ende effizient zu verwalten."
      },
      "projects": {
        "repoButton": "Repository",
        "demoButton": "Demo",
        "tags": {
          "react": "react",
          "laravel": "laravel",
          "tailwindcss": "tailwindcss",
          "styled components": "styled components",
          "strapi": "strapi",
          "restapi": "restapi"
        },
        "Wander Morocco": {
          "title": "Wander Morocco",
          "description": "WanderMorocco ist eine Plattform, auf der Sie Reiseziele erkunden, Reiseberichte teilen und Tipps von anderen Reisenden über die besten Orte in Marokko erhalten können."
        },
        "Thoughts": {
          "title": "Thoughts",
          "description": "Eine E-Commerce-Plattform, auf der Sie Bücher verschiedener Genres durchstöbern, kaufen und bewerten können und die ein nahtloses Einkaufserlebnis für Buchliebhaber bietet."
        },
        "Quick Bricole": {
          "title": "Quick Bricole",
          "description": "Eine Plattform, auf der Sie nach Fachleuten wie Tischlern, Mechanikern, Elektrikern und anderen Dienstleistern suchen können."
        },
        "Fashion Store": {
          "title": "Fashion Store",
          "description": "Eine Website, auf der Sie die neuesten Modetrends erkunden und hochwertige Kleidung, Accessoires und Schuhe für Männer und Frauen kaufen können."
        },
        "Movie Web App": {
          "title": "Movie Web App",
          "description": "Eine Web-App für Filme, mit der Sie detaillierte Informationen zu Filmen und Serien, einschließlich Zusammenfassungen, Besetzung und Bewertungen, durchstöbern und anzeigen können."
        }
      },
      "contact": {
        "subtitle": "Kontakt aufnehmen",
        "title": "Kontakt",
        "nameLabel": "Ihr Name",
        "namePlaceholder": "Geben Sie hier Ihren Namen ein",
        "emailLabel": "Ihre E-Mail",
        "emailPlaceholder": "Geben Sie hier Ihre E-Mail ein",
        "messageLabel": "Ihre Nachricht",
        "messagePlaceholder": "Geben Sie hier Ihre Nachricht ein",
        "sending": "Wird gesendet...",
        "sendButton": "Senden",
        "successTitle": "Danke schön",
        "successText": "Ich werde Ihnen so schnell wie möglich antworten.",
        "errorTitle": "Hoppla...",
        "errorText": "Etwas ist schiefgelaufen!"
      }
      
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
