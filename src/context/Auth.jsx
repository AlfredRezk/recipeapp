import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const { createContext, useState, useContext } = require("react");

const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    const [isAuth, setIsAuth ] = useLocalStorage('Auth' , false)
    console.log(isAuth, setIsAuth)
    const login = ()=>{
        setIsAuth(true)
        toast.success('Successfully logged In !')
    }

    const logout = ()=>{
        setIsAuth(false)
        toast.success('Successfully logged Out !')
    }

    return (
        <AuthContext.Provider value={{isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = ()=>{
    const data = useContext(AuthContext)
    return data;
}