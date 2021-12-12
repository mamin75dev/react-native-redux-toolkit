import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './reducers/counterSlice'
import todoSlice from './reducers/todoSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todoSlice
  }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export { RootState, AppDispatch }
export default store