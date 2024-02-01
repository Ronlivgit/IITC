import React, { createContext, useState, useContext, useEffect } from "react";
import { fireAuth, dataBase } from '../config/firebaseConfig'
import { collection } from 'firebase/firestore'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { UserContext } from "./userContext";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export const fireResumeRef = collection(dataBase, "ResumeList")
export const ResumeContext = createContext()

function ResumeProvider({ children }) {

    const { loggedUser, fireUsersRef } = useContext(UserContext);
    // const [builderInfo, setBuilderInfo] = useState([]);
    // const [builderEducation, setBuilderEducation] = useState([])
    // const [builderWorkExp, setBuilderWorkExp] = useState([])



    return (
        <ResumeContext.Provider value={{
            // fireUsersRef, builderInfo, setBuilderInfo, addResume,
            // builderEducation, setBuilderEducation, builderWorkExp, setBuilderWorkExp
        }}>
            {children}
        </ResumeContext.Provider>
    )
}

export default ResumeProvider