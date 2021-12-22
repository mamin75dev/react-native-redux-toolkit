import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { AppDispatch, RootState } from '../store'

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  data: Array<Todo>
}

const initialState: TodoState = {
  data: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.data.push(action.payload)
    },
    getTodos: (state, action: PayloadAction<Array<Todo>>) => {
      state.data = action.payload
    }
  }
})


const getTodosAsync = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch(getTodos(data))
  } catch (error) {
    throw new Error(`error occured! => ${error}`);
  }
}
const addTodosAsync = (todo: Todo) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/todos', todo);
    dispatch(addTodo(data))
  } catch (error) {
    throw new Error(`error occured! => ${error}`);
  }
}

const { addTodo, getTodos } = todoSlice.actions;
const showTodo = (state: RootState) => state.todos.data

export { Todo, TodoState, addTodo, getTodos, showTodo, getTodosAsync, addTodosAsync };
export default todoSlice.reducer;