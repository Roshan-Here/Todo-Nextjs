const { configureStore } = require("@reduxjs/toolkit");
import TodoReduser from './slice'

export const store = configureStore({
  reducer: TodoReduser,
});
