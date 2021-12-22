import { createAction, createReducer, AnyAction, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState = { value: 0 } as CounterState;

// const increment = createAction('counter/increment');
// const decrement = createAction('counter/decrement');
const incrementByAmount = createAction<number>('counter/incrementByAmount');
const decrementByAmount = createAction<number>('counter/decrementByAmount');

const isActionWithNumberPayload = (
  action: AnyAction
): action is PayloadAction<number> => {
  return typeof action.payload === 'number'
}

const counterReducer = createReducer(initialState, (builder) => {
  // builder.addCase (actionCreatorOrType, reducer)
  // builder.addMathcer
  // builder.addDefaultCase
  builder
    // .addCase(increment, (state, action) => {
    //   state.value++
    // })
    // .addCase(decrement, (state, action) => {
    //   state.value--
    // })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
    .addCase(decrementByAmount, (state, action) => {
      state.value -= action.payload
    })
    .addMatcher(isActionWithNumberPayload, (state, action) => { })
    .addDefaultCase((state, action) => { })
})