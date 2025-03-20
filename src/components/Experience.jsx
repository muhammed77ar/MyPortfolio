import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import ExperienceCard from "./ExperienceCard";
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation(); // Add translation hook

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} xs:text-start text-center`}>
          {t('experienceTitle.subtitle')}
        </p>
        <h2 className={`${styles.sectionHeadText} xs:text-start text-center`}>
          {t('experienceTitle.title')}
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, key) => (
            <ExperienceCard key={key} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");