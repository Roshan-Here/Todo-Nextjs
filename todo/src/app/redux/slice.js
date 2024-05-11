import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const slice = createSlice({
  name: "addTodoSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      const data = {
        id: nanoid(),
        title: action.payload.title,
        text: action.payload.text,
      };
      return {
        ...state,
        todo: [...state.todo, data],
      };
    },
    deleteTodo: (state, action) => {
      console.log(action);
      const updateTododata = state.todo.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        todo: updateTododata,
      };
    },
  },
});

export const { addTodo,deleteTodo } = slice.actions;

export default slice.reducer;
