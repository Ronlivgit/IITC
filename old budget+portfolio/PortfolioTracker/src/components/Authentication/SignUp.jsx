import App from "../../App";
import Authentication from '../../pages/Authentication'

function SignUp(props) {

    return(
        <>
            <div>
                <h1>Register : </h1>
                <form className="signUpForm" onSubmit={props.submitRegister}>
                    <input type="email" placeholder="Enter Email : " name="email" onChange={props.inputDetails}/>
                    <input type="password" placeholder="Enter Password : " name="password" onChange={props.inputDetails}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default SignUp