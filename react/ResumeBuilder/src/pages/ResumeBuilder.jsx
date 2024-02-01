import ResumeEducation from "../components/ResumeBuilder/ResumeEducation"
import ResumeUserForm from "../components/ResumeBuilder/ResumeUserInfo"
import ResumeWorkExp from "../components/ResumeBuilder/ResumeWorkExp"
import React, {useState,useEffect,useContext} from 'react'
import { ResumeContext } from "../contexts/resumeContext"
import {addDoc , collection, onSnapshot, setDoc , doc, getDoc, getDocs , deleteDoc} from 'firebase/firestore'
import { dataBase, fireAuth } from '../config/firebaseConfig'
import { UserContext } from "../contexts/userContext"
import CreatePDF from "../components/PDFCreator"
import 'bootstrap/dist/css/bootstrap.min.css';
// import './../pages/ResumeBuilder.css'
import './../pages/ResumeBuilder3.css'


function ResumePage(){
    const {isLoggedIn, loggedUser } = useContext(UserContext)
    const fireResumeRef = collection(dataBase, "ResumeList")

    const [builderInfo, setBuilderInfo] = useState([]);
    const [builderEducation, setBuilderEducation] = useState([])
    const [builderWorkExp, setBuilderWorkExp] = useState([])

    const [currWorkExp,setCurrWorkExp] = useState({})
    const [currEducation,setCurrEducation] = useState({})
    const [currInfo,setCurrInfo] = useState({})

    const [educationCount, setEducationCount] = useState(1);
    const [workExpCount, setWorkExpCount] = useState(1);
    //TODO  const [isDoneLoading,setIsDoneLoading] = useState(false)
    // ? After tests, clean the code and remove all unneccesarry
    const [isDoneLoading,setIsDoneLoading] = useState(false)

    const addEducationForm = () => {
        setCurrEducation({...currEducation})
        setBuilderEducation([...builderEducation,{...currEducation}])
        setEducationCount(educationCount + 1);
    };

    const addExperienceForm = (e) => {
        setCurrWorkExp({...currWorkExp})
        setBuilderWorkExp([...builderWorkExp,{...currWorkExp}]);
        setWorkExpCount(workExpCount + 1);
    };

    const dataBuilder = async(e) =>{
        e.preventDefault()
        setBuilderInfo({...currInfo})
        setBuilderEducation([...builderEducation,{...currEducation}])
        setBuilderWorkExp([...builderWorkExp,{...currWorkExp}])
        setIsDoneLoading(true)
    }
    
    const fireDataPusher = async() =>{
        try {
            const dataPusher = await addDoc(fireResumeRef,{
                    userInfo:builderInfo,
                    educationInfo:builderEducation,
                    workExpInfo:builderWorkExp,
                    creatorId:loggedUser.uid
                })
                console.log(dataPusher);
                setIsDoneLoading(false)
            }
            catch(err){
                console.error(err);
            }
        }
        
        useEffect(()=>{
            if(isDoneLoading == true){
                fireDataPusher()
            }
            else{
                
            }
        },[isDoneLoading])
        
        // TODO : Add validation about : Empty fields, make user finish filling Edu/Exp part before being able to add another input fields
        // TODO : Don't allow to submit with empty fields, 
    
    return(
        <>
            <div className="resumeFormDiv" id="page-wrap">
            {/* <br/><h1 className="h1Resume">This is the builder</h1> */}
                <form name="resumeForm" onSubmit={dataBuilder} className="resumeForm" >
                    <div id="contact-info" class="vcard">
                        <section className="userInfoSection">
                            <ResumeUserForm currInfo={currInfo} setCurrInfo={setCurrInfo} builderInfo={builderInfo} setBuilderInfo={setBuilderInfo} />
                                    {/* Using map on the array to eventually render new inputs for info.  */}
                        </section>
                    </div>
                    {/* <span className="userInfoSpan"></span> */}
                    <div class="clear"></div>
                    <span className="splittingSpan"></span>
                <dl>
                    <dd class="clear"></dd>
                    <dt>Education</dt>
                    <section className="userEducationSection">
                    {[...Array(educationCount)].map((_, index) => (
                        <ResumeEducation key={index} educationCount={educationCount} currEducation={currEducation} setCurrEducation={setCurrEducation} />
                    ))}
                    </section>
                    {/* <button type="button" data-html2canvas-ignore="true" className="addingBtn" onClick={addEducationForm}>Click to add extra Education form</button><br></br><br/> */}

                    <dd class="clear"></dd>

                    <span className="splittingSpan"></span>

                    {/* <ResumeWorkExp /> */}
                    <dt>Experience</dt>
                    <section className="userWorkExpSection">
                        {[...Array(workExpCount)].map((_, index) => (
                            <ResumeWorkExp key={index} educationCount={educationCount} currWorkExp={currWorkExp} setCurrWorkExp={setCurrWorkExp} />
                        ))}
                    {/* <button type="button" data-html2canvas-ignore="true" className="addingBtn" onClick={addExperienceForm} >Click to add extra Experience form</button><br></br><br/> */}
                    </section>
                    <div id="btnDiv">
                        <button type="button" data-html2canvas-ignore="true" className="addingBtn" onClick={addEducationForm}>Click to add extra Education form</button><br></br><br/>
                        <button type="button" data-html2canvas-ignore="true" className="addingBtn" onClick={addExperienceForm} >Click to add extra Experience form</button><br></br><br/>
                        <button type="submit" data-html2canvas-ignore="true" className="resumeSubmitBtn">Submit</button>
                        <CreatePDF fileName={"resumeForm"} />
                    </div>
                    
                    <dd class="clear"></dd>
                </dl>
                </form>
            </div>
        </>
    )
}

export default ResumePage