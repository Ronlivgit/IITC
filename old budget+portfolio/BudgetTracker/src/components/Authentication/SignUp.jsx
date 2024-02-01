import { useState } from "react"
import Authentication from "../../pages/Authentication"
import App from "../../App"
// import { changeHandler } from "../../pages/Authentication"

function SignUp(props){

    return (
        <div>
            <h1>Sign Up : </h1>
            <form className="signUpForm" onSubmit={props.subHandler}>
                {/* <input onChange={props.changeHandler} type="text" placeholder="Enter Username" name="userName" /><br /> */}
                <input onChange={props.changeHandler} type="email" placeholder="Enter Email" name="Email" /><br />
                <input onChange={props.changeHandler} type="password" placeholder="Enter password" name="Password" /><br />
                <button type="submit" onSubmit={props.subHandler}>Submit</button>
            </form>
        </div>
    )

}

export default SignUp