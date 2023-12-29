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


###  The code  provided is a common structure for setting up a Redux store using Redux Toolkit, and it serves as a boilerplate for many Redux Toolkit applications
```javascript
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer:todoReducer
});
```
### useDispatch() is used to change value in store through the use of reducer.
```javascript
const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
```


### useSelector hook:

```javascript
const todos = useSelector((state) => state.todos);
```

- This hook is provided by react-redux and is used in functional components to select and extract values from the Redux store.
It takes a single argument, which is a selector function, and returns the selected value from the Redux store.
(state) => state.todos 

selector function:

- The argument state represents the entire Redux store state.
The selector function is used to extract a specific piece of state from the Redux store.
In this case, it is extracting the todos array from the Redux store state.

todos constant:

- The result of useSelector is stored in the todos constant. This constant now holds the value of the todos array from the Redux store.