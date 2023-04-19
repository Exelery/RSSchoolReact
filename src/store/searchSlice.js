import { createSlice } from '@reduxjs/toolkit';
const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: '',
    },
    reducers: {
        changeSearchValue(state, action) {
            state.value = action.payload.value;
        },
    },
});
export const { changeSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
