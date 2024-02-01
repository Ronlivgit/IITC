import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { dataBase, fireAuth } from './config/firebaseConfig'
import { addDoc, collection, onSnapshot, setDoc, doc, getDoc, getDocs, deleteDoc, query, where } from 'firebase/firestore'
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import Tokens from './pages/Tokens'
import WatchList from './pages/WatchList'
import Authentication from './pages/Authentication';
import AboutUs from './pages/AboutUs'
import NavBar from './NavBar';
import HighLightItem from './components/Highlight'
import FavoriteById from './components/FavoritesById/favById'
import ThemeProvider from './Context/Theme';
import {ThemeContext} from './Context/Theme';

function App() {

  const { tokenID } = useParams()
  // const navUser = useNavigate()+

  const WatchlistRef = collection(dataBase, "Watchlist");
  const UserDataRef = collection(dataBase, "UserData");

  // console.log(UserDataRef);
  // console.log(WatchlistRef);
  const [loggedUser, setLoggedUser] = useState(null);

  const [tokenList, setTokenList] = useState([])
  const [newToken, addNewToken] = useState({})
  const [isLiked,setIsLiked] = useState([])
  const [newUser, addNewUser] = useState({})
  const [removed,setRemoved] = useState(false)

  const [isLoggedIn, setLoggedIn] = useState(false)

  // ! If(currUser.uid != pickedToken.userId )

  const removeFromWatch = async (tokenInfo,userObj) => {
    const checkIfExist = await getDocs(
      query(WatchlistRef,
          where('id', "==", tokenInfo.id),
          where('userId', "==", userObj.uid)
      ));
    console.log(checkIfExist);
    let deleteIt = checkIfExist.docs[0]
    await deleteDoc(deleteIt.ref)
    setRemoved(true)
  }


  useEffect(() => {
    onAuthStateChanged(fireAuth, (currUser) => {
      if (currUser) {
        setLoggedUser({ email: currUser.email, uid: currUser.uid })
        console.log(loggedUser);
        setLoggedIn(true)
      }
      else {
        console.log(currUser.email + " has logged out");
        console.log("onAuth Else,not Logged in.");
        setLoggedIn(false)
      }
    })
  }, [isLoggedIn])
()


  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></NavBar>
        </ThemeProvider>

        <Routes>


          {isLoggedIn ?(
          <>
              <Route path='/tokens' element={<Tokens loggedUser={loggedUser} removeFromWatch={removeFromWatch}
              tokenList={tokenList} addNewToken={addNewToken} WatchlistRef={WatchlistRef}
              newToken={newToken} setTokenList={setTokenList} UserDataRef={UserDataRef} />} />
              
              <Route path="/tokens/:tokenID" element={<HighLightItem />} />
              
              <Route path='/Watchlist' element={<WatchList tokenList={tokenList} addNewToken={addNewToken} WatchlistRef={WatchlistRef} removeFromWatch={removeFromWatch}
              newToken={newToken} setTokenList={setTokenList} isLoggedIn={isLoggedIn} loggedUser={loggedUser} setLoggedUser={setLoggedUser} removed={removed} setRemoved={setRemoved}/>}/>
              <Route path="/Watchlist/:tokenID" element={<HighLightItem />} />
          </>)
          :(
            <>
            <Route path='/' element={<AboutUs isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />

            <Route path='/Authentication' element={<Authentication newUser={newUser} addNewUser={addNewUser} UserDataRef={UserDataRef}
            isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />      
            </>
          )}

          {/* <Route path="/testing" element={<FavoriteById WatchlistRef={WatchlistRef} UserDataRef={UserDataRef} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
