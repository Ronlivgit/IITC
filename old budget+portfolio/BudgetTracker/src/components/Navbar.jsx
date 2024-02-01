// We build the navbar in different file and then use Export and import it in App.jsx
// import { signOut } from 'firebase/auth'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { createUserWithEmailAndPassword, onAuthStateChanged , getAuth , signInWithEmailAndPassword , signOut } from 'firebase/auth'
import { fireAuth } from '../config/firebaseConfig'


function NavBar(props){

    const signUserOut = (e)=> {
        signOut(fireAuth) .then(()=>{
            props.isLoggedIn == false
        })
        .catch((error)=>{
            console.error(error);
        })
    }
    
    return (
    <div>
        <nav className='navBar'>
            <Link to='/'>Home Page </Link>
            <Link to='/Budget'>Tracker </Link>
            <Link to='/Authentication'>Authentication </Link>
        </nav>
        <button onClick={signUserOut}>Click to logout.</button>
    </div>
    )
}

export default NavBar