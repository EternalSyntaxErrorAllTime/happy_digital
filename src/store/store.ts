import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './features/counterSlice'
import SwitchTopicReducer  from "./features/SwitchTopic";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    switchTopic: SwitchTopicReducer,
  },
})


export const ZXC = "zxc";;
export type RootState = ReturnType<typeof store.getState>;
export default store;