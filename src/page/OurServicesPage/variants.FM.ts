
export const containerOl = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 1.5,
            staggerChildren: 0.8,
        },
    },
};

export const itemLi = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.6,
        },
    },
};

export const itemLiSvg = {
    hidden: { x: 150, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

export const itemLiText = {
    hidden: { clipPath: "inset(-50% 100% -100% -50%)" },
    visible: {
        clipPath: "inset(-50% -100% -100% -50%)",
        transition: { duration: 1 },
    },
};
