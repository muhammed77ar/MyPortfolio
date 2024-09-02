import { VerticalTimeline } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"
import ExperienceCard from "./ExperienceCard"

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} xs:text-start text-center`}>What i have done do far</p>
        <h2 className={`${styles.sectionHeadText} xs:text-start text-center`}>Career Highlights</h2>
    </motion.div>
      <div className=" mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, key) => (
            <ExperienceCard key={key} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      </>
  )
}

export default SectionWrapper(Experience, "work")