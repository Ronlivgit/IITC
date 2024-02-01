import App from "./App";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { createUserWithEmailAndPassword, onAuthStateChanged , getAuth , signInWithEmailAndPassword , signOut } from 'firebase/auth'
import { fireAuth } from './config/firebaseConfig'

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
            <Link to='/'>Home Page</Link>
            <Link to='/tokens'>CryptoCurrencies </Link>
            <Link to='/Watchlist'>Watchlist</Link>
            <Link to='/Authentication'>Authentication </Link>
        </nav>
        <button onClick={signUserOut} className="logOutBtn">Click to logout.</button>
    </div>
    )
}

export default NavBar
