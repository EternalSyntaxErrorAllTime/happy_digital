import type { FC } from "react";
import type { RootState } from "../../store/store";
import type { ReviewsData } from "./type";

import "./ReviewsPage.scss";

import infoValueReviews from "./infoValues.json";

import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/features/SwitchUserReviews";

import { ReviewsBackground } from "../../component/ReviewsBackground";
import { UserReviews } from "../../component/UserReviews";
import { ButtonLike } from "../../component/ButtonLike";
import { ReactSVG } from "react-svg";

const reviewsData: ReviewsData = infoValueReviews;

const ReviewsPage: FC = () => {
  const dispatch = useDispatch();

  const reviews = String(
    useSelector((state: RootState) => state.SwitchUserReviews.value)
  );

  return (
    <div className="ReviewsPage">
      <ReviewsBackground />
      <div className="ContainerUser">
        <UserReviews
          avatarWay={reviewsData[reviews].avatarWay}
          name={reviewsData[reviews].name}
          countStar={reviewsData[reviews].countStar}
          comments={reviewsData[reviews].comments}
        />
      </div>
      <div className="ContainerButtonControl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: -360 }}
          transition={{ type: "spring", duration: 5, bounce: 0.6, delay: 3.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => dispatch(decrement())}
          >
            <span>{"<"}</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: -360 }}
          transition={{ type: "spring", duration: 5, bounce: 0.6, delay: 3.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => dispatch(increment())}
          >
            <span>{">"}</span>
          </motion.button>
        </motion.div>
      </div>

      <div className="ContainerButtonLike">
        <ButtonLike />
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.6, delay: 1.5 }}
        className="star-1"
      >
        <ReactSVG src="/icons/star.svg" />
      </motion.div>
      <motion.div
        initial={{ rotate: 180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 2,
          ease: "easeInOut",
          bounce: 0.5,
          delay: 1.5,
        }}
        className="star-2"
      >
        <ReactSVG src="/icons/star.svg" />
      </motion.div>

      <motion.div
        initial={{ rotate: 1060, opacity: 0, x: 150 }}
        animate={{ rotate: 0, opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          duration: 3,
          bounce: 0.4,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="star-3"
      >
        <ReactSVG src="/icons/star.svg" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ scale: [0, 2, 1, 2, 1], opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut", delay: 1.8 }}
        className="heart-1"
      >
        <ReactSVG src="/icons/heart.svg" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ scale: [0, 1.5, 1, 1.8, 1], opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut", delay: 2.5 }}
        className="heart-2"
      >
        <ReactSVG src="/icons/heart.svg" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ scale: [0, 1.8, 1, 2.2, 1], opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut", delay: 2.3 }}
        className="heart-3"
      >
        <ReactSVG src="/icons/heart.svg" />
      </motion.div>
    </div>
  );
};

export default ReviewsPage;
