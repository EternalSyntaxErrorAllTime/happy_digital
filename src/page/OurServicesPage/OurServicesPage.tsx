import type { FC } from "react";

import "./OurServicesPage.scss";

import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import { v4 } from "uuid";
import { memo } from 'react';
import { Link } from "react-router-dom";

import ValueForInfo from "./infoValues.json";
import { containerOl, itemLi, itemLiSvg, itemLiText } from "./variants.FM";

import { OurServicesBackground } from "../../component/OurServicesBackground";


const MotionLink = motion.create(Link);

/**
 * Функция создает элементы для информации в центре экрана
 */
function gerenateLiElement(bubleSVG: string, text: string): JSX.Element {
  return (
    <motion.li
      key={v4()}
      variants={itemLi}
      className="ElementLi"
    >
      <motion.div variants={itemLiSvg}>
        <ReactSVG src={bubleSVG} className="buble" />
      </motion.div>

      <motion.div variants={itemLiText}>
        <p>{text}</p>
      </motion.div>

    </motion.li>
  );
}

const OurServicesPage: FC = () => {
  return (
    <div className="OurServicesPage">
      <motion.header
        initial={{ clipPath: "inset(0% 100% 0% 0%)", scale: 0.8 }}
        animate={{ clipPath: "inset(-50% -50% -50% -50%)", scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 10, ease: "easeInOut", delay: 0.8 }}
        className="title">
        <ReactSVG src="./icons/buble-5.svg" />
        <motion.p
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}>
          Мы предлагаем<br />широкий спектр услуг
        </motion.p>
      </motion.header>

      <motion.ol
        variants={containerOl}
        initial="hidden"
        animate="visible"
        className="Info">
        {ValueForInfo.map((currElement) => gerenateLiElement(currElement.img, currElement.text))}
      </motion.ol>

      <MotionLink to="https://vk.com"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 5.6 }}
        className="DetailedInformation"
      >
        <p>Подробная информация<br />у нас в группе в вк:</p>
        <ReactSVG src="./icons/VK.svg" />
      </MotionLink>

      <OurServicesBackground />
    </div>
  );
}


export default memo(OurServicesPage);