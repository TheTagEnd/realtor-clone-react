import { useState } from "react";
import  Spinner from "./Spinner"
import { Navigate, Outlet } from "react-router-dom";
import {useAuthStatus}  from "../hooks/useAuthStatus";
export default function PrivateRoute() {
     const {loggedIn , checkingStatus } =useAuthStatus()
         if(checkingStatus ){
            return  <Spinner ></Spinner>
         }     
    return   loggedIn ? <Outlet /> : <Navigate to  = "/sign_in"/>
  
}
