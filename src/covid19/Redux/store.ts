import { configureStore, ThunkAction, Action, AnyAction } from '@reduxjs/toolkit';
import covidReducer from 'covid19/features/covidSlice';
import { Reducer } from 'react';

// import covidReducer from "../features/covid/covidSlice";
const a = 'a' as unknown as Reducer<unknown, AnyAction>; // 仮で設定
export const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
