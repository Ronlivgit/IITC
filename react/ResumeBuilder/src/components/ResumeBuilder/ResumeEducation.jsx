import { useContext,useState } from "react"
import { ResumeContext } from "../../contexts/resumeContext"

function ResumeEducation(props){

    const {currEducation,setCurrEducation} = props
    const {builderEducation,setBuilderEducation,loggedUser} = useContext(ResumeContext)
    // const [currEducation,setCurrEducation] = useState({})

    const getUserEducation = (e) =>{
        currEducation[e.target.name] = e.target.value
        console.log({...currEducation});
        setCurrEducation(currEducation)
    }
    // ? went Out to
    // const submitUserEducation = async(e) =>{
    //     try{
    //         e.preventDefault()
    //         console.log(builderEducation);
    //         console.log({...currEducation});
    //         setBuilderEducation([...builderEducation,...currEducation])
    //         console.log(builderEducation);
    //     }
    //     catch(err){
    //         console.error(err);
    //     }
    // }

// onClick = ()=>{return Component of extra Education,Work Exp}
    return (
        <>
            {/* <form action="" name="educationForm" onSubmit={submitUserEducation}> */}
                {/* <label htmlFor="educationType"> Education Type : </label><br/> */}
                {/* <label htmlFor=""> Education's Level : </label><br/> */}
                {/* <label htmlFor="educationYear"> Education's Year :</label><br/> */}
                {/* <button type="submit">Submit Education</button><br></br> */}
                <dd>
                    <input required placeholder="Education type" type="text" name="educationType" onChange={getUserEducation}/><br></br>
                    <input required placeholder="Education Level" type="text" name="educationLevel" onChange={getUserEducation}/><br></br>
                    <input required placeholder="Education years" type="number" name="educationYear" onChange={getUserEducation}/><br></br>
                </dd>
            {/* </form> */}
        </>
    )
}

export default ResumeEducation