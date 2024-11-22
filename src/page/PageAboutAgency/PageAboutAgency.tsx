import type { FC } from "react";

import "./PageAboutAgency.scss";

import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import { memo } from 'react';
import { v4 } from "uuid";

import { AboutAgencyBackground } from "../../component/AboutAgencyBackground";

import ValueForInfo from "./infoValues.json";
import { containerUl, itemLi } from "./variants.FM";


/**
 * Функция создает элементы для информации в центре экрана
 */
function gerenateLiElement(text: string): JSX.Element {
  return (
    <motion.li
      variants={itemLi}
      key={v4()}
    >
      {text}
    </motion.li>
  );
}

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
            animate="visible"
          >
            {ValueForInfo.map((currElement) => gerenateLiElement(currElement))}
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


export default memo(PageAboutAgency);