import { useState,useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/userContext'
import {addDoc , collection, onSnapshot, setDoc , doc, getDoc, getDocs , deleteDoc, query , where} from 'firebase/firestore'
import { dataBase, fireAuth } from '../../config/firebaseConfig'
import UserResumes from '../../pages/UserResumes'
import CreatePDF from '../PDFCreator'



function UserResLoader(props){
    const {isLoggedIn, loggedUser } = useContext(UserContext)
    const { allUserResumes , setAllUserResumes, currItemInfo, currItemEducation, currItemExp , index } = props


    return(
        <>
            <div className='userInfoDiv'>
                <p>Name : {currItemInfo.resumeFullName}</p>
                <p>About : {currItemInfo.resumeAbout}</p>
                <p>Email : {currItemInfo.resumeEmail}</p>
                <p>Phone Num : {currItemInfo.resumePhone}</p>
                {currItemEducation.map((item,index)=>{
                    return <section className='userEduSect'>
                        <p>Type of Education : {item.educationType} , Object num {index} out of {currItemEducation.length}</p>
                        <p>Level of Education : {item.educationLevel}</p>
                        <p>Year of Education : {item.educationYear}</p>
                    </section>
                })}
                {currItemExp.map((item,index)=>{
                    return <section className='userExpSect'>
                        <p>Job's Description : {item.workExpDescription} ,  Object num {index} out of {currItemExp.length}</p>
                        <p>Job's Duration : {item.workDuration}</p>
                    </section>
                })}
            </div>
            <CreatePDF fileName={"userInfoDiv"}/><br /><br />
        </>
    )
}

export default UserResLoader


// !BACKUP FUNCTIONS
// ? Backup of the delete empty + create array to contain relevant docs. (TRANSFERED TO UserResumes.jsx)
// const {isLoggedIn, loggedUser } = useContext(UserContext)
// const { allUserResumes , setAllUserResumes } = props

// const ResumesRef = collection(dataBase,"ResumeList")

// const DeleteEmptyDocs = async() =>{
//     try{
//         console.log(ResumesRef);
//         const temporaryArray = []
//         const checkIfExist = await getDocs(query(ResumesRef,where("creatorId","==",loggedUser.uid)))
//         checkIfExist.forEach(async(doc)=>{
//             if(doc.data().educationInfo.length == 0 && doc.data().workExpInfo.length == 0 && doc.data().userInfo.length == 0){
//                 console.log("Deleting document:", doc.id);
//                 console.log(doc.data());
//                 await deleteDoc(doc.ref)
//                 console.log(doc.id , " Is Deleted");
//             }
//             else{
//                 temporaryArray.push({...doc.data()})
//             }
//         })
//         setAllUserResumes(temporaryArray)
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// useEffect(()=>{
//     DeleteEmptyDocs()
// },[loggedUser])
// // console.log(doc.id);
// // console.log(doc.data());
// // setAsddsa([...asddsa],{...doc.data()},doc.id)

// useEffect(()=>{
//     console.log(allUserResumes);
// },[allUserResumes])