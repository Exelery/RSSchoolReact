import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import searchReducer from './searchSlice';
import { charApi } from './rtkApi';

const store = configureStore({
  reducer: {
    form: formReducer,
    search: searchReducer,
    [charApi.reducerPath]: charApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(charApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
