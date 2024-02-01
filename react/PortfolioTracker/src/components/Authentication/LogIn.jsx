import App from "../../App";
import Authentication from '../../pages/Authentication'

function LogIn(props) {

    return(
        <>
            <div>
                <h1>Log In : </h1>
                <form className="logInForm" onSubmit={props.checkLogin}>
                    <input type="email" placeholder="Enter Email : " name="email" onChange={props.inputDetails}/>
                    <input type="password" placeholder="Enter Password : " name="password" onChange={props.inputDetails}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default LogIn