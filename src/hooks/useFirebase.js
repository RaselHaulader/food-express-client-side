import { useEffect, useState } from 'react';
import firebaseInit from '../firebase/firebaseInit';
import {GoogleAuthProvider,signOut, getAuth,signInWithPopup,onAuthStateChanged } from 'firebase/auth';
firebaseInit()
const auth = getAuth()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    
    const googlSignIn=()=>{
       return  signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
       onAuthStateChanged(auth, (user)=>{
           setUser(user)
           setLoading(false)
       })

    },[])
    const logOut =()=>{
        signOut(auth).then(()=>{
            console.log("Log Out")
        })
    }
    
    
    
    return {googlSignIn,user,setUser,logOut,loading}
};

export default useFirebase;