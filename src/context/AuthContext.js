import { createUserWithEmailAndPassword, getAuth,TwitterAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,FacebookAuthProvider, signInWithPopup } from "firebase/auth";
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

    function facebookLoginHandler(){
        const provider = new FacebookAuthProvider();
        provider.addScope('user_birthday');
        provider.setCustomParameters({
            'display': 'popup'
        });

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                console.log("user: ", user);

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                console.log("error in facebook login");
            });
    }

    const TwitterLoginHandler = () => {
        const provider = new TwitterAuthProvider();
        provider.addScope('user_birthday');
        provider.setCustomParameters({
            'display': 'popup'
        });
        
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                console.log("user: ", user);

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                console.log("error in facebook login");
            });
    }

    function Logout(){
        const auth=getAuth();
        return signOut(auth);
    }


    const value={
        currentUser,
        Signup,
        Login,
        Logout,
        facebookLoginHandler,
        TwitterLoginHandler
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}