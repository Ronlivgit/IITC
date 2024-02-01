import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Budget from "./pages/Budget"
import AboutUs from './components/Home/AboutUs'
import Authentication from "./pages/Authentication"
import Home from "./pages/Home"
import NavBar from './components/Navbar'
import './components/Tracker/BudgetTracker.css'
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'
import { fireAuth } from './config/firebaseConfig'
import { createUserWithEmailAndPassword, onAuthStateChanged , getAuth , signInWithEmailAndPassword  } from 'firebase/auth'


function App() {

  const [userNames,setUserNames] = useState([])
  const [newUser,addNewUser] = useState({})
  const [isLoggedIn,setLoggedIn] = useState(false)
  const [loggedUser,setLoggedUser] = useState(null)


  // useEffect(()=>{
  //   loggedUser ? useNavigate("./pages/Budget.jsx")
  //   :
  //   useNavigate("./pages/Authentication.jsx")
  // })

  useEffect (()=> {
    onAuthStateChanged(fireAuth,(currUser) =>{
      console.log(currUser);
      if(currUser){
        setLoggedUser({email:currUser.email, id:currUser.uid})
        console.log(loggedUser);
        setLoggedIn(true)
      }
      else{
        console.log("onAuth Else,not Logged in.");
        setLoggedIn(false)
        loggedUser == null
      }
  })
  },[isLoggedIn])

  return (
    <BrowserRouter>
    <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} loggedUser={loggedUser}/>} />
        <Route path='/Budget' element={<Budget isLoggedIn={isLoggedIn} loggedUser={loggedUser}/>} />
        <Route path='/Authentication' element={<Authentication userNames={userNames}
         setUserNames={setUserNames} newUser={newUser} addNewUser={addNewUser} 
         isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>} loggedUser={loggedUser}/>
      </Routes>
      {/* <Budget /> */}
    </BrowserRouter>
  )

}

export default App


// ! SUM UP OF TODAY'S LEARNING :
    // Syntax : we open with : BrowserRouter, afterwards we use Routes and inside Routes we place as many single Route as needed. 
    // <BrowserRouter>
    //   <Routes>
    //     <Route>
    /* <Route path='/Books' element={<Books />} /> : This will create the Route of the site, example : www.xyz.com/Books (the route path) */

    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    // Props drilling : information that moves through parent to child elements.
    // If we need local infomartion we use it in Component and if we need it globally (around all site), we write it in App.jsx so it can move around the childrens




// ! BACKUP CODE FOR LocalStorage :
  // useEffect ( () => {
  //   const usersData = JSON.parse(localStorage.getItem("userArray"))
  //   if(usersData ) {
  //       setUserNames(usersData)
  //   }
  // },
  // [])

  
  // useEffect (() => {
  //   localStorage.setItem("userArray", JSON.stringify(userNames))
  // },
  // [userNames])

  // ? Logged/Not
  // useEffect (()=> {
  //   isLoggedIn ? console.log("Logged in already") : console.log("Not logged in");
  // },[isLoggedIn])

