import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    }
  }
})
const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions
const selectCount = (state: RootState) => state.counter.value

export { counterSlice, increment, decrement, incrementByAmount, decrementByAmount, selectCount }
export default counterSlice.reducer


/**
 * If you are using Redux Toolkit's createSlice, you should rarely need to specifically type a reducer separately. 
 * If you do actually write a standalone reducer, it's typically sufficient to declare the type of the initialState value, 
 * and type the action as AnyAction
 */

//  import { AnyAction } from 'redux'

//  interface CounterState {
//    value: number
//  }
 
//  const initialState: CounterState = {
//    value: 0
//  }
 
//  export default function counterReducer(
//    state = initialState,
//    action: AnyAction
//  ) {
//    // logic here
//  }