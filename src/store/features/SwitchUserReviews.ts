import { createSlice } from "@reduxjs/toolkit"


export const SwitchUserReviews = createSlice({
    name: "SwitchUserReviews",
    initialState: {
        value: 0,
        maxValue: 7,
    },
    reducers: {
        increment(state) {
            if (state.value + 1 > state.maxValue) {
                state.value = 0;
            }
            else {
                state.value++;
            }
          },
          decrement(state) {
            if (state.value - 1 < 0) {
                state.value = state.maxValue;
            }
            else {
                state.value--;
            }
          },
    }
});


export const { increment, decrement } = SwitchUserReviews.actions;

export default SwitchUserReviews.reducer;