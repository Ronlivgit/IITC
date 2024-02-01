import App from "./App";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { createUserWithEmailAndPassword, onAuthStateChanged , getAuth , signInWithEmailAndPassword , signOut } from 'firebase/auth'
import { fireAuth } from './config/firebaseConfig'
import ThemeProvider, { ThemeContext } from "./Context/Theme";
import React , {createContext, useState, useContext} from "react";


function NavBar(props){

    const signUserOut = (e)=> {
        signOut(fireAuth) 
        .then(()=>{
            console.log(props.isLoggedIn);
            props.setLoggedIn(false)
            console.log("User logged out");
        })
        .catch((error)=>{
            console.error(error);
        })
    }
    console.log(props.isLoggedIn);
    
    return (
    <div>
        <nav className='navBar'>
            {props.isLoggedIn ? (
                <>
                    <Link to='/tokens'>CryptoCurrencies </Link>
                    <Link to='/Watchlist'>Watchlist</Link>
                    <button onClick={signUserOut} className="logOutBtn">Click to logout.</button>
                </>)
            :(
                <>
                <Link to='/Authentication'>Authentication </Link>
                <Link to='/'>Home Page</Link>
                </>
            )}


        </nav>
        {/* <button onClick={signUserOut} className="logOutBtn">Click to logout.</button> */}
    </div>
    )
}

export default NavBar
