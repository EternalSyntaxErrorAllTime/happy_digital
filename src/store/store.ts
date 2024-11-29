import { configureStore } from "@reduxjs/toolkit";

import SwitchTopicReducer  from "./features/SwitchTopic";
import SwitchUserReviewsReducer from  "./features/SwitchUserReviews";


const store = configureStore({
  reducer: {
    switchTopic: SwitchTopicReducer,
    SwitchUserReviews: SwitchUserReviewsReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>;
export default store;