import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,signOut, updateProfile} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";
const AuthContext=React.createContext(); 

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [loading,setLoading]=useState(true);
    const [currentUser,setCurrentUser]=useState();

    useEffect(() => {
        const auth=getAuth();

        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        };
    }, []);
 
    // Signup Function
    async function Signup(email,password,username){
        const auth=getAuth();
        await createUserWithEmailAndPassword(auth,email,password);
        
        // update profile
        await updateProfile(auth.currentUser,{displayName:username});
        const user=auth.currentUser;

        setCurrentUser({
            ...user
        });
    }

    function Login(email,password){
        const auth=getAuth();
        return signInWithEmailAndPassword(auth,email,password);
    }

    function Logout(){
        const auth=getAuth();
        return signOut(auth);
    }

    const value={
        currentUser,
        Signup,
        Login,
        Logout
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}