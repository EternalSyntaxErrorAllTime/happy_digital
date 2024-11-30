import type { FC } from "react";

import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";

import {
  initial,
  animate,
  transitionBase,
  transitionMedium,
  transitionSlow,
  transitionMegaSlow,
} from "./variables.FS";

import "./CurvedLine.scss";

const CurvedLine: FC = () => {
  return (
    <div className="CurvedLine">
      <motion.div
        initial={initial}
        animate={animate}
        transition={transitionBase}
      >
        <ReactSVG src="/icons/curved-line.svg" />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transitionMedium}
      >
        <ReactSVG src="/icons/curved-line.svg" />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transitionSlow}
      >
        <ReactSVG src="/icons/curved-line.svg" />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transitionMegaSlow}
      >
        <ReactSVG src="/icons/curved-line.svg" />
      </motion.div>
    </div>
  );
};

export default CurvedLine;
