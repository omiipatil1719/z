import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.todos.unshift({
                id: Math.floor(Math.random()*1100),
                title: action.payload,
            });
        },
        deleteItem: (state, action) => {
            const deleteitem = state.todos.filter((item) => item.id !== action.payload);
            state.todos = deleteitem;
        },

        editItem: (state, action) => {
            var todos = [...state.todos]
            const findIndex = todos.findIndex((item) => item.id == action.payload.id)
            if (findIndex > -1) {
                console.log('todos[findIndex]', todos[findIndex], action.payload)
                state.todos[findIndex] = action.payload
            }
        }
    }
});


export const { add, deleteItem, editItem } = todoSlice.actions;

export const selector = state => state.todo.todos;
