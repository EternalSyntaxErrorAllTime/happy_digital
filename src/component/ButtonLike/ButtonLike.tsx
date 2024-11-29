import type { FC } from "react";

import "./ButtonLike.scss";

import { v4 } from "uuid";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import { AnimatePresence, motion } from "framer-motion";

function generatePlusOne() {
  return (
    <motion.span
      key={v4()}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: "-80px" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      +1
    </motion.span>
  );
}

const ButtonLike: FC = () => {
  const [visibleItem, setVisibleItem] = useState<JSX.Element[]>([]);

  function eventClickButton() {
    setVisibleItem((oldState) => [...oldState, generatePlusOne()]);
    setTimeout(
      () =>
        setVisibleItem((oldState) =>
          oldState.filter((v, index) => index !== 0)
        ),
      500
    );
  }

  return (
    <div className="ButtonLike">
      <div className="containerItem">
        <AnimatePresence>{visibleItem}</AnimatePresence>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ type: "spring", duration: 5, bounce: 0.6, delay: 2 }}
      >
        <motion.button
          whileHover={{ scale: 1.2, rotate: 20 }}
          whileTap={{ scale: 0.9, rotate: -10 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={eventClickButton}
        >
          <ReactSVG src="/icons/like.svg" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ButtonLike;
