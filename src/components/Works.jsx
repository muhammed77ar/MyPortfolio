import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"
import { styles } from "../styles"
import { projects } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn } from "../utils/motion"
import ProjectCard from "./ProjectCard"

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'

const Works = () => {
  return (
    <>
      <motion.div variants={fadeIn("right", "", 0.2, 1)}>
        <p className={`${styles.sectionSubText} xs:text-start text-center`}>my work</p>
        <h2 className={`${styles.sectionHeadText} xs:text-start text-center`}>Some Of My Projects</h2>
      </motion.div>
      
      <div className="w-full flex">
        <motion.p variants={fadeIn("right", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Here are some standout projects that exemplify my skills and experience. Each project includes a concise description along with links to code repositories and live demos. These examples highlight my ability to tackle complex problems, seamlessly work with various technologies, and efficiently manage projects from start to finish.
        </motion.p>
      </div>

      <div className="mt-20">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} // Default to 1 slide (mobile)
          spaceBetween={30}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="w-full min-h-[500px] overflow-visible"
          breakpoints={{
            // When window width is >= 768px, show 3 slides
            768: {
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 40, // Rotate 40 degrees on larger screens
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: true,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide 
              key={index} 
              className="w-[300px] h-auto flex justify-center items-center overflow-hidden my-3 ml-2 sm:mx-0"
            >
              <ProjectCard project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")