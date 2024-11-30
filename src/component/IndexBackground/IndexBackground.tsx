import type { FC } from "react";

import "./IndexBackground.scss";

import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

import { CurvedLine } from "../CurvedLine";

const IndexBacground: FC = () => {
  return (
    <div className="IndexBacground">
      <div className="TopLine">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="Rectangle-1"
        ></motion.div>

        <div className="spacer"></div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="Rectangle-2"
        >
          <div className="containerForCross">
            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotate: 180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                type: "spring",
                duration: 3,
                bounce: 0.6,
                delay: 1.8,
              }}
            >
              <ReactSVG src="/icons/cross.svg" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotate: 220 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                type: "spring",
                duration: 3,
                bounce: 0.6,
                delay: 2,
              }}
            >
              <ReactSVG src="/icons/cross.svg" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotate: 240 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                type: "spring",
                duration: 3,
                bounce: 0.6,
                delay: 2.2,
              }}
            >
              <ReactSVG src="/icons/cross.svg" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2 }}
            className="MiniCircle-2"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2.2 }}
            className="MiniCircle-1"
          />
        </motion.div>

        <div className="spacer"></div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="RoundedRectangle-3"
        ></motion.div>

        <div className="spacer"></div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="Rectangle-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2.2 }}
            className="MiniCircle-3"
          />
        </motion.div>

        <div className="spacer"></div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="RoundedRectangle-5"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2.2 }}
            className="MiniCircle-4"
          />
        </motion.div>
      </div>

      <div className="BottomLine">
        <motion.div
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="Сircle-1"
        >
          <motion.div
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="Сircle-2"
          ></motion.div>
        </motion.div>

        <div className="spacer"></div>

        <div className="RightElemtn">
          <motion.div
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="Сircle-3"
          ></motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
            className="Rectangle-1"
          ></motion.div>

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1 }}
            className="Rectangle-2"
          ></motion.div>
        </div>

        <motion.div className="containerForCurvedLine">
          <CurvedLine />
        </motion.div>
      </div>
    </div>
  );
};

export default IndexBacground;
