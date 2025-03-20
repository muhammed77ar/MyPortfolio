import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { useTranslation } from 'react-i18next';

const ContactMe = () => {
  const [Form, setForm] = useState({});
  const [loading, setloading] = useState(false);
  const formRef = useRef();
  const { t } = useTranslation(); // Add translation hook

  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...Form, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs
      .send(
        "service_2rtec2n",
        "template_h3nw9s8",
        {
          from_name: Form.name,
          to_name: "Mohamed",
          from_email: Form.email,
          to_email: "mohamedbchir70@gmail.com",
          message: Form.message,
          reply_to: Form.email,
        },
        "DIYx7B0ZgIgsqvP4b"
      )
      .then(() => {
        setloading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: t('contact.successTitle'),
          text: t('contact.successText'),
          showConfirmButton: false,
          timer: 2000,
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setloading(false);
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: t('contact.errorTitle'),
          text: t('contact.errorText'),
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div className="xl:mt-12 flex justify-center overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="sm:w-[60%] w-full bg-[url('/src/assets/abstract-metalic-blue-and-pink-waves-on-black-background-4.png')] bg-cover p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>{t('contact.subtitle')}</p>
        <h3 className={`${styles.sectionHeadText}`}>{t('contact.title')}</h3>
        <form ref={formRef} onSubmit={handelSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.nameLabel')}</span>
            <input
              type="text"
              name="name"
              value={Form.name || ''} // Ensure value is always defined
              onChange={handelChange}
              placeholder={t('contact.namePlaceholder')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.emailLabel')}</span>
            <input
              type="email"
              name="email"
              value={Form.email || ''} // Ensure value is always defined
              onChange={handelChange}
              placeholder={t('contact.emailPlaceholder')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.messageLabel')}</span>
            <textarea
              rows="7"
              name="message"
              value={Form.message || ''} // Ensure value is always defined
              onChange={handelChange}
              placeholder={t('contact.messagePlaceholder')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <div className="relative inline-flex group w-full">
            <div className="absolute transitiona-all duration-1000 opacity-60 -inset-px bg-gradient-to-r from-[#6459ff] via-[#9900ff] to-[#cc67ff] rounded-xl blur-lg group-hover:opacity-80 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              type="submit"
              className="relative inline-flex items-center justify-center w-full px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              {loading ? t('contact.sending') : t('contact.sendButton')}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactMe, "contact");