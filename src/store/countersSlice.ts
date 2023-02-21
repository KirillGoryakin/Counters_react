import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Counter } from 'types';

interface CountersState {
  counters: Counter[];
}

const initialState: CountersState = {
  counters: [],
};

const coutersSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    addCounter(state, action: PayloadAction<{title: string; order: number}>) {
      const newCounter: Counter = {
        id: Date.now().toString(),
        title: action.payload.title,
        count: 0,
        order: action.payload.order,
      };
      state.counters.push(newCounter);
    },
    deleteCounter(state, action: PayloadAction<string>) {
      state.counters = state.counters.filter(({ id }) => id !== action.payload);
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
  incrementCounter,
  renameCounter,
} = coutersSlice.actions;

export default coutersSlice.reducer;