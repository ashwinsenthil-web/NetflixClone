// src/app/store.jsx
import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../feature/UserSlice.jsx"

export const store = configureStore({
  reducer: { user: userReducer },
})
