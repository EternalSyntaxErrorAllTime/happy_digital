import type { FC } from "react";

import "./ReviewsBackground.scss";

import { motion } from "framer-motion";

const ReviewsBackground: FC = () => {
  return (
    <div className="ReviewsBackground">
      <div className="TopLine">
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: -70 }}
          transition={{
            type: "spring",
            duration: 1.8,
            bounce: 0.7,
          }}
          className="RoundedRectangle-1"
        >
          <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.6 }}
            className="RoundedRectangle-2"
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ y: -200 }}
          animate={{ y: -70 }}
          transition={{
            type: "spring",
            duration: 2,
            bounce: 0.8,
          }}
          className="RoundedRectangle-3"
        ></motion.div>

        <motion.div
          initial={{ y: -200 }}
          animate={{ y: -70 }}
          transition={{
            type: "spring",
            duration: 1.3,
            bounce: 0.6,
          }}
          className="RoundedRectangle-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            className="RoundedRectangle-5"
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ y: -200 }}
          animate={{ y: -70 }}
          transition={{
            type: "spring",
            duration: 1.3,
            bounce: 0.8,
          }}
          className="RoundedRectangle-6"
        ></motion.div>

        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
          className="RoundedRectangle-7"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="Rectangle-8"
        >
          <motion.div
            initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
            animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="Circle-1"
          ></motion.div>
        </motion.div>
      </div>

      <div className="BottomLine">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
          className="RoundedRectangle-8"
        >
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ opacity: 1, clipPath: "inset(-50% -50% -50% -50%)" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 1.5 }}
            className="RoundedRectangle-9"
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
          animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="Circle-2"
        ></motion.div>
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="Circle-3"
        ></motion.div>
      </div>
    </div>
  );
};

export default ReviewsBackground;
