"use client"
import { useDispatch } from "react-redux";
import {adduser} from "../redux/slice";
import { useState } from "react";
export default function AddUser(){
    const dispatch = useDispatch();
    const [name,setName] = useState();
    const addUserFunc=()=>{
        dispatch(adduser(name))
    }
    return (
        <>
            <br/> <br/>
            <h1>Add User:</h1>
            <input type="text" placeholder="enter name" value={name || ''}  onChange={(e)=> setName(e.target.value)}/>
            <button type="button" onClick={addUserFunc}>Submit</button>
        </>
    );
}