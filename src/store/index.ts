import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import type { EnhancedStore } from '@reduxjs/toolkit';

import modalSlice from '../store/slices/modal';

/**
 *  Creates the Redux Toolkit store for state management
 *
 *  @constant {EnhancedStore}
 */

export const store: EnhancedStore = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  },
});

// setup listeners, optional but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

// `AppState`, `AppDispatch`, and `AppThunk` types
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
