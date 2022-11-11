import { configureStore } from '@reduxjs/toolkit'
import stakReducer from './todolist/stakSlice'

export const store = configureStore({
  reducer: {
    staks: stakReducer
  },
})