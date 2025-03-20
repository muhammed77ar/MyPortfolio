import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useTranslation } from 'react-i18next';

export default function ExperienceCard({ experience }) {
  const { t } = useTranslation(); // Add translation hook

  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundImage: "radial-gradient(circle 382px at 50% 50.2%, #5b25da 0.1%, rgba(3,1,50,1) 100.2%)",
        color: "white"
      }}
      contentArrowStyle={{ borderRight: "7px solid white" }}
      date={experience.date} // Assuming date isn’t translated for now
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={t(`experience.${experience.id}.company`)}
            className="w-[70%] h-[70%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {t(`experience.${experience.id}.title`)}
        </h3>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((_, index) => (
          <li
            key={index}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {t(`experience.${experience.id}.points.${index}`)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}