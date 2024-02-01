import { useContext,useState } from "react"
import { ResumeContext } from "../../contexts/resumeContext"

function ResumeWorkExp(props){

    const {currWorkExp,setCurrWorkExp} = props
    const {builderWorkExp,setBuilderWorkExp,loggedUser} = useContext(ResumeContext)

    const getUserWorkExp = (e) =>{
        // console.log(e);
        // console.log(e.target);
        currWorkExp[e.target.name] = e.target.value
        console.log({...currWorkExp});
        setCurrWorkExp(currWorkExp)
    }
    
    const submitUserWorkExp = async(e) =>{
        try{
            e.preventDefault()
            console.log(loggedUser);
            console.log({...currWorkExp});
            // setBuilderWorkExp({...currWorkExp})
        }
        catch(err){
            console.error(err);
        }
    }


    return (
        <>
            {/* <form action="" name="WorkExpForm" onSubmit={submitUserWorkExp}> */}
                <dd>
                {/* <label htmlFor="workExpDescription"> Work's Description : </label><br/> */}
                <textarea placeholder="Describe the Job" type="text" name="workExpDescription" onChange={getUserWorkExp} required />
                {/* <label htmlFor="workJob"> Work's job : </label>
                <input type="text" name="workJob" onChange={getUserWorkExp} /><br></br> */}
                {/* <label htmlFor="workDuraion"> Work's duration : </label><br/> */}
                <input type="text" name="workDuration" placeholder="Time Period : " onChange={getUserWorkExp} required />
                </dd>
                {/* <button type="submit">Submit Work Experience</button><br></br> */}
            {/* </form> */}
        </>
    )
}

export default ResumeWorkExp