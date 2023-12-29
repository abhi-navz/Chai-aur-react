import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "todo msg" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // holds properties and functions
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, updatedText } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      );
    },
  },
});

// exporting individual functionalities.

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// exporting the list of reducers of todoSlice.
export default todoSlice.reducer;
