import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    closeForm: (state) => {
      state.value = false;
    },
    editBook: (state, action) => {
      state.value = action.payload
    },
    addBook: (state) => {
      state.value = true;
    },
  },
});

export const { closeForm, editBook, addBook } = formSlice.actions;
export default formSlice.reducer;