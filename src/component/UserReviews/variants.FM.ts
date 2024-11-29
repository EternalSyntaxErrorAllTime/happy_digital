export const containerStar = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export const itemLiStar = {
  hidden: {
    opacity: 0,
    scale: 3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

export const itemLiStarFive = {
  hidden: {
    opacity: 0,
    scale: 5,
    rotate: 180,
    filter: "drop-shadow(0px 0px 20px #ffd700)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "drop-shadow(2px 5px 5px rgba(0, 0, 0, 0))",
    transition: {
      staggerChildren: 0.1,
      type: "spring",
      duration: 2,
      bounce: 0.5,
      filter: { duration: 10, ease: "easeInOut" },
    },
  },
};
