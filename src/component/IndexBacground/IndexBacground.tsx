import type { FC } from "react";

import "./IndexBacground.scss";

import { motion } from "framer-motion";


const IndexBacground: FC = () => {
  return (
    <div className="IndexBacground">
      <div className="TopLine">

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="Rectangle-1">
        </motion.div>

        <div className="spacer"></div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="Rectangle-2">
        </motion.div>

        <div className="spacer"></div>


        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="RoundedRectangle-3">
        </motion.div>

        <div className="spacer"></div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="Rectangle-4">
        </motion.div>

        <div className="spacer"></div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="RoundedRectangle-5">
        </motion.div>

      </div>

      <div className="BottomLine">
        <motion.div
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="Сircle-1">
          <motion.div
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="Сircle-2">
          </motion.div>
        </motion.div>

        <div className="spacer"></div>

        <div className="RightElemtn">
          <motion.div
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="Сircle-3">
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
            className="Rectangle-1">
          </motion.div>

          <motion.div
            initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1 }}
            className="Rectangle-2">
          </motion.div>

        </div>
      </div>

    </div>
  );
}

export default IndexBacground;