export const initial = {
  clipPath: "inset(0% 100% 0% 0%)",
  filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
};

export const animate = {
  clipPath: "inset(-50% -50% -50% -50%)",
  filter: "drop-shadow(-2px -5px 5px rgba(0, 0, 0, 0.5))",
};

export const transitionBase = {
  duration: 2,
  ease: "easeInOut",
  delay: 1.6,
  filter: {
    delay: 1.8,
    duration: 2,
    ease: "easeInOut",
  },
};

export const transitionMedium = {
  ...transitionBase,
  delay: 1.8,
  filter: {
    ...transitionBase.filter,
    delay: 2,
  },
};

export const transitionSlow = {
  ...transitionBase,
  delay: 2,
  filter: {
    ...transitionBase.filter,
    delay: 2.2,
  },
};

export const transitionMegaSlow = {
    ...transitionBase,
    delay: 2.2,
    filter: {
      ...transitionBase.filter,
      delay: 2.4,
    },
  };
  