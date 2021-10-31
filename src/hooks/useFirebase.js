import { useEffect, useState } from 'react';
import firebaseInit from '../firebase/firebaseInit';
import {GoogleAuthProvider,signOut, getAuth,signInWithPopup,onAuthStateChanged } from 'firebase/auth';
firebaseInit()
const auth = getAuth()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    // google sign in method
    const googlSignIn=()=>{
       return  signInWithPopup(auth, googleProvider)
    }
    // on state change authentication response
    useEffect(()=>{
       onAuthStateChanged(auth, (user)=>{
           setUser(user)
           setLoading(false)
       })

    },[])
    // logout user from firebase
    const logOut =()=>{
        signOut(auth).then(()=>{
            console.log("Log Out")
        })
    }
    
    
    return {googlSignIn,user,setUser,logOut,loading}
};

export default useFirebase;