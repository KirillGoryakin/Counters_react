import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Counter } from 'types';

export interface CountersState {
  counters: Counter[];
}

const initialState: CountersState = {
  counters: [],
};

const coutersSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    addCounter(state) {
      const newCounter: Counter = {
        id: Date.now().toString(),
        title: `New counter ${state.counters.length + 1}`,
        count: 0,
      };
      state.counters.push(newCounter);
    },
    deleteCounter(state, action: PayloadAction<string>) {
      state.counters = state.counters.filter(({ id }) => id !== action.payload);
    },
    deleteLastCounter(state) {
      state.counters = state.counters.slice(0, -1);
    },
    incrementCounter(
      state,
      action: PayloadAction<{ id: string; value: number}>
    ) {
      const counter = state.counters.find(({ id }) => id === action.payload.id);
      if (counter) counter.count += action.payload.value;
    },
    renameCounter(state, action: PayloadAction<{ id: string; title: string }>) {
      const counter = state.counters.find(({ id }) => id === action.payload.id);
      if (counter) counter.title = action.payload.title;
    },
  },
});

export const {
  addCounter,
  deleteCounter,
  deleteLastCounter,
  incrementCounter,
  renameCounter,
} = coutersSlice.actions;

export default coutersSlice.reducer;