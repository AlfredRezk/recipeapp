import React from 'react'
import { useAuth } from '../context/Auth'
import { toast } from 'react-toastify'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {

    const {isAuth} = useAuth()

    if(!isAuth) toast.error('Please login First');
    return isAuth? <Outlet/> : <Navigate to="/login"/> 
}
