import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: []
};

const slice = createSlice({
    name: "addTodoSlice",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action)
            const data = {
                id: nanoid(),
                title: action.payload.title,
                text: action.payload.text
            };
            return {
                ...state,
                todo: [...state.todo, data]
            };
        }
    }
});

export const { addTodo } = slice.actions;

export default slice.reducer;
