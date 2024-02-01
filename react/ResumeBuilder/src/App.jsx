import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProvider,{ UserContext } from './contexts/userContext.jsx'
import Authentication from './pages/Authentication.jsx'
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import HomeFunc from './pages/Home.jsx'
import NavBar from './Navbar.jsx'
import ResumePage from './pages/ResumeBuilder.jsx'
import UserResumes from './pages/UserResumes.jsx'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)
  const {isLoggedIn, loggedUser } = useContext(UserContext)



  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomeFunc />}/>
        <Route path='/Authentication' element={<Authentication />}/>
        <Route path='/Resume' element={<ResumePage />}/>
        <Route path='/UserResumes' element={<UserResumes />}/>    
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
