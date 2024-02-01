import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,   } from "firebase/auth";
import { dataBase , fireAuth } from '../config/firebaseConfig'
import { useState } from "react";
import LogIn from "../components/Authentication/LogIn";
import SignUp from "../components/Authentication/SignUp";
import {collection , addDoc, onSnapshot, setDoc , doc, getDoc, getDocs , deleteDoc} from 'firebase/firestore'
import App from "../App";


function Authentication(props){

    const [hasUser,setHasUser] = useState(true)
    
    const usersRef = collection(dataBase, "UserData")

    const [userList,setUserList] = useState([])



    const toggleType = () =>{
        setHasUser(!hasUser)
    }

    // Sets input's value and name as object's value and name
    const inputDetails = (e) =>{
        props.newUser[e.target.name] = e.target.value
        props.addNewUser(props.newUser)
    }

    // Register function.
    const submitRegister = async (e) =>{
        e.preventDefault()
        console.log(props.newUser);
        try{
            const registerUser = await createUserWithEmailAndPassword(fireAuth, props.newUser.email,props.newUser.password )
            console.log(registerUser);
            // const userId = await addDoc(usersRef,{...props.newUser, userId:registerUser.user.uid})
            // console.log(userId.uid);
        }
        catch(err){
            console.error(err)
        }
    }


    // ! add auto-path back to tokens or aboutus after user is logged in.
    
    const checkLogin = async (e) =>{
        e.preventDefault()
        try{
            const userLogin = await signInWithEmailAndPassword(fireAuth,props.newUser.email,props.newUser.password)
            console.log(userLogin);
            console.log("userLogged");
            if (userLogin.operationType == "signIn"){
                console.log("Good, signed in");
                props.setLoggedIn(true);
            }
            else{
                console.log("Something is wrong, try again.");
            }
        }
        catch(err){
            console.error(err)
        }
    }


    return (
        <>
        {
            hasUser ? <LogIn inputDetails={inputDetails} submitRegister={submitRegister} checkLogin={checkLogin} /> : <SignUp submitRegister={submitRegister} inputDetails={inputDetails} />
        }
        <p>Don't have an account? <span onClick={toggleType}>{hasUser ? "Click here to Sign Up" : "Click here to Log In"}</span> </p>
        </>
    )
}

export default Authentication