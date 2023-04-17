import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from '../utils/types';

const items: IItem[] = [];

const formSlice = createSlice({
  name: 'form',
  initialState: {
    items,
  },
  reducers: {
    addItem(state, action: PayloadAction<IItem>) {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = formSlice.actions;
export default formSlice.reducer;