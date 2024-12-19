import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    todos : []
}
const slice = createSlice({
    name : "todoSlice",
    initialState,
    reducers:{
        addTodos :(state,actions)=>{
            console.log('todos in')
        }
    }
})

export const {addTodos} = slice.actions
export default slice.reducer