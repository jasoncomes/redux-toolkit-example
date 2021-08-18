import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Slice } from '@reduxjs/toolkit';

import type { AppState } from 'store';

// type(s)
export interface Modal {
  active: boolean;
  closeButton: string;
  confirmButton: string;
  message: string;
  title: string;
  type: 'alert' | 'confirm' | 'prompt';
}

/**
 *  Creates the Redux Toolkit slice for the modal store
 *
 *  @constant {Slice}
 */
const slice: Slice = createSlice({
  name: 'modal',
  initialState: {
    active: true,
    closeButton: 'Close',
    confirmButton: 'Update',
    message: '',
    title: '',
  } as Modal,
  reducers: {
    deactivateModal: (state) => {
      state.active = false;
    },
    activateModal: (state) => {
      state.active = true;
    },
    updateModal: (state, action: PayloadAction<Modal>) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },
  },
});
export default slice;

// actions
export const { deactivateModal, activateModal, updateModal } = slice.actions;

// selectors
export const selectActive = (state: AppState) => state.modal.active;
export const selectCloseButton = (state: AppState) => state.modal.closeButton;
export const selectConfirmButton = (state: AppState) =>
  state.modal.confirmButton;
export const selectMessage = (state: AppState) => state.modal.message;
export const selectTitle = (state: AppState) => state.modal.title;
export const selectType = (state: AppState) => state.modal.type;
