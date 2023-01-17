import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ToDoItemFragment } from '../../components/ToDoItem.tsx/ToDoItem.generated'

interface ToDoState {
    todos: ToDoItemFragment[]
}

const initialState: ToDoState = {
    todos: []
}

const ToDoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setToDos(state, action) {
            state.todos = action.payload
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        addTodo(state, action) {
            state.todos.unshift(action.payload)
        }
    }
})

export const todoActions = ToDoSlice.actions
export const todoReducer = ToDoSlice.reducer