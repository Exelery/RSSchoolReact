import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import searchReducer from './searchSlice';
import { charApi } from './rtkApi';
const reducer = combineReducers({
    form: formReducer,
    search: searchReducer,
    [charApi.reducerPath]: charApi.reducer,
});
export function setupStore(preloadedState) {
    return configureStore({
        reducer,
        preloadedState,
        middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(charApi.middleware),
    });
}
const store = setupStore();
export default store;
