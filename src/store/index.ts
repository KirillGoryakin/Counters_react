import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countersSlice from './countersSlice';

const rootReducer = combineReducers({
  counters: countersSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;