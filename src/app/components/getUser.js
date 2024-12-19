"use client"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {removeuser} from "../redux/slice";
export default function AddUser(){
    const userData = useSelector((data)=>data.usersReducer.users) ;
    const dispatch = useDispatch();
    // console.log(userData)
    return (
        <>
            <br/> <br/>
            <h1>User List:</h1>
            {userData.map((item)=>{
                return(
                    <div key={item.id}>
                        <p >{item.name}</p>
                        <p onClick={()=>dispatch(removeuser(item.id))}>remove</p>
                    </div>
                );
            })}
        </>
    );
}