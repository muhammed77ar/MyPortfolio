
import { styles } from "../styles"
import { navLinks } from "../constants"
import {logo} from "../assets"
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
        <ul className="list-none hidden sm:flex flex-row gap-5">
          {navLinks.map(link => (
            <li key={link.id}
              className={`relative ${Active === link.title ? 'after:w-full font-semibold px-2' : 'after:w-0 text-secondary hover:text-white transition-all'} after:h-[45px] after:rounded-full after:bg-gradient-to-r from-violet-600 to-indigo-600 after:absolute after:-z-10 after:-bottom-2.5 after:left-0 after:transition-all`}>
              <a href={`#${link.id}`} onClick={() => setActive(link.title)}>{link.title}</a>
            </li>
          ))}
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
