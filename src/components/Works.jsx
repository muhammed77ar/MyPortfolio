import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"
import { styles } from "../styles"
import { projects } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn } from "../utils/motion"
import ProjectCard from "./ProjectCard"

const Works = () =>  {
  return (
    <>
    <motion.div variants={fadeIn("right", "", 0.2, 1)}>
        <p className={`${styles.sectionSubText} xs:text-start text-center`}>my work</p>
        <h2 className={`${styles.sectionHeadText} xs:text-start text-center`}>Some Of My Projects</h2>
    </motion.div>
    <div className=" w-full flex">
      <motion.p variants={fadeIn("right", "", 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Here are some standout projects that exemplify my skills and experience. Each project includes a concise description along with links to code repositories and live demos. These examples highlight my ability to tackle complex problems, seamlessly work with various technologies, and efficiently manage projects from start to finish.
      </motion.p>
    </div>
    <div className=" mt-20 flex flex-wrap justify-center gap-7">
      {projects.map((project, key) => (
        <ProjectCard key={key} project={project} index={key}  />
      ))}
    </div>
    </>
  )
}


export default SectionWrapper(Works, "projects")
