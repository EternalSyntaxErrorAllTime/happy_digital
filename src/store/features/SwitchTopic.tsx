import { createSlice } from "@reduxjs/toolkit"


export const SwitchTopic = createSlice({
    name: "SwitchTopic",
    initialState: {
        value: "white",
    },
    reducers: {
        editTopic: (state) => {
            if (state.value === "white") {
                state.value = "dark";
            }
            else {
                state.value = "white";
            }
        },
    }
});


export const { editTopic } = SwitchTopic.actions;

export default SwitchTopic.reducer;