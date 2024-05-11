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
    updateTodo:(state, action)=>{
        const { id, newText } = action.payload;
        // console.log(newText)
        const newTodo = state.todo.map(item=>{
            if(item.id===id){
                return {...item,text:newText}
            }
        })
        console.log(newTodo)
        state.todo = newTodo
    }
  },
});

export const { addTodo,deleteTodo,updateTodo } = slice.actions;

export default slice.reducer;
