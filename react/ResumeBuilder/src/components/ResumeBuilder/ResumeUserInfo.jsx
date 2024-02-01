import { useContext,useState } from "react"
import { ResumeContext } from "../../contexts/resumeContext"

// Full name , About me , Phone num, Email, Work Experience, Education


function ResumeUserForm(props){

    const {currInfo,setCurrInfo,builderInfo,setBuilderInfo} = props
    // const {builderInfo,setBuilderInfo,loggedUser} = useContext(ResumeContext)
    

    const getUserInfo = (e) =>{
        currInfo[e.target.name] = e.target.value;
        console.log(currInfo);
        setCurrInfo({...currInfo})
    }

    const submitUserInfo = async(e) =>{
        e.preventDefault()
        try{
            // TODO : Change information to push into the fireStore data (Resumes)
            // TODO : Make the information get into the global array.
            setBuilderInfo({...currInfo})
            console.log(builderInfo);
        }
        catch(err){
            console.error(err);
        }
    }


    return(
        <>
        {/* <form action="" name="resumeUserInfo" onSubmit={submitUserInfo}> */}
            {/* <label for="resumeFullName">Enter your Full name* : </label><br /> */}
            <input placeholder="Full name :" type="text" name="resumeFullName" onChange={getUserInfo} required /><br></br>
            {/* <label for="resumeEmail">Email : </label><br /> */}
            <input placeholder="Email Address : " type="email" name="resumeEmail" onChange={getUserInfo} required /><br></br>
            {/* <label for="resumePhone">Phone number : </label><br /> */}
            <input type="number" placeholder="Phone number : " name="resumePhone" onChange={getUserInfo} required /><br></br>
            {/* <div className="resumeAbout"> */}
                {/* <label for="resumeAbout">Write about Urself : </label><br /> */}
            <textarea placeholder="Write about urself :" name="resumeAbout" onChange={getUserInfo} required /><br></br>
            {/* </div> */}
            {/* <button type="submit">Submit Form</button><br></br> */}
        {/* </form> */}
        </>
    )
}

export default ResumeUserForm