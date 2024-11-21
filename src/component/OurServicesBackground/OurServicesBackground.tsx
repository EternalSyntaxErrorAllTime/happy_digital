import type { FC } from "react";

import "./OurServicesBackground.scss";

import { motion } from "framer-motion";


const OurServicesBackground: FC = () => {
  return (
    <div className="OurServicesBackground">


      <div className="TopLine">
        <div className="LeftTop">
          <motion.div
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            className="Сircle-1">
          </motion.div>
          <motion.div
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="Сircle-2">
          </motion.div>
          <motion.div
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="Сircle-3">
          </motion.div>
        </div>

        <div className="spacer"></div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="Rectangle-1">
        </motion.div>

        <div className="spacer"></div>

        <motion.div
          initial={{ y: -200 }}
          animate={{ y: -70 }}
          transition={{
            type: "spring",
            duration: 1.8,
            bounce: 0.7,
          }}
          className="RoundedRectangle-1">
        </motion.div>

        <div className="spacer"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ y: -200 }}
            animate={{ y: -70 }}
            transition={{
              type: "spring",
              duration: 1.8,
              bounce: 0.7,
            }}
            className="RoundedRectangle-2">
          </motion.div>
        </motion.div>
      </div>


      <div className="BottomLine">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="RoundedRectangle-3">
          <motion.div
            initial={{ height: "30%" }}
            animate={{ height: "80%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="RoundedRectangle-4">
          </motion.div>
        </motion.div>

        <div className="spacer"></div>

        <div className="CenterBottom">
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 70 }}
            transition={{
              type: "spring",
              duration: 1.8,
              bounce: 0.7,
            }}
            className="RoundedRectangle-5">
          </motion.div>
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 70 }}
            transition={{
              type: "spring",
              duration: 1.8,
              bounce: 0.8,
            }}
            className="RoundedRectangle-6">
          </motion.div>
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 70 }}
            transition={{
              type: "spring",
              duration: 1.5,
              bounce: 0.6,
            }}
            className="RoundedRectangle-7">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="RoundedRectangle-8">
            </motion.div>
          </motion.div>
        </div>

        <div className="spacer"></div>

        <motion.div
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="Сircle-4">
        </motion.div>

      </div>

    </div>
  );
}


export default OurServicesBackground;