import React, {useContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import UsersProvider,{ UserContext } from './contexts/userContext.jsx'
import ResumeProvider,{ResumeContext} from './contexts/resumeContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UsersProvider>
    <ResumeProvider>
      <App />
    </ResumeProvider>
  </UsersProvider>
)
