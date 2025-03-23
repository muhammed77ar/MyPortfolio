import { navLinks } from "../constants";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { i18n, t } = useTranslation();

  // Function to toggle language
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    console.log(`Switching language to: ${newLang}`); // Debug log
    i18n.changeLanguage(newLang)
      .then(() => console.log(`Language switched to: ${i18n.language}`))
      .catch((err) => console.error('Error switching language:', err));
  };

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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SVG for German Flag
  const GermanFlagSVG = () => (
    <svg width="24" height="24" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="6.67" fill="#000000" />
      <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
      <rect y="13.34" width="30" height="6.66" fill="#FFCE00" />
    </svg>
  );

  // SVG for English Flag (Union Jack - simplified)
  const EnglishFlagSVG = () => (
    <svg width="24" height="24" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" strokeWidth="2" />
      <path d="M13 0H17V20H13ZM0 8H30V12H0Z" fill="#FFFFFF" />
      <path d="M14 0H16V20H14ZM0 9H30V11H0Z" fill="#C8102E" />
    </svg>
  );

  return (
    <div className="overflow-hidden bg-transparent text-white">
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className={`fixed top-0 w-full z-50 px-4 py-1 transition-colors duration-300 ${scrolled ? "bg-black" : "bg-transparent"} flex justify-between items-center`}
      >
        <div className="overflow-hidden">
          <motion.h variants={hideNavItemsVariant} className="capitalize text-xl font-bold">
            <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt={t('navbar.logoAlt')} className="w-14 h-14 object-contain" />
              <p className="text-white text-[18px] font-bold cursor-pointer hidden sm:block">{t('navbar.name')}</p>
            </Link>
          </motion.h>
        </div>
        <div className="overflow-hidden flex justify-center items-center gap-4">
          {/* Language Toggle Button with Reversed Flag */}
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full hover:from-violet-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2"
          >
            {i18n.language === 'en' ? <GermanFlagSVG /> : <EnglishFlagSVG />}
            <span>{i18n.language === 'en' ? 'DE' : 'EN'}</span>
          </button>
          
          <motion.div variants={hideNavItemsVariant}>
            <a
              href="https://github.com/muhammed77ar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 cursor-pointer dark:hover:text-white dark:text-gray-400"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  fillRule="evenodd"
                />
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
                <motion.a
                  href={`#${link.id}`}
                  onClick={() => setMobileNavOpen(false)}
                  className="text-4xl capitalize text-center cursor-pointer hover:italic"
                >
                  {t(`navbar.${link.id}`)}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeInVariant} className="mt-16 flex flex-col justify-center items-center gap-2">
            <h5 className="font-normal">{t('navbar.email')}</h5>
            <div className="flex justify-center items-center gap-3">
              <a href="https://github.com/muhammed77ar" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 cursor-pointer dark:hover:text-white dark:text-gray-400">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  {/* GitHub SVG path */}
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mohamed-bchir-a50a1b313/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 cursor-pointer dark:hover:text-white dark:text-gray-400">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  {/* LinkedIn SVG path */}
                </svg>
              </a>
              <a href="https://www.instagram.com/_muhammad_.ar/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 cursor-pointer dark:hover:text-white dark:text-gray-400">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  {/* Instagram SVG path */}
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.nav>
    </div>
  );
}