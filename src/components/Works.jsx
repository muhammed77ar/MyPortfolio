import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const Works = () => {
  const { t } = useTranslation(); // Add translation hook

  return (
    <>
      <motion.div variants={fadeIn("right", "", 0.2, 1)}>
        <p className={`${styles.sectionSubText} xs:text-start text-center`}>
          {t('works.subtitle')}
        </p>
        <h2 className={`${styles.sectionHeadText} xs:text-start text-center`}>
          {t('works.title')}
        </h2>
      </motion.div>
      
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t('works.description')}
        </motion.p>
      </div>

      <div className="mt-20">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
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
            768: {
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 40,
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
              className="w-[300px] h-auto flex justify-center items-center overflow-hidden my-3 sm:mx-0"
            >
              <ProjectCard project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");