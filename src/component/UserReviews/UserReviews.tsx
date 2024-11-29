import type { FC } from "react";
import type { PropsUserReviews } from "./type";

import "./UserReviews.scss";

import { v4 } from "uuid";
import { ReactSVG } from "react-svg";
import { useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { containerStar, itemLiStar, itemLiStarFive } from "./variants.FM";

const UserReviews: FC<PropsUserReviews> = ({
  avatarWay,
  name,
  countStar,
  comments,
}) => {
  const generationStar = useMemo(() => {
    const listStar: JSX.Element[] = [];
    let whichVariant = itemLiStar;
    for (let index = 0; index < countStar; index++) {
      if (index === 4) {
        whichVariant = itemLiStarFive;
      }
      listStar.push(
        <motion.li className="star" key={v4()} variants={whichVariant}>
          <ReactSVG src="/icons/star.svg" />
        </motion.li>
      );
    }
    return listStar;
  }, [countStar]);

  return (
    <div className="UserReviews">
      <motion.div
        initial={{ x: 600, rotate: 360, opacity: 0 }}
        animate={{ x: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
        className="avatar"
      >
        <div className="shadow">
          <AnimatePresence mode="wait">
            <motion.img
              key={v4()}
              initial={{ opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{
                opacity: 1,
                clipPath: "inset(-50% -50% -50% -50%)",
                transition: { duration: 1.3, ease: "easeInOut" },
              }}
              exit={{
                clipPath: "inset(100% 0% 0% 0%)",
                transition: { duration: 0.8, ease: "easeIn" },
              }}
              src={avatarWay}
              alt="avatar-user"
            />
          </AnimatePresence>
        </div>
      </motion.div>
      <div className="info">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut", delay: 1.5 },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={v4()}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1, ease: "easeInOut", delay: 0.3 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: "easeIn" },
              }}
            >
              {name}
            </motion.p>
          </AnimatePresence>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.ol
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerStar}
            className="container-star"
            key={v4()}
          >
            {generationStar}
          </motion.ol>
        </AnimatePresence>
      </div>
      <motion.div
        className="comments"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1.1, ease: "easeInOut", delay: 1.6 },
        }}
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={v4()}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, ease: "easeInOut", delay: 0.3 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeIn" },
            }}
          >
            {comments}
          </motion.p>
        </AnimatePresence>
      </motion.div>
      <motion.div
        initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
        animate={{ clipPath: "inset(-50% -50% -50% -50%)" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="line"
      />
    </div>
  );
};

export default memo(UserReviews);
