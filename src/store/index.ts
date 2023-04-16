import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import searchReducer from './searchSlice';
import { charApi } from './rtkApi';
const reducer = combineReducers({
  form: formReducer,
  search: searchReducer,
  [charApi.reducerPath]: charApi.reducer,
});
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(charApi.middleware),
  });
}

const store = setupStore();
export default store;
export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;

// export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
