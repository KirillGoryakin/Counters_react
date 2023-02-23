import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Counter } from 'types';

interface CountersState {
  counters: Counter[];
}

const initialState: CountersState = {
  counters: [
    {id: '0', title: 'Test', count: 0},
    {id: '1', title: 'Test 2', count: 0},
    {id: '2', title: 'Test another', count: 0},
    {id: '3', title: 'Test 12452315d', count: 0},
    {id: '4', title: 'OUIg grh het', count: 0},
    {id: '5', title: 'Lorem ipsum', count: 0},
    {id: '6', title: 'Test g353', count: 0},
  ],
};

const coutersSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    addCounter(state, action: PayloadAction<string>) {
      const newCounter: Counter = {
        id: Date.now().toString(),
        title: action.payload,
        count: 0,
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