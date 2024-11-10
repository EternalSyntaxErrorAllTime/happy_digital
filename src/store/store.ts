import { configureStore } from "@reduxjs/toolkit";

import SwitchTopicReducer  from "./features/SwitchTopic";

const store = configureStore({
  reducer: {
    switchTopic: SwitchTopicReducer,
  },
})


export const ZXC = "zxc";;
export type RootState = ReturnType<typeof store.getState>;
export default store;