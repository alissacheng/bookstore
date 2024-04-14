import { createSlice } from '@reduxjs/toolkit';
import initialBooks from '../../data/initialBooks';
import sortByName from '../../utils/sortByName'

const initialState = {
  items: sortByName(initialBooks)
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = sortByName([...state.items, action.payload]);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    updateItem: (state, action) => {
      const { id, ...updatedItem } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...updatedItem };
      }
    },
  },
});

export const { addItem, removeItem, updateItem } = booksSlice.actions;
export default booksSlice.reducer;