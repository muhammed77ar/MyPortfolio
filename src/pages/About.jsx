import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from '../utils/motion'
import ServiceCard from "../components/ServiceCard"
import { SectionWrapper } from "../hoc";
import { developerBackground } from "../assets"
import Tilt from "react-parallax-tilt"

const About = () => {
    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} xs:text-start text-center`}>Introduction</p>
                <h2 className={`${styles.sectionHeadText} xs:text-start text-center`}>Overview</h2>
            </motion.div>
            <motion.div variants={fadeIn("right", "", 0.1, 1)}
                className="mt-4 w-full flex xs:flex-row flex-col flex-wrap sm:justify-center justify-center items-center xs:gap-10 gap-0">
                <p className="text-secondary  text-[17px] max-w-3xl leading-[30px] xs:text-start text-center">
                    I am a passionate Full Stack Developer dedicated to creating innovative solutions that address real-world problems. Through rigorous
                    training and self-learning in web development, I have mastered programming languages and frameworks such as React.js, JavaScript, HTML,
                    CSS, Tailwind, Bootstrap, and Laravel.
                    Additionally, I have extensive experience with MongoDB and MySQL for database design and management. My expertise encompasses the
                    full spectrum of website creation, from frontend design to backend development, enabling me to deliver comprehensive and robust web
                    applications
                </p>
                <Tilt
                    className="xs:px-0 px-3 sm:pt-0 pt-4 flex flex-col justify-center items-center rounded-xl w-[300px] transform-style-preserve-3d"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.10}
                    scale={1.05}
                >
                    <img src={developerBackground} className=" rounded-xl" alt="" />
                  
                </Tilt>
            </motion.div>
            <div className="mt-20 flex justify-center flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} service={service} index={index} />
                ))}
            </div>
        </div>
    )
}


export default SectionWrapper(About, "about")