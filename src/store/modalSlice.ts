import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isSiteVisitOpen: boolean;
  selectedPlotTitle?: string;
}

const initialState: ModalState = {
  isSiteVisitOpen: false,
  selectedPlotTitle: undefined,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSiteVisitModal: (state, action: PayloadAction<string | undefined>) => {
      state.isSiteVisitOpen = true;
      state.selectedPlotTitle = action.payload;
    },
    closeSiteVisitModal: (state) => {
      state.isSiteVisitOpen = false;
      state.selectedPlotTitle = undefined;
    },
  },
});

export const { openSiteVisitModal, closeSiteVisitModal } = modalSlice.actions;
export default modalSlice.reducer;
