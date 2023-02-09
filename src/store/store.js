import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './apis/todosApi';
import { counterSlice } from './slices/counter/counterSlice';
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer,
    pokemonStore: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
});
