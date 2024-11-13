import type { FC } from "react";

import { motion } from "framer-motion";

import "./AboutAgencyBackground.scss";


const AboutAgencyBackground: FC = () => {
  return (
    <div className="AboutAgencyBackground">

      <div className="TopLine">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="Rectangle-1">
        </motion.div>

        <div className="spacer"></div>

        <div className="ComboElement">

          <motion.div
            initial={{ y: -200 }}
            animate={{ y: -100 }}
            transition={{
              type: "spring",
              duration: 1.8,
              bounce: 0.8,
            }}
            className="RoundedRectangle-1">
          </motion.div>


          <motion.div
            initial={{ y: -200 }}
            animate={{ y: -50 }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0.6,
            }}
            className="RoundedRectangle-2">
          </motion.div>


          <motion.div
            initial={{ y: -200 }}
            animate={{ y: -70 }}
            transition={{
              type: "spring",
              duration: 1.2,
              bounce: 0.7,
            }}
            className="RoundedRectangle-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
              className="RoundedRectangle-4">
            </motion.div>
          </motion.div>
        </div>

        <div className="spacer"></div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="Rectangle-2">
        </motion.div>

      </div>


      <div className="BottomLine">
        <motion.div
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="Сircle-1">
          <motion.div
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="Сircle-2">
          </motion.div>
        </motion.div>

        <div className="spacer"></div>

        <div className="ItemRight">
          <motion.div
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="Сircle-3">
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="RoundedRectangle-5">
          </motion.div>
        </div>

      </div>

    </div>
  );
}

export default AboutAgencyBackground;