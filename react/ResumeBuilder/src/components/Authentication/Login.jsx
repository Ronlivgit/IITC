

function Login(props){
    // Full name, about me , Phone , email, 
    // work experience (Company name,Role,TimeFrame), education (What was learned and time frame)
    const {inputInfo,submitLogin} = props
        return(
            <>
                <h1>Login</h1>
                <form name="loginForm" onSubmit={submitLogin}>
                    <label htmlFor="Email">Email Address : </label> <br />
                    <input type="text" name="Email" onChange={inputInfo}/><br></br>
                    <label htmlFor="Password">Password : </label><br />
                    <input type="password" name="Password" onChange={inputInfo} /><br></br><br />
                    <button type="submit" className="submitAuth" >Submit</button><br />
                </form>
            </>
        )
    }
    
export default Login