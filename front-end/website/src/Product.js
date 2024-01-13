import React from "react";
import { Navigate, Outlet } from "react-router";

const Products=()=>{
    const auth= localStorage.getItem('users')
    return auth ? <Outlet/>:<Navigate to={"/"}/>
} 
export default Products