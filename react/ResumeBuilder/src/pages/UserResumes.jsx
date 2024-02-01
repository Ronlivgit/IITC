import { useState,useContext,useEffect } from 'react'
import { UserContext } from '../contexts/userContext'
import {addDoc , collection, onSnapshot, setDoc , doc, getDoc, getDocs , deleteDoc, query , where} from 'firebase/firestore'
import { dataBase, fireAuth } from '../config/firebaseConfig'
import UserResLoader from '../components/UserResumes/UserResLoader'
import CreatePDF from '../components/PDFCreator'
// import '../pages/ResumeBuilder2.css'

function UserResumes(){
    const {isLoggedIn, loggedUser, isUserAdmin , setIsUserAdmin , adminUser , fireUsersRef } = useContext(UserContext)
    const [allUserResumes,setAllUserResumes] = useState([])
    const [isDoneLoad,setIsDoneLoad] = useState(false)


    const ResumesRef = collection(dataBase,"ResumeList")

    const DeleteEmptyDocs = async() =>{
        try{
            // console.log(ResumesRef);
            const temporaryArray = []
            const checkIfExist = await getDocs(query(ResumesRef,where("creatorId","==",loggedUser.uid)))
            checkIfExist.forEach(async(doc)=>{
                if(doc.data().educationInfo.length == 0 && doc.data().workExpInfo.length == 0 && doc.data().userInfo.length == 0){
                    // console.log("Deleting document:", doc.id);
                    // console.log(doc.data());
                    await deleteDoc(doc.ref)
                    console.log(doc.id , " Is Deleted");
                }
                else{
                    temporaryArray.push({...doc.data()})
                }
            })
            setAllUserResumes(temporaryArray)
        }
        catch(err){
            console.error(err);
        }
    }

    const printAllForAdmin = async () =>{
        try{
            console.log(loggedUser);
            console.log(adminUser);
            if(loggedUser == adminUser){
                console.log("Logged user is admin");
            }
            else{
                console.log("DUnno");
            }
        }
        catch(err){
            console.error(err);
        }
    }
    
    useEffect(()=>{
            DeleteEmptyDocs()
            console.log(loggedUser);
            console.log("asdasd");
    },[loggedUser])

    // useEffect(()=>{
    //     printAllForAdmin()
    // },[adminUser])

    useEffect(()=>{
        if(allUserResumes.length > 0){
            console.log(allUserResumes);
            setIsDoneLoad(true)
        }
        console.log(allUserResumes);
    },[allUserResumes])

    console.log(isDoneLoad);

    return (
        isDoneLoad ?
        <>
            <div className='pageWrapping'>
                <h1>User's Resumes Page : </h1>
                <div className='allResumesDiv'>
                    {allUserResumes.map((item,index)=>{
                        return <UserResLoader currItemInfo={item.userInfo} currItemExp={item.workExpInfo} currItemEducation={item.educationInfo}
                        key={`asd_`} allUserResumes={allUserResumes} setAllUserResumes={setAllUserResumes} index={index} />
                    })}
                </div>
            </div>
                {/* {allUserResumes.map((item,index)=>{
                return <CreatePDF fileName={"userInfoDiv"} />})} */}
        </>
        :
        <>
            <h1>Wait for full Load</h1>
        </>
    )
}

export default UserResumes