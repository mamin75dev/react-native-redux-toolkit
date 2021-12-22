import { createReducer } from "@reduxjs/toolkit";
import { addTodo, getTodos } from "../actions/todoActions";
import { TodoState } from "./todoSlice";

const initialState = { data: [] } as TodoState

const todosRedcuer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => { state.data.push(action.payload) })
    .addCase(getTodos, (state, action) => { state.data = action.payload })
})