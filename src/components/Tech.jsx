import {SectionWrapper} from "../hoc"
import { css, database, docker, figma, git, html, javascript, laravel, mongodb, phpIcon, reactjs, redux, tailwind } from "../assets"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

const Tech = () => {
  return (
    <motion.div variants={fadeIn("right", "", 0.2, 1)} className="flex items-center justify-center w-[100%] sm:overflow-visible overflow-hidden">
    <div className="relative sm:w-96 sm:h-96 w-full h-[350px]">
        <div className="w-full text-center absolute top-[40%] sm:top-[40%] text-[40px] sm:text-[50px] font-bold bg-gradient-to-t from-gray-900 to-white inline-block text-transparent bg-clip-text">Technologies</div>
        <div className="orbit orbit-outer">
            <img src={git} alt="Git" className="icon git" />
            <img src={html} alt="htm" className="icon html" />
            <img src={css} alt="css" className="icon css" />
            <img src={javascript} alt="javascript" className="icon javascript" />
            <img src={tailwind} alt="tailwind" className="icon tailwind" />
            <img src={docker} alt="docker" className="icon docker" />
            <img src={redux} alt="redux" className="icon redux" />
            <img src={phpIcon} alt="php" className="icon php" />
            <img src={figma} alt="figma" className="icon figma" />
        </div>
        <div className="orbit2 orbit-inner">
            <img src={reactjs} alt="reactjs" className="icon reactjs" />
            <img src={laravel} alt="laravel" className="icon laravel" />
            <img src={mongodb} alt="mongodb" className="icon mongodb" />
            <img src={database} alt="mysql" className="icon mysql" />
        </div>
    </div>
</motion.div>
  )
}

export default SectionWrapper(Tech, "technologies")