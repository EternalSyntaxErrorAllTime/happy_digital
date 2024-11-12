import type { FC } from "react";

import "./IndexPage.scss";

import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

import { IndexBacground } from "../../component/IndexBackground";


const IndexPage: FC = () => {
  return (
    <div className="IndexPage">

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        className="MainHeader">
        <h1 className="title">Happy</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          className="typeCompany">
          Digital-agency
        </motion.p>
      </motion.header>

      <motion.div className="Schedule"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      >
        <ReactSVG src="./icons/buble-1.svg" className="icon-buble" />
        <div className="text">
          <p>Ваш надежный партнер</p>
          <p>в сфере</p>
          <p>интернет-продвижения</p>
        </div>
      </motion.div>

      <motion.div className="Order"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      >
        <ReactSVG src="./icons/buble-2.svg" className="icon-buble" />
        <div className="text">
          <p>Оформить</p>
          <p>заказ</p>
        </div>
      </motion.div>

      <IndexBacground />

    </div>
  );
}


export default IndexPage;