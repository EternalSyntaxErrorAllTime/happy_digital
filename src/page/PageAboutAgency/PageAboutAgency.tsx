import type { FC } from "react";

import "./PageAboutAgency.scss";

import { AboutAgencyBackground } from "../../component/AboutAgencyBackground";

import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";


const containerUl = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.3
    }
  }
};

const itemLi = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


const PageAboutAgency: FC = () => {
  return (
    <div className="PageAboutAgency">

      <motion.div
        initial={{ opacity: 0, clipPath: "inset(0% 100% 0% 0%)", scale: 0.8 }}
        animate={{ opacity: 1, clipPath: "inset(-50% -50% -50% -50%)", scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 5, ease: "easeInOut", delay: 0.8 }}
        className="InfoCompany">
        <div className="text">
          <h2>Happy</h2>
          <p>Агентство цифрового маркетинга, специализирующееся на быстром достижении высоких результатов.</p>
        </div>
        <ReactSVG src="./icons/buble-4.svg" />
      </motion.div>

      <div className="MainInfo">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
          className="Сorner-1">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </motion.div>

        <div className="text">
          <motion.ol
            variants={containerUl}
            initial="hidden"
            animate="visible">
            <motion.li variants={itemLi}>Инновации: мы всегда стремимся быть на шаг впереди, используя новейшие инструменты и подходы для достижения ваших целей.</motion.li>
            <motion.li variants={itemLi}>Качество: для нас важно, чтобы каждый проект был выполнен на высшем уровне, поэтому мы тщательно контролируем все процессы.</motion.li>
            <motion.li variants={itemLi}>Командная работа: взаимодействие внутри команды и с клиентами – основа нашего успеха. Мы ценим мнение каждого участника процесса.</motion.li>
            <motion.li variants={itemLi}>Результат: наша главная цель – достижение конкретных результатов, которые помогут вашему бизнесу расти и развиваться.</motion.li>
          </motion.ol>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
          className="Сorner-2">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </motion.div>
      </div>

      <AboutAgencyBackground />
    </div>
  );
}

export default PageAboutAgency;