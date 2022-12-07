import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addModal: false,
};

const modalSlice = createSlice({
  name: "Modals",
  initialState,
  reducers: {
    showAddModal(state, { payload }) {
      state.addModal = !state.addModal;
    },
  },
});

export const { showAddModal } = modalSlice.actions;
export default modalSlice.reducer;
