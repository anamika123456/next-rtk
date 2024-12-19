import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState = {
    users : JSON.parse(localStorage.getItem("users")) || []
}
const slice = createSlice({
    name : 'userSlice',
    initialState : initialState,
    reducers : {
        adduser:(state, actions)=>{
            let data ={
                "id" : nanoid(),
                "name" : actions.payload
            }
            state.users.push(data)
            let jsonData = JSON.stringify(state.users)
            localStorage.setItem("users",jsonData)
            // console.log(state, 'add user call', actions.payload)
        },
        removeuser:(state, actions)=>{
            console.log('state user call', state)
            console.log('get user call', state.users)
            let data = state.users.filter((item)=>{
                return (item.id !== actions.payload)
            })
            // console.log('state user data', data)
            state.users= data
            let jsonData = JSON.stringify(state.users)
            localStorage.setItem("users",jsonData)
        }
    }
})


export  const {adduser, removeuser} = slice.actions ;
export default slice.reducer ;