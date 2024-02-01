

function SignUp(props){
// Full name, about me , Phone , email, 
// work experience (Company name,Role,TimeFrame), education (What was learned and time frame)
    const {inputInfo,submitSignUp} = props
    return(
        <>
            <h1>SignUp</h1>
            <form name="signUpForm" onSubmit={submitSignUp}>
                <label htmlFor="Email">Email Address : </label><br />
                <input type="text" name="Email" onChange={inputInfo} /><br></br>
                <label htmlFor="Password" >Password : </label><br />
                <input type="password" name="Password" onChange={inputInfo} /><br></br><br />
                <button type="submit" className="submitAuth">Submit</button>
            </form>
        </>
    )
}

export default SignUp
{/* <form name="signUpForm">
<label htmlFor="fullName">What's your full name?</label>
<input type="text" name="fullName" />
<label htmlFor="phoneNum">What's your Phone Number?</label>
<input type="text" name="phoneNum" />
<label htmlFor="EmailAdd">What's your Email Address?</label>
<input type="text" name="EmailAdd" />
</form> */}