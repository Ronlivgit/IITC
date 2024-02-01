import React , {createContext, useState, useContext, useEffect} from "react";
import { fireAuth, dataBase } from '../config/firebaseConfig'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {addDoc , collection, onSnapshot, setDoc , doc, getDoc, getDocs , deleteDoc, query , where} from 'firebase/firestore'

export const UserContext = createContext()
export const fireUsersRef = collection(dataBase,"UserList")

// TODO Export resumeRef through the Resume Contexts.
//? export const fireResumeRef = collection(dataBase,"ResumeList") 


function UsersProvider({children}){
    const [loggedUser,setLoggedUser] = useState({})
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [isUserAdmin,setIsUserAdmin] = useState(false)
    const [adminUser,setAdminUser] = useState({})

    const asddsa = async() => {
        const checkIfAdmin = await getDocs(query(fireUsersRef,where("role","==","admin")))
        // console.log(checkIfAdmin);
        if(!checkIfAdmin.empty){
            const adminId = checkIfAdmin.docs[0].id
            // console.log(checkIfAdmin);
            console.log({...loggedUser} , "is admin so setting to true");
            setAdminUser({...loggedUser})
            setIsUserAdmin(true)
        }
        else{
            console.log({...loggedUser}, " Is a normal user , not admin.");
            setIsUserAdmin(false)
        }
    }

    useEffect(()=>{
        onAuthStateChanged(fireAuth,(currUser) =>{
            if(currUser){
                setLoggedUser({email:currUser.email,uid:currUser.uid,role:"User"})
                console.log(loggedUser);
                setIsLoggedIn(true)
            }
            else{
                console.log(currUser , " Has logged out.");
                setIsLoggedIn(false)
            }
        })
    },[isLoggedIn])

    useEffect(()=>{
        asddsa()
    },[isLoggedIn])


    const logOutUser = () =>{
        signOut(fireAuth)
        .then((user)=>{
            console.log(isLoggedIn);
            console.log(user, " Logged out");
            setIsLoggedIn(false)
            console.log(isLoggedIn);
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    return(
        <UserContext.Provider value={{isLoggedIn,setIsLoggedIn,loggedUser,setLoggedUser,logOutUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UsersProvider