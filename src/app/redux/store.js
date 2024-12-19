import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice.js';
import todoReducer from './todoSlice.js';

//single slice 
// const store = configureStore({
//     reducer 
// })

//multipleSlice
const store = configureStore({
    reducer :{
        todosReducer : todoReducer,
        usersReducer : userReducer
    }
})
export default store ;