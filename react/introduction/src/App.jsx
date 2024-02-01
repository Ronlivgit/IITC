import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Employee from './components/Employee'
import EmployeeV2 from './components/EmployeeV2'
import "./components/Employee.css"



// import Counter from './components/Counter'


// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <>
    <div className='EmployeeSection'>
      <EmployeeV2 EmployeeV2Info={EmployeeDetails1} />
      <EmployeeV2 EmployeeV2Info={EmployeeDetails2} />
      <EmployeeV2 EmployeeV2Info={EmployeeDetails3} />
    </div>
    </>
    )
  }
  
  
  export default App
  

  // Simple start
  // <div>
  //   <button id="asdBTN">asdasdasd</button>
  //   <input placeholder='asddsa'></input>
  //   <p>pizdex cyxa blyat</p>
  //   <img src={url} alt="" />
  //   <h1>Hello</h1>
  //   <h1>{objCheck.title}</h1>
  //   <h1>{objCheck.author}</h1>
  //   <Employee EmployeeDetails={EmployeeDetails1} />
  //   <Employee EmployeeDetails={EmployeeDetails2} />
  //   <Employee EmployeeDetails={EmployeeDetails3} />
  // </div>



  // First task - OUR TEAM :

  
  // function App() {
  //   // const [count, setCount] = useState(0)
  //   const EmployeeDetails1 = {
  //     name:"JEFFERY BROWN",
  //     role:"Creative Leader",
  //     content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, tenetur tempora. Incidunt beatae, deleniti voluptatibus pariatur mollitia adipisci quibusdam. Suscipit magnam necessitatibus iure repudiandae quidem ratione. Soluta assumenda fugit minus!    ",
  //     picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
  // }
  
  // const EmployeeDetails2 = {
  //     name:"ANN RICHMOND",
  //     role:"Manager",
  //     content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, tenetur tempora. Incidunt beatae, deleniti voluptatibus pariatur mollitia adipisci quibusdam. Suscipit magnam necessitatibus iure repudiandae quidem ratione. Soluta assumenda fugit minus!",
  //     picture:"https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
  // }
  // const EmployeeDetails3 = {
  //     name:"ALEX GREENFIELD",
  //     role:"Programming Goru",
  //     content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, tenetur tempora. Incidunt beatae, deleniti voluptatibus pariatur mollitia adipisci quibusdam. Suscipit magnam necessitatibus iure repudiandae quidem ratione. Soluta assumenda fugit minus!",
  //     picture:"https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
  // }
  
  //   return (
  //     <>
  //     <h1 className='ourTeam'>Our Team</h1>
  //     <div className='EmployeeDiv'>
  //       <Employee EmployeeDetails={EmployeeDetails1} />
  //       <Employee EmployeeDetails={EmployeeDetails2} />
  //       <Employee EmployeeDetails={EmployeeDetails3} />
  //     </div>
  //     </>
  //     )
  //   }
    
    
  //   export default App
    