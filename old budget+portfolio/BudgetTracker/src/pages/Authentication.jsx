import LogIn from '../components/Authentication/LogIn'
import SignUp from '../components/Authentication/SignUp'
import NavBar from "../components/Navbar"
import { useState, useEffect } from 'react'
import App from '../App'
import { fireAuth } from '../config/firebaseConfig'
import { createUserWithEmailAndPassword, onAuthStateChanged , getAuth , signInWithEmailAndPassword , signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Budget from './Budget'

// We create toggle to know if he needs Signup or login.
// Line 12-14 + 18-20 is about the toggle from true to false to toggle sign or log.


function Authentication(props){
    
    const [registered,isRegistered] = useState(true);
    
    // ! Functions moved to App for global usage.
    // ! userNames = array of users, setUserName = sets new
    // ! newUser = the details of the user. , addNewUser = sets the new USER!!!
    
    const toggleMode= () =>{
        isRegistered(!registered)
    }
    
    // Fetch Input information.
    const changeHandler = (e) =>{
        props.newUser[e.target.name] = e.target.value
        props.addNewUser(props.newUser)
    }
    
    // Register
    const submitHandler= async (e) =>{
        try {
            e.preventDefault()
            const registeredUser = await createUserWithEmailAndPassword(fireAuth,props.newUser.Email,props.newUser.Password)
        }
        catch(err){
            console.error(err);
        }
    }

    // Login Validation
    const checkUserName = async (e) =>{
        try{
            e.preventDefault()
            const loginUser = await signInWithEmailAndPassword(fireAuth,props.newUser.Email,props.newUser.Password)
            console.log(loginUser);
            props.isLoggedIn == true
        }
        catch(err){
            console.error(err);
        }}

        //? old method of validating : 
        // e.preventDefault()
        // props.newUser[e.target.name] = e.target.value
        // console.log("works");
        // props.userNames.map ((item)=>{
        //     if(item.Email == (props.newUser.Email)){
        //         return (
        //             console.log(item.Email + "--- SPLIT HERE ---" + props.newUser.Email),
        //             console.log("Good If, you're logged in"),
        //             props.setLoggedIn (true)
        //             )
        //         }
        //         else{
        //             console.log(item.Email + "--- SPLIT HERE ---" + props.newUser.Email),
        //             console.log("Bad Else, couldn't log in.");
        //             // props.setLoggedIn (false);
        //         }
        //     })
        // ? end of old method.
        return(
            <>
            {
                registered ? <LogIn changeHandler={changeHandler} checkUser={checkUserName}/> : <SignUp changeHandler={changeHandler} subHandler={submitHandler}/>
            }

            <p>Don't have an account? <span onClick={toggleMode}> {registered ? "Click here to Sign Up." : "Click here to Log in" }</span></p>
        </>
    )
}


export default Authentication;