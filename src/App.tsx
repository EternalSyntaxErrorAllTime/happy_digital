import type { FC } from "react";
import { RootState } from "./store/store";

import "./App.scss";

import { Routes, Route, NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";

import { useSelector } from "react-redux";

import { SwitchTopic } from "./component/SwitchTopic";

import { IndexPage } from "./page/IndexPage";
import { PageAboutAgency } from "./page/PageAboutAgency";
import { OurServicesPage } from "./page/OurServicesPage";


const containerUl = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.2
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


const App: FC = () => {
  const topic = useSelector((state: RootState) => state.switchTopic.value)

  return (
    <div className={topic === "dark" ? "BlackStyle" : "WhiteStyle"}>
      <div className="App">

        <SwitchTopic />

        <motion.div className="SocialNetwork"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
        >
          <Link to=""><ReactSVG src="./icons/YouTube.svg" /></Link>
          <Link to=""><ReactSVG src="./icons/VK.svg" /></Link>
          <Link to=""><ReactSVG src="./icons/Telegram.svg" /></Link>
        </motion.div>

        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about_agency" element={<PageAboutAgency />} />
          <Route path="/our_services" element={<OurServicesPage />} />
        </Routes>

        <motion.nav className="WebsiteNavigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.ul
            className="text"
            variants={containerUl}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={itemLi}><NavLink to="/">Основное</NavLink></motion.li>
            <motion.li variants={itemLi}><NavLink to="/about_agency">Об агентстве</NavLink></motion.li>
            <motion.li variants={itemLi}><NavLink to="/our_services">Наши услуги</NavLink></motion.li>
            <motion.li variants={itemLi}><NavLink to="/z">Отзывы</NavLink></motion.li>
          </motion.ul>
          <ReactSVG src="./icons/buble-3.svg" />
        </motion.nav>

      </div>
    </div>

  );
}


export default App;