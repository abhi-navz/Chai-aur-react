# Instlling redux toolkit and react redux
Run this command in terminal
```
npm install @reduxjs/toolkit
npm install react-redux
```
## creating Store
```
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({});
```
## creating reducer
### Todo Slice

```javascript
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "todo msg" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // holds properties and functions
    addTodo: (state, action)=> {},
    removeTodo: ()=> {},

  },
});

```
- reducers: holds the property and functions.
- addTodo, removeTodo , and other properties always give access to "state" and "action"
- "state" gives acces to the values of initial state.
- "action" holds values like id which will be required like in case of removeTodo.
- 
