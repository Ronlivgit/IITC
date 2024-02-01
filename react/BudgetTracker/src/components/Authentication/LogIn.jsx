import { useState } from "react"
import Authentication from "../../pages/Authentication"
import App from "../../App"
// import { changeHandler } from "../../pages/Authentication"



function LogIn(props) {

    return (
        <div>
            <h1>Log In : </h1>
            <form className="logInForm" onSubmit={props.checkUser}>
                <input onChange={props.changeHandler} type="email" placeholder="Enter Email" name="Email" /><br />
                <input onChange={props.changeHandler} type="password" placeholder="Enter password" name="Password" /><br />
                <button type="submit" onSubmit={props.checkUser} >Submit</button>
            </form>
        </div>
    )
}

export default LogIn


{/* <div>
<h1>Log In : </h1>
<form className="logInForm" onSubmit={props.checkUser}>
    <input onChange={props.changeHandler} type="text" placeholder="Enter Email" name="Email" /><br />
    <input onChange={props.changeHandler} type="password" placeholder="Enter password" name="Password" /><br />
    <button type="submit" onSubmit={props.checkUser} >Submit</button>
</form>
</div> */}