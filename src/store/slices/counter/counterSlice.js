import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'myCounterSlice',
  initialState: {
    counter: 10,
    times: 0
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state, action) => {
      console.log(action); // action is undefined
      state.counter -= 1;
    },
    incrementBy: (state, action) => {
      console.log(action);
      state.counter += action.payload;
    }
  }
});

export const { increment, decrement, incrementBy } = counterSlice.actions;
