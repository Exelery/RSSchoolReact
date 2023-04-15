import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    changeSearchValue(state, action: PayloadAction<{ value: string }>) {
      state.value = action.payload.value;
    },
  },
});

export const { changeSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
