import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from "./features/books/booksSlice"
import formReducer from "./features/form/formSlice"

const rootReducer = combineReducers({
  books: booksReducer,
  form: formReducer
})

const store = configureStore({
  reducer: rootReducer,
});

export default store;