import { createAction, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "../reducers/todoSlice";
import { AppDispatch } from "../store";

const addTodo = createAction('todos/add', function prepare(title: string) {
  return {
    payload: {
      title,
      id: parseInt(nanoid()),
      userId: parseInt(nanoid()),
      completed: false,
    },
  }
})

const getTodos = createAction<Array<Todo>>('todos/getAll')

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
    dispatch(addTodo(todo.title))
  } catch (error) {
    throw new Error(`error occured! => ${error}`);
  }
}

export { addTodosAsync, getTodosAsync, addTodo, getTodos }