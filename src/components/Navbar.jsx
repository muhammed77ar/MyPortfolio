
import { styles } from "../styles"
import { navLinks } from "../constants"
import { logo } from "../assets"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [Active, setActive] = useState("")
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
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
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 transition-all ${scrolled ? "bg-black bg-opacity-90" : "bg-transparent"}`}>
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to={"/"}
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}>
          <img src={logo} alt="Logo" className="w-14 h-14 object-conatine" />
          <p className="text-white text-[18px] font-bold cursor-pointer">Mohamed Bchir</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row items-center gap-5">
          {navLinks.map(link => (
            <li key={link.id}
              className={`relative ${Active === link.title ? 'after:w-full font-semibold px-2' : 'after:w-0 text-secondary hover:text-white transition-all'} after:h-[45px] after:rounded-full after:bg-gradient-to-r from-violet-600 to-indigo-600 after:absolute after:-z-10 after:-bottom-2.5 after:left-0 after:transition-all`}>
              <a href={`#${link.id}`} onClick={() => setActive(link.title)}>{link.title}</a>
            </li>
          ))}
          <li>
            <a
            href="https://github.com/muhammed77ar"
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
          </li>
        </ul>
        <div className="sm:hidden flex justify-end items-center">
          <div className="relative sm:max-w-xl mx-auto">
            <nav>
              <button
                className="text-gray-500 p-5 flex justify-center items-center rounded-full w-8 h-8 focus:outline-none bg-gradient-to-r from-violet-600 to-indigo-600"
                onClick={toggleMenu}
              >
                <div className="flex flex-col items-center justify-center">
                  <span
                    aria-hidden="true"
                    className={`h-1 w-7 bg-white transform rounded-sm transition duration-500 ease-in-out ${open ? 'rotate-45 translate-y-1' : '-translate-y-1'
                      }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`h-1 w-7 bg-white transform rounded-sm transition duration-500 ease-in-out ${open ? 'opacity-0' : ''
                      }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`h-1 w-7 bg-white transform rounded-sm transition duration-500 ease-in-out ${open ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                      }`}
                  ></span>
                </div>
              </button>
            </nav>
          </div>
          <div className={`transition-transform duration-500 ease-in-out transform ${open ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 w-[45%] h-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border-2 border-gray-100 z-20`}>
            <ul className="list-none w-full mt-28 flex justify-start items-center flex-col gap-5">
              {navLinks.map(link => (
                <>
                  <li key={link.id}
                    className={`relative ${Active === link.title ? 'after:w-full font-semibold px-7' : 'after:w-0 text-white hover:text-gray-300 font-semibold transition-all transform rotate-12'} after:h-[45px] after:rounded-full after:bg-gradient-to-r from-violet-600 to-indigo-600 after:transform rotate-12 after:absolute after:-z-20 after:-bottom-2.5 after:left-0 after:transition-all`}>
                    <a href={`#${link.id}`} onClick={() => setActive(link.title)}>{link.title}</a>
                  </li>
                  <div className=" w-full h-[2px] bg-white transform rotate-12"></div>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
