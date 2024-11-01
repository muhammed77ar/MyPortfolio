import { navLinks } from "../constants"
import { logo } from "../assets"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Navbar() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const hideNavItemsVariant = {
    opened: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
    closed: { opacity: 1, y: "0%", transition: { delay: 1.1, duration: 0.5, ease: "easeInOut" } },
  };

  const mobileMenuVariant = {
    opened: { y: "0%", transition: { delay: 0.15, duration: 1.1, ease: [0.74, 0, 0.19, 1.02] } },
    closed: { y: "-100%", transition: { delay: 0.35, duration: 0.63, ease: [0.74, 0, 0.19, 1.02] } },
  };

  const fadeInVariant = {
    opened: { opacity: 1, transition: { delay: 1.2 } },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: { transition: { delayChildren: 1, staggerChildren: 0.18 } },
    closed: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
  };

  const liVariant = {
    opened: { opacity: 1, y: "0%", transition: { duration: 0.65, ease: "easeOut" } },
    closed: { opacity: 0, y: "100%", transition: { duration: 0.25, ease: "easeInOut" } },
  };




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`overflow-hidden bg-transparent text-white`}>
      <motion.nav initial="closed" animate={mobileNavOpen ? "opened" : "closed"}
        className={`fixed top-0 w-full z-50 px-4 py-1 transition-colors duration-300 ${scrolled ? "bg-black" : "bg-transparent"
          } flex justify-between items-center`}>
        <div className="overflow-hidden">
          <motion.h variants={hideNavItemsVariant} className="capitalize text-xl font-bold">
            <Link to={"/"}
              className=" flex items-center gap-2"
              onClick={() => {
                window.scrollTo(0, 0)
              }}>
              <img src={logo} alt="Logo" className="w-14 h-14 object-conatine" />
              <p className="text-white text-[18px] font-bold cursor-pointer">Mohamed Bchir</p>
            </Link>
          </motion.h>
        </div>
        <div className="overflow-hidden flex justify-center items-center gap-4">
          <motion.div variants={hideNavItemsVariant} >
            <a
              href="https://github.com/muhammed77ar"
               target="_blank"
              className="text-gray-500 hover:text-gray-900 cursor-pointer dark:hover:text-white dark:text-gray-400"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
          </motion.div>
          <motion.div variants={hideNavItemsVariant} onClick={() => setMobileNavOpen(true)} className="uppercase text-xs cursor-pointer">
            <IoMenu className="text-4xl bg-gray-500 p-0 m-0 rounded-full focus:outline-none bg-gradient-to-r from-violet-600 to-indigo-600" />
          </motion.div>
        </div>
        <motion.div variants={mobileMenuVariant} className="fixed top-0 left-0 h-screen w-full flex flex-col text-center items-center bg-black z-50">
          <motion.button variants={fadeInVariant} onClick={() => setMobileNavOpen(false)} className="self-end px-4 py-4 text-white uppercase text-xs">
            <IoClose className="text-4xl bg-gray-500 p-0 m-0 rounded-full focus:outline-none bg-gradient-to-r from-violet-600 to-indigo-600" />
          </motion.button>
          <motion.ul variants={ulVariant} className="mt-10 list-none">
            {navLinks.map((link) => (
              <motion.li whileTap={{ scale: 0.95 }} key={link.id} variants={liVariant} className="my-5">
                <motion.a href={`#${link.id}`} onClick={() => setMobileNavOpen(false)} className="text-4xl capitalize text-center cursor-pointer hover:italic">{link.title}</motion.a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeInVariant} className="mt-16 flex flex-col justify-center items-center gap-2">
            <h5 className="font-normal">mohamedbchir70@gmail.com</h5>
            <div className=" flex justify-center items-center gap-3">
              <a
                href="https://github.com/muhammed77ar"
                 target="_blank"
                className="text-gray-500 hover:text-gray-900 cursor-pointer dark:hover:text-white dark:text-gray-400"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    clip-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-bchir-a50a1b313/"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 cursor-pointer dark:hover:text-white dark:text-gray-400"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    d="M19 3H5C4.45 3 4 3.45 4 4v16c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM8.75 18H6.5v-7.5h2.25V18zm-1.125-8.55c-.77 0-1.4-.63-1.4-1.4 0-.77.63-1.4 1.4-1.4s1.4.63 1.4 1.4c0 .77-.63 1.4-1.4 1.4zm10.125 8.55h-2.25v-3.75c0-.91-.03-2.07-1.26-2.07-1.26 0-1.45.98-1.45 2v3.82h-2.25V10.5h2.16v1.02h.03c.3-.57 1.03-1.18 2.12-1.18 2.27 0 2.69 1.5 2.69 3.43v4.23z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_muhammad_.ar/"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 cursor-pointer dark:hover:text-white dark:text-gray-400"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-2.6a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                </svg>

              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.nav>
    </div>
  )
}


