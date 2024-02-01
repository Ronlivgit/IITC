import { fireAuth, dataBase } from '../config/firebaseConfig'
import React, { createContext, useState, useContext, useEffect } from "react";
import Login from '../components/Authentication/Login';
import SignUp from '../components/Authentication/SignUp';
import UsersProvider, { UserContext,fireUsersRef } from '../contexts/userContext';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "firebase/auth";
import {collection , addDoc, onSnapshot, setDoc , doc, getDoc, getDocs , deleteDoc} from 'firebase/firestore'



function Authentication() {

    const [newUser,setNewUser] = useState({})
    const [isRegistered, setIsRegistered] = useState(true)
    const {isLoggedIn, loggedUser,setLoggedUser } = useContext(UserContext)


    const inputInfo = (e) => {
        newUser[e.target.name] = e.target.value
        setNewUser(newUser)
    }

    const submitLogin = async (e) =>{
        e.preventDefault()
        const logUser = await signInWithEmailAndPassword(fireAuth,newUser.Email,newUser.Password)
    }

    const submitSignUp = async(e) =>{
        try{
            e.preventDefault()
            console.log(newUser);
            const registerUser = await createUserWithEmailAndPassword(fireAuth,newUser.Email,newUser.Password)
            const userId = await addDoc(fireUsersRef,{...newUser, userId:registerUser.user.uid,role:"User"})
        }
        catch(err){
            console.error(err);
        }
    }

    const toggleType = () =>{
        setIsRegistered(!isRegistered)
    }


    return (
        <>
        <div className='authDiv'>
            {isRegistered ? <Login inputInfo={inputInfo} submitLogin={submitLogin}/> : <SignUp inputInfo={inputInfo} submitSignUp={submitSignUp}/>}
            <br /><h3>Don't have an account? <span onClick={toggleType}>{isRegistered ? "Click here to Sign Up" : "Click here to Log In"}</span> </h3>
        </div>
        </>
    )

}

export default Authentication