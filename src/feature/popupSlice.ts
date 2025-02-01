// src/redux/popupSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  isPopupVisible: boolean;
}

const initialState: PopupState = {
  isPopupVisible: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    togglePopup: (state) => {
      state.isPopupVisible = !state.isPopupVisible;
    }
  },
});

export const { togglePopup } = popupSlice.actions;

export default popupSlice.reducer;
