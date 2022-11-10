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
                id: new Date().toISOString(),
                title: action.payload,
            });
        },
        deleteItem: (state, action)=>{
            const deleteitem=state.todos.filter((item)=> item.id !== action.payload);
            state.todos = deleteitem;
        },

        editItem:(state,action)=>{
            const items = state.todos.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        title: action.payload.title
                    };
                }
                else { return item; }
            });
            state.todos = items;
        }
    }
});

export const { add, deleteItem, editItem} = todoSlice.actions;

export const selector = state => state.todo.todos;
