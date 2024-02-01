import React, { useState, useContext, useEffect } from "react";
import UsersProvider, { UserContext,fireUsersRef } from './contexts/userContext';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function NavBar(){

    const {isLoggedIn, loggedUser,setLoggedUser,logOutUser } = useContext(UserContext)
    
    return (
    <div>
        <nav className='navBar'>
            {isLoggedIn ? (
                <>
                    <Link to='/Resume'>Resume Builder </Link>
                    <Link to='/UserResumes'>My Resume's</Link>
                    <button onClick={logOutUser} className="signOutBtn">Click to logout.</button>
                </>)
            :(
                <>
                <Link to='/'>Home Page</Link>
                <Link to='/Authentication'>Authentication </Link>
                </>
            )}


        </nav>
        {/* <button onClick={signUserOut} className="logOutBtn">Click to logout.</button> */}
    </div>
    )
}

export default NavBar
