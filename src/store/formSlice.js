import { createSlice } from '@reduxjs/toolkit';
const items = [];
const formSlice = createSlice({
    name: 'form',
    initialState: {
        items,
    },
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
        },
    },
});
export const { addItem } = formSlice.actions;
export default formSlice.reducer;
