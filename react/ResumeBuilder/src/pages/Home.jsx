import React, { createContext, useState, useContext, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function HomeFunc(){

    
    return (
        <>
            <div className="homeDiv">
                <h1>This project is a Resume builder based on user's data</h1>
                <h2>Log in to start using the App</h2>
                <a><Link to='/Authentication'><button className="homeBtn">Click to login</button></Link></a>
            </div>
        </>
    )
}

export default HomeFunc